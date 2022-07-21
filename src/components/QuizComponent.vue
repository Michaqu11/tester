<template>
  <div
    class="q-pa-md row items-start q-gutter-md vertical-middle row full-height justify-center"
  >
    <q-card class="my-card" flat bordered style="max-width: 1200px;">
      <q-list bordered>
        <q-item>
          <q-item-section v-if="started < 2">
            <q-item-label
              >Answers: {{ counter }} | Good Answers: {{ goodAnswersCounter }} |
              Score:
              {{
                counter == 0
                  ? 100
                  : Math.floor((goodAnswersCounter * 100) / counter)
              }}%
            </q-item-label>
            <q-item-label class="captionStyle">
              Left:
              {{ left }}</q-item-label
            >
          </q-item-section>
          <q-item-section v-else-if="started == 2">
            <q-item-label v-if="answerInfo == 'Bad Answer!'" style="color: red">
              {{ answerInfo }}
            </q-item-label>
            <q-item-label v-else style="color: #52cc7a">
              {{ answerInfo }}
            </q-item-label>
          </q-item-section>
          <q-item-section v-else>
            <q-item-label>
              <b>Congratulation! Your Score:</b>
              {{
                counter == 0
                  ? 100
                  : Math.floor((goodAnswersCounter * 100) / counter)
              }}%
            </q-item-label>
            <q-item-label class="captionStyle"
              >Your chance to pass has increased</q-item-label
            >
          </q-item-section>

          <q-separator />
        </q-item>

        <q-separator />
        <div v-if="started == 3" style="width: 100%">
          <q-item-section class="q-mxy-sm">
            <q-item-label class="q-py-sm">
              <b>One more time?</b>
            </q-item-label>
          </q-item-section>

          <q-separator />

          <q-separator />

          <q-item-section>
            <q-item-label>
              <q-btn
                :ripple="{ color: 'grey' }"
                color="grey-10"
                label="Restart"
                padding="sm md"
                class="q-my-md btnStyle"
                @click="restart"
                no-caps
              />
            </q-item-label>
          </q-item-section>

          <q-separator />
        </div>
        <div v-if="started == 1" style="width: 100%">
          <q-item-section class="q-mxy-sm">
            <q-item-label class="q-py-sm">
              <b>{{ actualQuestion.question }}</b>
            </q-item-label>
          </q-item-section>

          <q-separator />

          <q-item-section
            class="items-center"
            v-for="ans in shuffleArray"
            :id="ans.id"
            :key="ans.id"
          >
            <q-item-label
              class="text-body2 q-mt-sm"
              clickable
              @click="filters(ans.id)"
            >
              <p>{{ ans.ans }}</p>
            </q-item-label>
          </q-item-section>

          <q-separator />

          <q-btn
            :ripple="{ color: 'grey' }"
            color="grey-10"
            :disabled="!selected.length"
            label="Answer"
            class="q-my-md q-mx-md btnStyle"
            @click="checkAnswer"
            no-caps
          />
        </div>
        <div v-if="started == 0" style="width: 100%">
          <q-item-section class="q-mxy-sm">
            <q-item-label class="q-py-sm">
              <b>Start taking the quiz. Press the button!</b>
            </q-item-label>
          </q-item-section>

          <q-separator />

          <q-item-section>
            <q-item-label>
              <q-btn
                :ripple="{ color: 'grey' }"
                color="grey-10"
                label="Start"
                padding=" md xl"
                class="q-my-md btnStyle"
                @click="startFun"
                no-caps
              />
            </q-item-label>
          </q-item-section>

          <q-separator />
        </div>
        
        <div v-if="started == 2" style="width: 100%">
          <quiz-show-good-answer
            :question="actualQuestion"
            :correct="onlyGoodAnswer"
          />

          <q-separator />
          <q-btn
            :ripple="{ color: 'grey' }"
            color="grey-10"
            label="Next Question"
            padding=" sm md"
            class="q-my-md q-mx-md btnStyle"
            @click="nextQuestion"
            no-caps
          />
          <q-btn
            :ripple="{ color: 'grey' }"
            color="grey-10"
            padding=" sm md"
            label="Save Game"
            class="q-my-md q-mx-md btnStyle"
            @click="save()"
            no-caps
          />
        </div>
      </q-list>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch, computed } from "vue";
