# iui-general

[iui-general Examples](http://medseek-engineering.github.io/iui-general/style-guide/ "iui-general Examples")


## Installation (with Influence Health ui-core)

Add to package.json:
```javascript
"dependencies": {
    ...
    "iui-general": "git+ssh://git@github.com:medseek-engineering/iui-general.git"
}
```

Use in `app.js`:
```javascript
ui.use(require('iui.general'));
```

Add the import paths to your `config.rb` file
```ruby
additional_import_paths = [File.join('node_modules','iui-general','lib','src')]
```

import iui-general.scss in your `main.scss` file

```sass
// Place your variable overrides above this line. A full list of variables can be found here: 
// https://github.com/medseek-engineering/iui-general/blob/master/lib/src/_iui-variables.scss
@import iui-general;
```



## Build
**Note:** if you make changes, you must run **gulp** to rebuild the combined files in the 'dist' directory. You may need to also update the package.json version number.

## Changelog

### 1.0.7

Added a ui-bootstrap overrides folder for directives that we create to override ui-bootstrap.

Added a directive override for the ui-bootstrap directive typeahead. This directive adds the ability to scroll a popup when the keyboard is used to scroll.

added travis cl

### 1.0.6

Add icon-checkmark-white.svg and icon-exclamation-mark-white.svg to /src/images folder for use with templateCache.

### 1.0.5

Add new Expandable Panel class Component. This highly customizable element is based off Bootstrap's accordion and collapse. This allows for greater control over what content goes inside the expandable panel, in the panel header, and even allows for additional controls to be placed on the panel heading bar, such as a More or Actions dropdown which would be difficult to accomplish with Bootstrap's standard Accordion. This update also adds a new SVG icon to the asset library: icon-checkmark-white.svg.

### 1.0.4

Add iui-label-indicator directive.

iui-label-indicator is a small circle dot indicator with a question mark that is usually seen next to a label. This indicator allows for more information to be attached to a label in case there is no room to allow for a help block or descriptor text. Upon hovering over the label indicator, a tooltip will appear with the descriptor text.

### 1.0.3

Moved alerts to [iui-alerts](https://github.com/medseek-engineering/iui-alerts)

### 1.0.2

Add iui-stepper as a new directive.

### 1.0.1

Add new _accordions.scss_ file and drop in basic accordion styles to iui-general.

### 1.0.0

Created iui-general repo
