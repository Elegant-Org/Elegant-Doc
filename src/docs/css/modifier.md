---
docType: "style"
path: "/style/modifier"
pageShortTitle: "Style"
pageTitle: "Modifier"
description: 'We are extremely serious about pushing our typographic experience to next level'
---

<h1 style="margin-top:0px">Nomenclature</h1>

We are using minimal class prefix and BEM (Block, Element, Modifier) methodology to make it more simple and human friendly.

## Syntax
All modifiers start with `is-[CLASS]` OR `has-[CLASS]`

### Typography Modifiers
| Class | Description |
|-------|:------------:|
| `is-text--uppercase`  |  <span class="is-text--uppercase">Transform text to uppercase</span> |
| `is-text--capitalize` |  <span class="is-text--capitalize">Transform text to capitalize</span> |
| `is-text--bold`       |  <span class="is-text--bold">Make font weight bold</span> |
| `is-text--bolder`     |  <span class="is-text--bolder">Make font weight bolder</span> |


### Visibility Modifiers
| Class | Description |
|-------|:------------:|
| `is-display--hidden`    |  Hide a block |
| `is-display--block`     |  Show a block |
| `is-visibility--none`   |  Make visibility hidden |
| `is-visibility--shown`  |  Make visibility shown |


### Elevation Modifiers
<div class="is-row">
    <div class="is-col-sm-12">
        <div class="is-row">
            <div class="is-col-sm-2">
                <div style="text-align:center;display:flex;min-height:120px;justify-content:center" class="has-depth--bottom has-container--small has-radius has-background-color--white">
                    <div style="align-self: center;font-size: 14px;" class="has-font-weight--bold">has-depth--bottom</div>
                </div>
            </div>
            <div class="is-col-sm-2">
                <div style="text-align:center;display:flex;min-height:120px;justify-content:center" class="has-depth--1 has-container--small has-radius has-background-color--white">
                    <div style="align-self: center;font-size: 14px;" class="has-font-weight--bold">has-depth--1</div>
                </div>
            </div>
            <div class="is-col-sm-2">
                <div style="text-align:center;display:flex;min-height:120px;justify-content:center" class="has-depth--2 has-container--small has-radius has-background-color--white">
                    <div style="align-self: center;font-size: 14px;" class="has-font-weight--bold">has-depth--2</div>
                </div>
            </div>
            <div class="is-col-sm-2">
                <div style="text-align:center;display:flex;min-height:120px;justify-content:center" class="has-depth--3 has-container--small has-radius has-background-color--white">
                    <div style="align-self: center;font-size: 14px;" class="has-font-weight--bold">has-depth--3</div>
                </div>
            </div>
            <div class="is-col-sm-2">
                <div style="text-align:center;display:flex;min-height:120px;justify-content:center" class="has-depth--4 has-container--small has-radius has-background-color--white">
                    <div style="align-self: center;font-size: 14px;" class="has-font-weight--bold">has-depth--4</div>
                </div>
            </div>
            <div class="is-col-sm-2">
                <div style="text-align:center;display:flex;min-height:120px;justify-content:center" class="has-depth--5 has-container--small has-radius has-background-color--white">
                    <div style="align-self: center;font-size: 14px;" class="has-font-weight--bold">has-depth--5</div>
                </div>
            </div>
        </div>
    </div>
</div>

Add `has-depth--0` helper class when you want to remove default shadow.