import QuizShowGoodAnswerVue from "./QuizShowGoodAnswer.vue";
import QuizShowGoodAnswer from "./QuizShowGoodAnswer.vue";
import { useRouter } from "vue-router";
import { useQuasar } from 'quasar'

export default defineComponent({
  components: { QuizShowGoodAnswerVue, QuizShowGoodAnswer },
  name: "QuizComponent",
  props: {
    file: Object,
  },
  setup(props) {
    const router = useRouter();
    let actualQuestion = ref("");
    let actualAnswers = ref([]);
    let actualCorrectAnswers = ref([]);
    let numberOfQuestions = 0;
    let running = ref(false);
    let started = ref(0);
    let maxNumberofAnswers = 2;
    let data = props.file;
    let counter = ref(data.score.counter);
    let goodAnswersCounter = ref(data.score.goodAnswersCounter);
    let left = ref(data.score.left);
    let selected = ref([]);
    let onlyGoodAnswer = ref([]);
    let answerInfo = ref("");
    let saveFlag = ref(false)
    const $q = useQuasar()

    function randQuestion() {
      
      let rand = Math.floor(Math.random() * data.questions._value.length);
        
        actualAnswers.value.push(data.answers._value[rand]);
        actualQuestion.value = data.questions._value[rand];
        actualCorrectAnswers.value.push(data.correctAnswers._value[rand]);
        data.questions._value[rand].counter =
          data.questions._value[rand].counter + 1;

        // console.log("to cos", data.answers._value[rand]);
        for (var arr of actualAnswers.value[0].answer) {
          if (actualCorrectAnswers.value[0].correct.includes(arr.id)) {
            onlyGoodAnswer.value.push(arr);
          }
        }
         if (data.questions._value[rand].counter == maxNumberofAnswers) {
          data.questions._value.splice(rand, 1);
          data.answers._value.splice(rand, 1);
          data.correctAnswers._value.splice(rand, 1);
        }
        return rand
    }
    function nextQuestion () {
      
      onlyGoodAnswer.value = [];
      actualAnswers.value = [];
      actualCorrectAnswers.value = [];
      selected.value = [];
      started.value = 1;

      if (data.questions._value.length > 0) {
        
        let rand = randQuestion();
        /*if (data.questions._value[rand].counter == maxNumberofAnswers) {
          data.questions._value.splice(rand, 1);
          data.answers._value.splice(rand, 1);
          data.correctAnswers._value.splice(rand, 1);
        }*/

      } else {
        started.value = 3;
      }
    }
    function restart() {
      window.location.reload()
    }
    
    function save () {

        data.score.counter = counter.value
        data.score.goodAnswersCounter = goodAnswersCounter.value
        data.score.left = left.value
        
        //console.log('test', data)
        localStorage.setItem("data", JSON.stringify(data));

        saveFlag.value = false

          $q.notify({
            progress: true,
            message: 'The test has been saved',
            icon: 'save_alt',
            color: 'white',
            textColor: 'grey-10'
          })



    }
    function filters(select) {
      if (document.getElementById(select).style.backgroundColor == "black") {
        document.getElementById(select).style.backgroundColor = "white";
        document.getElementById(select).style.opacity = "100%";
        document.getElementById(select).style.color = "black";
        var indexToRemove = selected.value.indexOf(select);
        selected.value.splice(indexToRemove, 1);
      } else {
        document.getElementById(select).style.backgroundColor = "black";
        document.getElementById(select).style.opacity = "30%";
        document.getElementById(select).style.color = "white";
        selected.value.push(select);
      }
      //console.log(selected);
    }

    const shuffleArray = computed(() => {
      let array = actualAnswers.value[0];
      if (array) {
        for (var i = array.answer.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array.answer[i];
          array.answer[i] = array.answer[j];
          array.answer[j] = temp;
        }
        //console.log("shuffled", array);
        return array.answer;
      }
    });

    function startFun() {
      randQuestion();
      started.value = 1;
    }

    function checkAnswer() {
      let goodAnswer = true;
      answerInfo.value = "Correct Answer!";

      for (var select of selected.value) {
        if (!actualCorrectAnswers.value[0].correct.includes(select)) {
          goodAnswer = false;
        }
      }
      if (
        !goodAnswer ||
        actualCorrectAnswers.value[0].correct.length !== selected.value.length
      ) {
        answerInfo.value = "Bad Answer!";
      } else {
        goodAnswersCounter.value += 1;
      }
      started.value = 2;
      counter.value += 1;
      left.value -= 1;
    }

    onMounted(() => {
     
      numberOfQuestions = data.answers._value.length;

      if(left.value == -1)
        left.value = numberOfQuestions * maxNumberofAnswers;
    });

    return {
      randQuestion,
      startFun,
      goodAnswersCounter,
      counter,
      actualQuestion,
      actualCorrectAnswers,
      actualAnswers,
      running,
      numberOfQuestions,
      maxNumberofAnswers,
      left,
      started,
      shuffleArray,
      filters,
      selected,
      checkAnswer,
      answerInfo,
      onlyGoodAnswer,
      nextQuestion,
      restart,
      saveFlag,
      save
    };
  },
});
</script>
<style lang="scss">

