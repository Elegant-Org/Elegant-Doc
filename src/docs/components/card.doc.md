---
docType: "component"
path: "/components/card"
pageShortTitle: "Component"
pageTitle: "Cards & Shadows"
description: 'We use cards to make our ui visually more appealing and intersting'
---

### Basic Card
<div class="is-row">
  <div class="is-col-sm-6 is-col-md-3 is-col-lg-4">
    <div class="ui card">
      <div class="image">
        <img src="https://picsum.photos/200/300?random=2"/>
      </div>
      <div class="content">
        Lorem Ipsuem
      </div>
    </div> 
  </div>
  <div class="is-col-sm-12 is-col-md-9 is-col-lg-8">
    
  </div>
</div>

```html
 <div class="ui card">
    <div class="image">
      <img src="https://picsum.photos/200/300?random=2"/>
    </div>
    <div class="content">
      Lorem Ipsuem
    </div>
  </div> 
```
<br/>

### Cover Image Card
<div class="is-row">
  <div class="is-col-sm-6 is-col-md-3 is-col-lg-4">
    <div class="ui card">
        <div class="cover-image" style="--bg-image: url('https://picsum.photos/id/237/200/300');">
          <div>
            <h3 class="has-no--margin is-text--bolder"> Lorem Ipsuem</h3>
            <h5 class="has-no--margin is-text--bolder"> Secondary text</h5>
          </div>
        </div>
    </div>  
  </div>
  <div class="is-col-sm-12 is-col-md-9 is-col-lg-8">
      
  </div>
</div>

```html
<div class="ui card">
  <div class="cover-image" style="--bg-image: url('https://picsum.photos/id/237/200/300');">
    <div>
      <h3 class="has-no--margin is-text--bolder"> Lorem Ipsuem</h3>
      <h5 class="has-no--margin is-text--bolder"> Secondary text</h5>
    </div>
  </div>
</div> 
```

### Gradient Card
`[colorName]` color name defined in variable map

`[with-shadow]` provide bottom shadow in cards

<div class="is-row">
  <div class="is-col-sm-6 is-col-md-3 is-col-lg-4">
    <div class="ui card" style="margin-bottom: 16px">
        <div class="gradient linear purple">
          <div style="display: flex;flex-direction: column;">
            <div>
              <h3 class="has-no--margin is-text--bolder">Purple</h3>
              <div style="font-size: 14px;" class="has-font-weight--bold">gradient linear purple</div>
            </div>
          </div>
        </div>
    </div>  
  </div>
  <div class="is-col-sm-6 is-col-md-3 is-col-lg-4">
    <div class="ui card" style="margin-bottom: 16px">
        <div class="gradient linear green">
          <div style="display: flex;flex-direction: column;">
            <div>
              <h3 class="has-no--margin is-text--bolder">Green</h3>
              <div style="font-size: 14px;" class="has-font-weight--bold">gradient linear green</div>
            </div>
          </div>
        </div>
    </div>  
  </div>
  <div class="is-col-sm-6 is-col-md-3 is-col-lg-4">
    <div class="ui card" style="margin-bottom: 16px">
        <div class="gradient linear red">
          <div style="display: flex;flex-direction: column;">
            <div>
              <h3 class="has-no--margin is-text--bolder">Red</h3>
              <div style="font-size: 14px;" class="has-font-weight--bold">gradient linear red</div>
            </div>
          </div>
        </div>
    </div>  
  </div>
  <div class="is-col-sm-6 is-col-md-3 is-col-lg-4">
    <div class="ui card" style="margin-bottom: 16px">
        <div class="gradient linear yellow with-shadow">
          <div style="display: flex;flex-direction: column;">
            <div>
              <h3 class="has-no--margin is-text--bolder">Yellow</h3>
              <div style="font-size: 14px;" class="has-font-weight--bold">gradient linear yellow with-shadow</div>
            </div>
          </div>
        </div>
    </div>  
  </div>
  <div class="is-col-sm-6 is-col-md-3 is-col-lg-4">
    <div class="ui card" style="margin-bottom: 16px">
        <div class="gradient linear blue with-shadow">
          <div style="display: flex;flex-direction: column;">
            <div>
              <h3 class="has-no--margin is-text--bolder">Blue</h3>
              <div style="font-size: 14px;" class="has-font-weight--bold">gradient linear blue with-shadow</div>
            </div>
          </div>
        </div>
    </div>  
  </div>
  <div class="is-col-sm-6 is-col-md-3 is-col-lg-4">
    <div class="ui card" style="margin-bottom: 16px">
        <div class="gradient linear gray with-shadow">
          <div style="display: flex;flex-direction: column;">
            <div>
              <h3 class="has-no--margin is-text--bolder">Gray</h3>
              <div style="font-size: 14px;" class="has-font-weight--bold">gradient linear gray with-shadow</div>
            </div>
          </div>
        </div>
    </div>  
  </div>
</div>

```html
<div class="ui card">
  <div class="gradient linear `[colorName]` `[with-shadow]`">
      Content Area
  </div>
</div> 
```