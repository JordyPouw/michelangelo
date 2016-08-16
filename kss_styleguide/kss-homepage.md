# Make your life easier with styleguides


## Whaaaat, styleguides?
Styleguides can be seen as a roadmap for developers and designers to maintain consistency on their code and UI. Some styleguides are built in static HTML, but this is difficult to maintain. A better solution would be a living styleguide, which is auto-generated from the comments in your codebase.


## But why?
During the project lifetime, different developers encounter the codebase. Without an overview of the current foundation of the project, the code could get messy very quickly. With a styleguide you will have consistency, which is easier to maintain. Consistent code keeps the codebase structured and small, this gives the performance a boost. You will have faster build times, because you can refer to the styleguide for the exact styles to use. Besides the usefulness for designers and developers, it could also be helpful for project managers and third parties. You create a common language.


## Convincing, when do we begin?
The best time to start creating your styleguide is at the beginning of a project. This can also be seen as Style Guide Driven Development (SGDD). You develop the components first, document them in a style guide, and connect the pieces afterwards like a puzzle. This will eventually shape the UI. From there it is important to maintain the styleguide when the UI gets an update.

If you're already in the middle of a project it's wise to start off with an interface inventory. [An interface inventory is a comprehensive collection of the bits and pieces that make up your interface](http://bradfrost.com/blog/post/interface-inventory/).


## So, how do I start?
Go to your project directory. If you haven't installed KSS-node yet, install it locally* `npm install kss --save-dev`.

**Don't install KSS-node globally, it will cause problems in the long run when you have multiple projects using KSS-node.*

Now, install the Michelangelo package locally.

```
npm install michelangelo --save-dev
```

Create a kss-config file `touch kss-config.json` and specify the following config. Read [the KSS-node docs](https://github.com/kss-node/kss-node#using-the-command-line-tool) for more information about the config.
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

After setting up the config file, run `kss --config kss-config.json` to generate your living styleguide*. Locate your styleguide at the specified path in your config file and open it in the browser.

**If you get the error `command not found: kss`. Fix this by adding `./node_modules/.bin` to your `PATH`.*


## Cowabunga!
You have finished the setup. From here on out you can start writing the documentation*. I would love to explain it all in detail to you, but you know.. pizza!

**To get familiar with the documentation syntax it is highly advised to read through [the annotated copy of the official KSS spec on the KSS-node repository](https://github.com/kss-node/kss/blob/spec/SPEC.md).*