.captionStyle{
  color:black; opacity: 0.54; font-weight: 400; font-size: 60%;
}

.answersStyle {
   color:black; font-weight: 400; font-size: 60%;
}

.btnStyle2F{
  font-size: 1.2vw;
}

@media (min-width: 701px) {
  .my-card {
    width: 90%;
   // font-size: 1.5vw ;
  }
}
@media (max-width: 701px) {
  .my-card {
    width: 100%;
  }
}
.q-item__section--main + .q-item__section--main {
  margin-left: 0px;
}
</style>
<!--
  <template>
  <div
    class="q-pa-md row items-start q-gutter-md vertical-middle row full-height justify-center"
  >
    <q-card class="my-card" flat bordered style="max-width: 1200px;">
      <q-list bordered>
        <q-item>
          <q-item-section v-if="started < 2">
            <q-item-label
              >Answers: {{ counter }} | Good Answers: {{ goodAnswersCounter }} |
              Score:
              {{
                counter == 0
                  ? 100
                  : Math.floor((goodAnswersCounter * 100) / counter)
              }}%
            </q-item-label>
            <q-item-label class="captionStyle">
              Left:
              {{ left }}</q-item-label
            >
          </q-item-section>
          <q-item-section v-else-if="started == 2">
            <q-item-label v-if="answerInfo == 'Bad Answer!'" style="color: red">
              {{ answerInfo }}
            </q-item-label>
            <q-item-label v-else style="color: #52cc7a">
              {{ answerInfo }}
            </q-item-label>
          </q-item-section>
          <q-item-section v-else>
            <q-item-label>
              <b>Congratulation! Your Score:</b>
              {{
                counter == 0
                  ? 100
                  : Math.floor((goodAnswersCounter * 100) / counter)
              }}%
            </q-item-label>
            <q-item-label class="captionStyle"
              >Your chance to pass has increased</q-item-label
            >
          </q-item-section>

          <q-separator />
        </q-item>

        <q-separator />
        <div v-if="started == 3" style="width: 100%">
          <q-item-section class="q-mxy-sm">
            <q-item-label class="q-py-sm">
              <b>One more time?</b>
            </q-item-label>
          </q-item-section>

          <q-separator />

          <q-separator />

          <q-item-section>
            <q-item-label>
              <q-btn
                :ripple="{ color: 'grey' }"
                color="grey-10"
                label="Restart"
                padding="sm md"
                class="q-my-md btnStyle"
                @click="restart"
                no-caps
              />
            </q-item-label>
          </q-item-section>

          <q-separator />
        </div>
        <div v-if="started == 1" style="width: 100%">
          <q-item-section class="q-mxy-sm">
            <q-item-label class="q-py-sm">
              <b>{{ actualQuestion.question }}</b>
            </q-item-label>
          </q-item-section>

          <q-separator />

          <q-item-section
            class="items-center"
            v-for="ans in shuffleArray"
            :id="ans.id"
            :key="ans.id"
          >
            <q-item-label
              class="text-body2 q-mt-sm"
              clickable
              @click="filters(ans.id)"
            >
              <p>{{ ans.ans }}</p>
            </q-item-label>
          </q-item-section>

          <q-separator />

          <q-btn
            :ripple="{ color: 'grey' }"
            color="grey-10"
            :disabled="!selected.length"
            label="Answer"
            class="q-my-md q-mx-md btnStyle"
            @click="checkAnswer"
            no-caps
          />
        </div>
        <div v-if="started == 0" style="width: 100%">
          <q-item-section class="q-mxy-sm">
            <q-item-label class="q-py-sm">
              <b>Start taking the quiz. Press the button!</b>
            </q-item-label>
          </q-item-section>

          <q-separator />

          <q-item-section>
            <q-item-label>
              <q-btn
                :ripple="{ color: 'grey' }"
                color="grey-10"
                label="Start"
                padding=" md xl"
                class="q-my-md btnStyle"
                @click="startFun"
                no-caps
              />
            </q-item-label>
          </q-item-section>

          <q-separator />
        </div>
        
        <div v-if="started == 2" style="width: 100%">
          <quiz-show-good-answer
            :question="actualQuestion"
            :correct="onlyGoodAnswer"
          />

          <q-separator />
          <q-btn
            :ripple="{ color: 'grey' }"
            color="grey-10"
            label="Next Question"
            padding=" sm md"
            class="q-my-md q-mx-md btnStyle"
            @click="nextQuestion"
            no-caps
          />
          <q-btn
            :ripple="{ color: 'grey' }"
            color="grey-10"
            padding=" sm md"
            label="Save Game"
            class="q-my-md q-mx-md btnStyle"
            @click="save()"
            no-caps
          />
        </div>
      </q-list>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch, computed } from "vue";
