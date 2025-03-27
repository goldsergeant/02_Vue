<template>
  <div>
    x : <input type="text" v-model.number="x" />
    <br />
    결과 : {{ result }}
  </div>
</template>

<script>
// 1. Import 'ref' for reactive variables and 'watch' to observe changes
import { ref, watch } from 'vue';

export default {
  name: 'Calc5',
  setup() {
    // 2. Initialize 'x' as a reactive ref with initial value 0
    const x = ref(0); // 0으로 초기화
    // 3. Initialize 'result' as a reactive ref with initial value 0
    let result = ref(0); // 0으로 초기화

    // 4. Add the watch function to monitor 'x'
    // // 필요한 경우 코드 추가
    watch(x, (currentValue, oldValue) => {
      // Log the old and new values to the browser console when 'x' changes
      console.log(`이전 값 : ${oldValue}, 새로운 값 : ${currentValue}`);
      result.value = currentValue;

      // Optional: If 'result' should reflect 'x', update it here.
      // result.value = currentValue; // For example, if result should just be x
    });

    // Return x and result so they can be used in the template
    return { x, result };
  },
};
</script>
