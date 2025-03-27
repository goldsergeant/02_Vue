<template>
  <div>
    <!-- 1. Bind input X to state.x -->
    X : <input type="text" v-model.number="state.x" /><br />
    <!-- 2. Bind input Y to state.y -->
    Y : <input type="text" v-model.number="state.y" /><br />
    <!-- 3. Call calcAdd function on button click -->
    <button @click="calcAdd">계산</button><br />
    <!-- 4. Display the result from state.result -->
    <div>결과 : {{ state.result }}</div>
  </div>
</template>

<script>
// 5. Import 'reactive' for creating a reactive object
import { reactive } from 'vue';

export default {
  name: 'Calc3',
  setup() {
    // 6. Create a reactive state object using reactive()
    const state = reactive({ x: 10, y: 20, result: 30 });

    // 7. Define the function to calculate the sum
    const calcAdd = () => {
      // 8. Update state.result with the sum of state.x and state.y
      state.result = state.x + state.y;
    };

    // 9. Return the state object and the calcAdd function to make them available in the template
    return { state, calcAdd };
  },
};
</script>
