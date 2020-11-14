---
author: "Jason Schrader"
title: "First Ever STX Mining Competition Experience"
date: "2020-11-05"
draft: false
description: "Mining on Stacks 2.0"
img_cover: "cover.png"
categories:
- Freehold
- Stacks
- Mining
---

# Stacks Blockchain Mining Competition Experience

At the end of October 2020, Daemon Technologies hosted the [first-ever STX mining competition](https://daemonmining.co/), a 5-day event encouraging users to get involved and test out mining on the [Stacks 2.0 Testnet](https://www.blockstack.org/testnet).

## What it is

For those unfamiliar with the concept, mining simply means using a device under your control to help build and secure the blockchain. The resource requirements are light, so you can use a [desktop or laptop computer](https://docs.blockstack.org/mining), a [raspberry pi](https://gitlab.com/riot.ai/stackspack), or a [virtual machine](https://github.com/absorbingchaos/bks-setup-miner).

The device needs to stay on and connected to the Internet.

There is a community around it.

## How it works

Most that have heard of mining think of Bitcoin. Miners use electricity to compete in creating the next block in the chain, processing transactions by completing difficult math problems. If the miner is successful, they are rewarded with Bitcoin (BTC).

This process is called [Proof of Work](https://bitcoin.org/en/faq#what-is-bitcoin-mining).

The Stacks blockchain is built on top of Bitcoin, so instead of using electricity, miners spend Bitcoin to compete in creating the next block in the chain, and if successful, are rewarded with Stacks tokens (STX).

This process is called [Proof of Transfer](https://hackernoon.com/wtf-is-proof-of-transfer-and-why-should-anyone-care-wd2330p9).

500 now, 1,000 STX per block at launch

Every 1min now, will be 10min per block in future (10x speed)

## My experience 

It's not *the easiest thing* for non-technical people, at least at this stage.

I ran a miner with a virtual machine.

I wrote the script to make it easier.

## The community

-----

talk about zero to testnet series 

talk about itty-bitty PRs

talk about Discord channels

talk about bks-setup-miner script 

talk about bug bounties

-----

# Markdown test!

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

   Name | Age
--------|------
    Bob | 27
  Alice | 23

#### Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## Code Blocks

#### Code block with backticks

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

#### Code block indented with four spaces

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

#### Code block with Hugo's internal highlight shortcode
{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
* Another item
* And another item

#### Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
