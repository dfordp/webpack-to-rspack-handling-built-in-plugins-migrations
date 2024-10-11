- Rspack has implemented most of webpack's built-in plugins, with the same names and configuration parameters, allowing for easy replacement.
- Replace the the include package from webpack to rspack one. 
- Replaces the webpack object in the plugins array to rspack object.
- Handles only for supported and partially supported built-in plugins. (as of 11th Oct 2024)


### Before

```ts
//replace the the include package from webpack to rspack one
// and the webpack object in the plugins array to rspack object

const webpack = require('webpack');

module.exports = {
  //...
  plugins: [
    new webpack.DefinePlugin(),
    // ...
  ],
};
```

### After

```ts
const rspack = require('@rspack/core');

module.exports = {
  //...
  plugins: [
    new rspack.DefinePlugin({
      // ...
    }),
  ],
};
```

