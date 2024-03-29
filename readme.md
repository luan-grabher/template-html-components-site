# HTML Components Site

This is a simple project to build a site with HTML components.

* Fast and easy to use.
* Any Hosting Provider can be used.

## Create Components

Inside the `components` folder of `src` folder, create a new file with the name of the component, for example `button.html`.

```html
<button>Click me</button>
```

After that, you can use this component in any HTML file as follows:

```html
<template src="components/button.html"></template>
```

**Note:** The `src` must be a relative path to the html file where the component is imported.

## Build Site

To build the site, run the following command:

```bash
npm run build
```

## CSS

You can add CSS by creating a '.css' file and importing it in the HTML file.

```html
<link rel="stylesheet" href="path/to/css/file.css">
```

## JavaScript

The main JavaScript file is `src/index.js`. You can import other JavaScript files in this file.

```javascript
import './path/to/js/file.js';
```
The webpack will bundle all the JavaScript files into a single file.

## Extra files

You can add extra files like images, fonts, etc. in the `public` folder. These files will be copied to the `dist` folder when building the site.