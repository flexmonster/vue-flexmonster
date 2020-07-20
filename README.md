# VueJS module for Flexmonster Pivot Table & Charts 
[![Flexmonster Pivot Table & Charts](https://www.flexmonster.com/fm_uploads/2020/06/GitHub_fm.png)](https://flexmonster.com)
Website: www.flexmonster.com

## Flexmonster Pivot Table & Charts

Flexmonster Pivot is a powerful Javascript tool for interactive web reporting. It allows you to visualize and analyze data from JSON, CSV, SQL, NoSQL, Elasticsearch, and OLAP data sources fast and conveniently. Flexmonster is designed to integrate seamlessly with any client-side framework and can be easily embedded into your application.

This repository holds the source code for using [Flexmonster Pivot](https://www.flexmonster.com/) in [Vue](https://vuejs.org/) applications: 

* [Getting started](#getting-started)
* [Usage](#usage)
* [Sample Project](#sample-project)
* [License](#license)
* [Support & feedback](#support-feedback)


## <a name="getting-started"></a>Getting Started ##

If you don’t have Vue app, you can create it by running in the console:

```bash
vue create my-app
cd my-app
```

Install the Flexmonster Vue module by running in the console:

```bash
npm i --save vue-flexmonster
```

Install the Flexmonster module by running in the console:

```bash
npm i --save flexmonster
```

## <a name="usage"></a>Usage ##

The Flexmonster Vue module can be used as a plugin or locally.

### 1) Use Flexmonster Vue module as a Vue plugin

1.1) Add the following lines to the main.js file:

```bash
import Pivot from "vue-flexmonster";
import 'flexmonster/flexmonster.css';

Vue.use(Pivot);
```

Now Pivot can be used by any component in your application.

### 2) Register Flexmonster Vue module locally

2.1) Import `vue-flexmonster` in `App.vue`:

```bash
import {Pivot} from "vue-flexmonster";
import 'flexmonster/flexmonster.css';
```

2.2) Add the module to the `components` property in `App.vue`:

```bash
export default {
  name: 'app',
  components: {
    Pivot
  }
}
```

2.3) After defining as a plugin or local component, include the module in `<template></template>` in `App.vue`:

```bash
<template>
  <div id="app">
     <Pivot
      ref="pivot"
      toolbar
      v-bind:report="'https://cdn.flexmonster.com/reports/report.json'"
     ></Pivot>
  </div>
</template>
```

2.4) Run your application from the console:

```bash
npm run serve
```

The project should be available at `http://localhost:8080/`.

For more details, refer to [Flexmonster Integration with Vue](https://www.flexmonster.com/doc/integration-with-vue/) tutorial.

## <a name="sample-project"></a>Sample Project ##

See our [sample Vue project using the Flexmonster Vue module](https://github.com/flexmonster/pivot-vue).

## <a name="license"></a>License ##

Here is [Flexmonster licensing page](https://www.flexmonster.com/pivot-table-editions-and-pricing/). We have a free 30-day trial! 

Flexmonster Vue module is released as an MIT-licensed add-on to Flexmonster Pivot.

## <a name="support-feedback"></a>Support & feedback ##

Please share your feedback or ask questions via [Flexmonster Forum](https://www.flexmonster.com/forum/).
