<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
  </div>
</template>

<script>
import { ref } from 'vue'; // 1. Import 'ref'

export default {
  name: 'Calc',
  setup() {
    // 2. Define the setup function
    const x = ref(10); // 3. Initialize x with ref(10)
    const y = ref(20); // 4. Initialize y with ref(20)
    return { x, y }; // 5. Return x and y to expose them to the template
  },
};
</script>
