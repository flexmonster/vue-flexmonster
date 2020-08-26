<!--HTML related information for displaying the component-->
<template>
  <div>Pivot</div>
</template>

<!--JavaScript related information for the component's logic-->
<script>
import Flexmonster from "flexmonster";
export default {
  name: "Pivot",
  props: {
    afterchartdraw: Function,
    aftergriddraw: Function,
    beforegriddraw: Function,
    beforetoolbarcreated: Function,
    cellclick: Function,
    celldoubleclick: Function,
    componentFolder: String,
    customizeAPIRequest: Function,
    customizeCell: Function,
    customizeChartElement: Function,
    customizeContextMenu: Function,
    datachanged: Function,
    dataerror: Function,
    datafilecancelled: Function,
    dataloaded: Function,
    drillthroughclose: Function,
    drillthroughopen: Function,
    fieldslistclose: Function,
    fieldslistopen: Function,
    filterclose: Function,
    filteropen: Function,
    fullscreen: Function,
    global: Object,
    height: [String, Number],
    licenseKey: String,
    licenseFilePath: String,
    loadingdata: Function,
    loadinglocalization: Function,
    loadingolapstructure: Function,
    loadingreportfile: Function,
    localizationerror: Function,
    localizationloaded: Function,
    olapstructureerror: Function,
    olapstructureloaded: Function,
    openingreportfile: Function,
    querycomplete: Function,
    queryerror: Function,
    ready: Function,
    report: [String, Object],
    reportchange: Function,
    reportcomplete: Function,
    reportfilecancelled: Function,
    reportfileerror: Function,
    reportfileloaded: Function,
    runningquery: Function,
    toolbar: Boolean,
    update: Function,
    width: [Number, String]
  },
  mounted: function() {
    this.flexmonster = new Flexmonster({
      ...this.$props,
      container: this.$el
    });
  },
  beforeUpdate() {
    return false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~flexmonster/flexmonster.min.css";
</style>
