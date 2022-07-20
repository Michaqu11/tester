<template>
  <q-page class="column text-center">
    <h4>Welcome to test generator app!</h4>
    <div v-if="data != null">
      <QuizComponentVue :file="data" />
    </div>
    <div v-else>
      <h5>Upload file first!</h5>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import QuizComponentVue from "src/components/QuizComponent.vue";

export default defineComponent({
  components: { QuizComponentVue },
  name: "HomePage",
  setup() {
    let data =
      localStorage.getItem("data") != null
        ? JSON.parse(localStorage.getItem("data"))
        : ref(null);
    return {
      data,
    };
  },
});
</script>
<style lang="scss"></style>
