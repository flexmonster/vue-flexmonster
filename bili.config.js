module.exports = {
  banner: true,
  externals: ['vue', 'flexmonster'],
  output: {
    extractCSS: false,
    format: [
      "cjs", 
      "es", 
      "esm", 
      "umd", 
      "iife", 
      "amd", 
      "system", 
      "cjs-min", 
      "es-min", 
      "esm-min", 
      "umd-min", 
      "iife-min", 
      "amd-min", 
      "system-min"
    ],
    moduleName: 'Pivot'
  },
  plugins: {
    vue: {
      css: true
    }
  }
};
