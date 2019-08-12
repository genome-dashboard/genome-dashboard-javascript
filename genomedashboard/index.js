/*

module.exports provides a way for modules to expose functionality.

function(__dirname, __filename, module, exports, require) {
  // ...
}

Where __dirname and __filename are the current directory and filename of the module being loaded.

require() is a function that will synchronously load another package or module from the filesystem and return it.
The package or module will be cached when first loaded, so subsequent calls to require() for that package or module
in your Node.js application will not need to re-read the file.

*/

module.exports = function(width, height) {
  return width * height;
};
