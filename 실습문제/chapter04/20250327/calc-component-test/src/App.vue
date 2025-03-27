<script setup>
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';
import Calc5 from './components/Calc5.vue';
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
</script>

<template>
  <div>
    <Calc5 />
  </div>
</template>
<script>
export default {
  name: 'App',
  components: { Calc3, Calc4, Calc5 },
};
</script>
