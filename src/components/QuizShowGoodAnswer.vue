<template>
  <q-item-section class="q-mxy-sm">
    <q-item-label class="q-py-sm">
      <b>{{ actualQuestion.question }}</b>
    </q-item-label>
  </q-item-section>

  <q-separator />

  <q-item-section
    :id="ans.id"
    :key="ans.id"
    v-for="ans in actualCorrectAnswers"
  >
    <q-item-label class="text-body2 q-mt-sm">
      <p>{{ ans.ans }}</p>
    </q-item-label>
  </q-item-section>
  <q-separator />
</template>

<script>
import { defineComponent, onMounted, ref, watch, computed } from "vue";

export default defineComponent({
  name: "QuizShowGoodAnswer",
  props: {
    question: Object,
    correct: Object,
  },
  setup(props) {
    let actualQuestion = ref("");
    let actualCorrectAnswers = ref([]);

    onMounted(() => {
      actualQuestion.value = props.question;
      actualCorrectAnswers.value = props.correct;
    });

    return {
      actualQuestion,
      actualCorrectAnswers,
    };
  },
});
</script>
<style lang="scss">
.answersStyle {
  color: black;
  font-weight: 400;
  font-size: 60%;
}
@media (min-width: 701px) {
  .my-card {
    width: 80%;
    font-size: 20px;
  }
}
.q-item__section--main + .q-item__section--main {
  margin-left: 0px;
}
</style>
