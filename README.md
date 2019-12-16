# Vue module for Flexmonster Pivot Table & Charts 
[![Flexmonster Pivot Table & Charts](https://s3.amazonaws.com/flexmonster/github/fm-github-cover.png)](https://flexmonster.com)


This repository holds the source code for using [Flexmonster Pivot](https://www.flexmonster.com/) in [Vue](https://vuejs.org/) applications. 

* [Getting started](#getting-started)
* [Usage](#usage)
* [License](#license)
* [Support & feedback](#support-feedback)

## <a name="getting-started"></a>Getting Started ##

If you don’t have Vue app, you can create it by running in the console:

```bash
vue create my-app
cd my-app
```

Add Flexmonster Vue module by running in the console:

```bash
npm i vue-flexmonster --save
```

## <a name="usage"></a>Usage ##

The Flexmonster Vue module can be used as a plugin or locally.

<a name="usage-plugin"></a>1) Use Flexmonster Vue module as a Vue plugin

1.1) Add the following lines to the main.js file:

```bash
import Pivot from "vue-flexmonster";
import 'flexmonster/flexmonster.css';

Vue.use(Pivot);
```

<a name="usage-locally"></a>2) Register Flexmonster Vue module locally:

2.1) Import `vue-flexmonster` in App.js:

```bash
import {Pivot} from "vue-flexmonster";
import 'flexmonster/flexmonster.css';

```

2.2) Add the module to the `components` property in App.js:

```bash
export default {
  name: 'app',
  components: {
    Pivot
  }
}

```

<a name="usage-template"></a>After defining as a plugin or local component, use the module in `<template></template>` in App.js:

```bash
<template>
  <div id="app">
     <Pivot
      ref="pivot"
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
    ></Pivot>
  </div>
</template>

```

Run your application from the console:

```bash
npm run serve
```

To see the result open your browser on `http://localhost:8080/`.


## <a name="license"></a>License ##

Here is [Flexmonster licensing page](https://www.flexmonster.com/pivot-table-editions-and-pricing/). We have a free 30-day trial! 

Flexmonster Vue module is released as an MIT-licensed add-on to Flexmonster Pivot.

## <a name="support-feedback"></a>Support & feedback ##

Please share your feedback or ask questions via [Flexmonster Forum](https://www.flexmonster.com/forum/).