import QuizShowGoodAnswerVue from "./QuizShowGoodAnswer.vue";
import QuizShowGoodAnswer from "./QuizShowGoodAnswer.vue";
import { useRouter } from "vue-router";
import { useQuasar } from 'quasar'

export default defineComponent({
  components: { QuizShowGoodAnswerVue, QuizShowGoodAnswer },
  name: "QuizComponent",
  props: {
    file: Object,
  },
  setup(props) {
    const router = useRouter();
    let actualQuestion = ref("");
    let actualAnswers = ref([]);
    let actualCorrectAnswers = ref([]);
    let numberOfQuestions = 0;
    let running = ref(false);
    let started = ref(0);
    let maxNumberofAnswers = 2;
    let data = props.file;
    let counter = ref(data.score.counter);
    let goodAnswersCounter = ref(data.score.goodAnswersCounter);
    let left = ref(data.score.left);
    let selected = ref([]);
    let onlyGoodAnswer = ref([]);
    let answerInfo = ref("");
    let saveFlag = ref(false)
    const $q = useQuasar()

    function randQuestion() {
      
      let rand = Math.floor(Math.random() * data.questions._value.length);
        
        actualAnswers.value.push(data.answers._value[rand]);
        actualQuestion.value = data.questions._value[rand];
        actualCorrectAnswers.value.push(data.correctAnswers._value[rand]);
        data.questions._value[rand].counter =
          data.questions._value[rand].counter + 1;

        // console.log("to cos", data.answers._value[rand]);
        for (var arr of actualAnswers.value[0].answer) {
          if (actualCorrectAnswers.value[0].correct.includes(arr.id)) {
            onlyGoodAnswer.value.push(arr);
          }
        }
         if (data.questions._value[rand].counter == maxNumberofAnswers) {
          data.questions._value.splice(rand, 1);
          data.answers._value.splice(rand, 1);
          data.correctAnswers._value.splice(rand, 1);
        }
        return rand
    }
    function nextQuestion () {
      
      onlyGoodAnswer.value = [];
      actualAnswers.value = [];
      actualCorrectAnswers.value = [];
      selected.value = [];
      started.value = 1;

      if (data.questions._value.length > 0) {
        
        let rand = randQuestion();
        /*if (data.questions._value[rand].counter == maxNumberofAnswers) {
          data.questions._value.splice(rand, 1);
          data.answers._value.splice(rand, 1);
          data.correctAnswers._value.splice(rand, 1);
        }*/

      } else {
        started.value = 3;
      }
    }
    function restart() {
      window.location.reload()
    }
    
    function save () {

        data.score.counter = counter.value
        data.score.goodAnswersCounter = goodAnswersCounter.value
        data.score.left = left.value
        
        //console.log('test', data)
        localStorage.setItem("data", JSON.stringify(data));

        saveFlag.value = false

          $q.notify({
            progress: true,
            message: 'The test has been saved',
            icon: 'save_alt',
            color: 'white',
            textColor: 'grey-10'
          })



    }
    function filters(select) {
      if (document.getElementById(select).style.backgroundColor == "black") {
        document.getElementById(select).style.backgroundColor = "white";
        document.getElementById(select).style.opacity = "100%";
        document.getElementById(select).style.color = "black";
        var indexToRemove = selected.value.indexOf(select);
        selected.value.splice(indexToRemove, 1);
      } else {
        document.getElementById(select).style.backgroundColor = "black";
        document.getElementById(select).style.opacity = "30%";
        document.getElementById(select).style.color = "white";
        selected.value.push(select);
      }
      //console.log(selected);
    }

    const shuffleArray = computed(() => {
      let array = actualAnswers.value[0];
      if (array) {
        for (var i = array.answer.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array.answer[i];
          array.answer[i] = array.answer[j];
          array.answer[j] = temp;
        }
        //console.log("shuffled", array);
        return array.answer;
      }
    });

    function startFun() {
      randQuestion();
      started.value = 1;
    }

    function checkAnswer() {
      let goodAnswer = true;
      answerInfo.value = "Correct Answer!";

      for (var select of selected.value) {
        if (!actualCorrectAnswers.value[0].correct.includes(select)) {
          goodAnswer = false;
        }
      }
      if (
        !goodAnswer ||
        actualCorrectAnswers.value[0].correct.length !== selected.value.length
      ) {
        answerInfo.value = "Bad Answer!";
      } else {
        goodAnswersCounter.value += 1;
      }
      started.value = 2;
      counter.value += 1;
      left.value -= 1;
    }

    onMounted(() => {
     
      numberOfQuestions = data.answers._value.length;

      if(left.value == -1)
        left.value = numberOfQuestions * maxNumberofAnswers;
    });

    return {
      randQuestion,
      startFun,
      goodAnswersCounter,
      counter,
      actualQuestion,
      actualCorrectAnswers,
      actualAnswers,
      running,
      numberOfQuestions,
      maxNumberofAnswers,
      left,
      started,
      shuffleArray,
      filters,
      selected,
      checkAnswer,
      answerInfo,
      onlyGoodAnswer,
      nextQuestion,
      restart,
      saveFlag,
      save
    };
  },
});
</script>
<style lang="scss">

.captionStyle{
  color:black; opacity: 0.54; font-weight: 400; font-size: 60%;
}

.answersStyle {
   color:black; font-weight: 400; font-size: 60%;
}

.btnStyle2F{
  font-size: 1.2vw;
}

@media (min-width: 701px) {
  .my-card {
    width: 90%;
   // font-size: 1.5vw ;
  }
}
@media (max-width: 701px) {
  .my-card {
    width: 100%;
  }
}
.q-item__section--main + .q-item__section--main {
  margin-left: 0px;
}
</style>

-->