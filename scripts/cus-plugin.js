/* eslint-disable no-console */
const validateOptions = require('schema-utils');
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

// schema for options object
const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string',
    },
  },
};

class ConsoleLogOnBuildWebpackPlugin {
  constructor(options = {}) {
      console.log(`options: ${options}`);
    // validateOptions(schema, options, 'Hello World Plugin');
  }

  apply(compiler) {
    // Specify the event hook to attach to
    // compiler.hooks.emit.tapAsync(pluginName, (compilation, callback) => {
    //   console.log('This is an example plugin!');
    //   console.log(
    //     'Here’s the `compilation` object which represents a single build of assets:',
    //     compilation
    //   );

    //   // Manipulate the build using the plugin API provided by webpack
    //   // compilation.addModule(/* ... */);

    //   callback();
    // });

    // compiler.hooks.done.tap(pluginName, (
    //   stats /* stats is passed as an argument when done hook is tapped.  */
    // ) => {
    //   console.log('Hello World!');
    // });

    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('webpack k start ', compilation);
    });

    // Tap into compilation hook which gives compilation as argument to the callback function
    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      // Now we can tap into various hooks available through compilation
      compilation.hooks.optimize.tap(pluginName, () => {
        console.log('Assets are being optimized.');
      });
    });

    // compiler.hooks.emit.tapAsync(pluginName, (compilation, callback) => {
    //   // Do something async...
    //   setTimeout(function () {
    //     console.log('Done with async work...');
    //     callback();
    //   }, 1000);
    // });

    // compiler.hooks.emit.tapPromise(pluginName, (compilation) => {
    //   // return a Promise that resolves when we are done...
    //   return new Promise((resolve, reject) => {
    //     setTimeout(function () {
    //       console.log('Done with async work...');
    //       resolve();
    //     }, 1000);
    //   });
    // });

    // emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
    // compiler.hooks.emit.tapAsync(pluginName, (compilation, callback) => {
    //   // Create a header string for the generated file:
    //   var filelist = 'In this build:\n\n';

    //   // Loop through all compiled assets,
    //   // adding a new line item for each filename.
    //   for (var filename in compilation.assets) {
    //     filelist += '- ' + filename + '\n';
    //   }

    //   // Insert this list into the webpack build as a new file asset:
    //   compilation.assets['filelist.md'] = {
    //     source: function () {
    //       return filelist;
    //     },
    //     size: function () {
    //       return filelist.length;
    //     },
    //   };

    //   callback();
    // });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
