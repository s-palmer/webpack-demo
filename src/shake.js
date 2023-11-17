// Tree shaking is a feature enabled by the ES2015 module definition. The idea is that given it's possible to analyze the module definition statically without running it, webpack can tell which parts of the code are being used and which are not. It's possible to verify this behavior by expanding the application and adding code there that should be eliminated.

// Starting from webpack 5, tree shaking has been improved and it works in cases where it didn't work before, including nesting and CommonJS.

const shake = () => console.log("shake")
const bake = () => console.log("bake")

export { shake, bake }