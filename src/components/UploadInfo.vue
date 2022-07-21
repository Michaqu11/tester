<template>
  <div class="q-gutter-md">
    <q-btn
      color="grey-10"
      label="Show Example"
      @click="img = !img"
      
    />
    <br/>
    <!-- using v-if so you can see the effect -->
    <q-img
      v-if="img !== false"
       style="max-width:800px;
       width:80%;"
      src="../assets/example.png"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from 'quasar'

export default defineComponent({
  name: "UploadInfo",

  setup () {
    const $q = useQuasar()
    const img = ref(false)
    
    return {
      img
    }
  }
});
</script>
