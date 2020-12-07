import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent())
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {

  const url = new URL(event.request.url)
  let options = {}

  /**
   * Updated Security Headers, based on the post below and output
   * from the securityheaders.io website.
   * https://scotthelme.co.uk/security-headers-cloudflare-worker/
  */

  let securityHeaders = {
    "Content-Security-Policy" : "default-src 'self';",
    "Strict-Transport-Security" : "max-age=31536000",
    "X-Xss-Protection" : "1; mode=block",
    "X-Frame-Options" : "DENY",
    "X-Content-Type-Options" : "nosniff",
    "Referrer-Policy" : "strict-origin-when-cross-origin",
    "Feature-Policy" : "none",
  }

  let sanitiseHeaders = {
    "Server" : "Outer Space, somewhere near Mars",
    "Content-Type" : "text/html; charset=utf-8"
  }

  let removeHeaders = [
    "Public-Key-Pins",
    "X-Powered-By",
    "X-AspNet-Version",
  ]

  /**
   * You can add custom logic to how we fetch your assets
   * by configuring the function `mapRequestToAsset`
   */
  // options.mapRequestToAsset = handlePrefix(/^\/docs/)
  // options.mapRequestToAsset = fixHeaders(event.request)

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      }
    }
    return await getAssetFromKV(event, options)
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
        })

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 })
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}

async function fixHeaders(req) {
  return request => {
    // compute the default (e.g. / -> index.html)
    request = new Request(req)
    
    request.headers.set("Content-Security-Policy", "default-src 'self';")
    request.headers.set("Strict-Transport-Security", "max-age=31536000")
    request.headers.set("X-Xss-Protection", "1; mode=block")
    request.headers.set("X-Frame-Options", "DENY")
    request.headers.set("X-Content-Type-Options", "nosniff")
    request.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
    request.headers.set("Feature-Policy", "none")

    // compute the default (e.g. / -> index.html)
    let defaultAssetKey = mapRequestToAsset(request)
    let url = new URL(defaultAssetKey.url)

    // inherit all other props from the default request
    return new Request(url.toString(), defaultAssetKey)
  }
}

/**
 * Here's one example of how to modify a request to
 * remove a specific prefix, in this case `/docs` from
 * the url. This can be useful if you are deploying to a
 * route on a zone, or if you only want your static content
 * to exist at a specific path.
 */
function handlePrefix(prefix) {
  return request => {
    // compute the default (e.g. / -> index.html)
    let defaultAssetKey = mapRequestToAsset(request)
    let url = new URL(defaultAssetKey.url)

    // strip the prefix from the path for lookup
    url.pathname = url.pathname.replace(prefix, '/')

    // inherit all other props from the default request
    return new Request(url.toString(), defaultAssetKey)
  }
}