<script>
import { defineComponent } from 'vue';
import Pivot from '@/pivot.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Pivot
  }
});
</script>

<template>
  <div id="app">
    <pivot />
  </div>
</template>
