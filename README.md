![Unmuteable Logo](/branding/Unmuteable_Primary.png)

Home of https://unmuteable.com

## Color Palette

| Color            | Hex     |
| ---              | ---     |
| Blockchain Black | #191D26 |
| Unmuteable Mint  | #00CCCC |
| Security Silver  | #808080 |
| White            | #FFFFFF |

## Current Workflow

On push to `develop` branch:

- Build Site with Hugo
- Publish CF to staging domain: https://um-test.unmuteable.workers.dev/

On push to `master` branch:

- Build Site with Hugo
- Public CF to actual domain: https://unmuteable.com
