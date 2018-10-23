---
docType: "style"
path: "/style/typography"
pageShortTitle: "Style"
pageTitle: "Typography"
description: 'Elegant typography, including global settings, headings, body text, lists, and more.'
---

<h1 style="margin-top:0px">Settings</h1>

We are using Google open source font Roboto globally.
-   Use the  `$family-sans-serif` and  `$family-monospace`  attributes as our typographic base applied to the  `<body>`.

#Headings

All HTML headings, h1 through h6, are available.

<div class="has-container has-radius has-background-color--white has-depth-bottom">
    <h1 style="margin-top:0px">h1. Elegant heading</h1>
    <h2>h2. Elegant heading</h2>
    <h3>h3. Elegant heading</h3>
    <h4>h4. Elegant heading</h4>
    <h5>h5. Elegant heading</h5>
    <h6 style="margin-bottom:0px">h6. Elegant heading</h6>
</div>
<br/>

```html
<h1>h1. Elegant heading</h1>
<h2>h2. Elegant heading</h2>
<h3>h3. Elegant heading</h3>
<h4>h4. Elegant heading</h4>
<h5>h5. Elegant heading</h5>
<h6>h6. Elegant heading</h6>
```

#Lists

Remove the default `list-style`

<div class="has-container has-radius has-background-color--white has-depth-bottom">
    <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>Nulla volutpat aliquam velit
            <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Ac tristique libero volutpat at</li>
            </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
    </ul>
</div>
<br/>

```html
<ul>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Nulla volutpat aliquam velit
        <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Ac tristique libero volutpat at</li>
        </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
</ul>
```


