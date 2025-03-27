<template>
  <div>
    X : <input type="text" v-model.number="state.x" /><br />
    Y : <input type="text" v-model.number="state.y" /><br />
    <!-- Display the computed result -->
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
// 1. Import 'reactive' and 'computed'
import { reactive, computed } from 'vue';

export default {
  name: 'Calc4',
  setup() {
    // Create a reactive state object for inputs x and y
    const state = reactive({ x: 10, y: 20 });

    // 2. Define 'result' as a computed property
    const result = computed(() => {
      // It automatically recalculates when state.x or state.y changes
      return state.x + state.y;
    });

    // 3. Return the reactive 'state' and the computed 'result'
    return { state, result };
  },
};
</script>
