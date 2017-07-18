# Michelangelo Styleguide
[![npm version](https://badge.fury.io/js/michelangelo.svg)](https://badge.fury.io/js/michelangelo)



## Table of contents
- [About](#about)
- [Demo](#demo)
- [Get started](#get-started)
- [Usage](#usage)
    + [KSS-node and documentation syntax](#kss-node-and-documentation-syntax)
    + [Michelangelo specifications](#michelangelo-specifications)
- [Customize](#customize)



## About
This is a custom template for the KSS-node living style guide.



## Demo
Have a look at [the demo styleguide](http://stamkracht.github.io/michelangelo/section-settings.html) generated with dummy content to get an impression of the Michelangelo theme with the ITCSS architecture.



## Get started
Go to your project directory. If you haven't installed KSS-node yet, install it locally* `npm install kss --save-dev`.

**Don't install KSS-node globally, it will cause problems in the long run when you have multiple projects using KSS-node.*

Now, install the Michelangelo package locally.

```
npm install michelangelo --save-dev
```

Create a kss-config file `touch kss-config.json` and specify the required config:
  - title
  - builder: *refer to the Michelangelo template*
  - source
  - destination
  - homepage
  - css
  - js

Read [the KSS-node docs](https://github.com/kss-node/kss-node#using-the-command-line-tool) for more information about the config, or use the example below. *Note: the source config should refer to your styles directory.*
```
{
  "title"        : "Michelangelo Styleguide",
  "mask"         : "*.scss",
  "placeholder"  : "[modifier]",

"//": "relative to this file.",
  "builder"      : "node_modules/michelangelo/kss_styleguide/custom-template/",
  "source"       : "src/",
  "destination"  : "kss_styleguide/styleguide/",

"//": "relative to source.",
  "homepage"     : "../kss_styleguide/kss-homepage.md",

"//": "relative to the generated style guide.",
  "css": [],
  "js" : []
}
```

After setting up the config file, run `kss --config kss-config.json` to generate your living styleguide*. Locate your styleguide at the specified path in your config file and open it in the browser. Cowabunga!

**If you get the error `command not found: kss`. Fix this by adding `./node_modules/.bin` to your `PATH`.*




## Usage

### KSS-node and documentation syntax
KSS-node is an implementation of Knyle Style Sheets. This is a documentation syntax for css that can be used to create a living style guide. KSS-node has a few additional features such as adding a copy of the markup inline or external.

To get familiar with the documentation syntax it is highly advised to read through [the annotated copy of the official KSS spec on the KSS-node repository](https://github.com/kss-node/kss/blob/spec/SPEC.md).

#### Pro tip
When you're dealing with a high amount of example markup and you don't want to cause any code-bloat, seperate your example markup from your css modules. Create a directory in your kss_styleguide directory (name it anyway you want), and place the markup files in there. In your css module, link to the file for your example markup. (e.g., `Markup: ../kss_styleguide/markup/components.form.html`)


### Michelangelo specifications

#### Color grid
This is a grid overview of all your project colors. Every color item consists of 4 parts (the color variable and hexadecimal are required).
- color example
- color name
- color variable
- color hexadecimal

In the example below you can see we have a heading, a description, and we list our colors. To make the colors work you must first define your hexadecimal after the dash, then optionally add a color name.
```scss
// Primary Colors
//
// The primary colors for branding.
//
// $leonardo      -  #2980b9; Leader blue
// $donatello     -  #8e44ad; Purple tech
// $raphael       -  #c0392b; Sai
// $michelangelo  -  rgb(232, 126, 4); Cowabunga
// $splinter      -  #FDE3A7
//
// Styleguide Settings.Colors
```

#### Responsive
The specific styling for the styleguide is written mobile first. Which makes it possible to test your project's styling directly on any device size.

#### Smooth scrolling
When clicking on a sub navigation item, the page animate scrolls to that specific item, so smooooth.

#### Prefixed styles
All styles written for the styleguide are prefixed with `.kss-`. They do not interfere with your project styles.

#### ITCSS architecture
The example src directory is a boilerplate for [ITCSS methodology](https://youtu.be/1OKZOV-iLj4). A methodology created by Harry Roberts.



## Customize
Inside the node package directory, go to `kss_styleguide/custom-template/kss-assets/css/` to change the styling of this theme. Run `sass --watch --sourcemap=none kss.scss:kss.css` to watch for changes and compile the scss files.

You can quickly change the primary color by changing the value of the variable `$cowabunga` in `kss-settings.scss`.
