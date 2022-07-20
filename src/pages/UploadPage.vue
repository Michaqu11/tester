<template>
  <q-page class="flex flex-center" style="font-size: large">
    <div style="border-style: solid 1px">
      <div class="q-pa-md text-center">
        <h5>Upload test data and start solving quiz!</h5>
        <div>
          <p>
            The file should look like: <br />
            1. Questions <br />
            2. Numer of answers <br />
            3. Answers <br />
            4. Correct answers without spacing <br />
            5. Newline
          </p>
        </div>
        <upload-info-vue />
        <div class="q-gutter-md q-mt-md row items-start flex flex-center">
          <q-file
            input-class="text-center"
            class="MyInput"
            outlined
            v-model="file"
            filled
            label="Input data"
            :filter="checkFileType"
            @rejected="onRejected"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>
        <div class="q-mt-lg">
          <q-btn
            size="25px"
            round
            color="grey-10"
            icon="cloud_upload"
            @click="readFile()"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import UploadInfoVue from "../components/UploadInfo.vue"

export default defineComponent({
  name: "UploadPage",
  components: { UploadInfoVue },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    let file = ref(null);
    let questions = ref([]);
    let answers = ref([]);
    let correctAnswers = ref([]);
    let warning = ref("");

    function checkFileType(file) {
      return file.filter((f) => f.type === "text/plain");
    }

    function onRejected(rejectedEntries) {
      $q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
      });
    }

    function pushToLocalStroage() {
      const data = {
        questions: questions,
        answers: answers,
        correctAnswers: correctAnswers,
        score: {
          counter: 0,
          goodAnswersCounter: 0,
          left: -1
        }
      };
      localStorage.setItem("data", JSON.stringify(data));
      router.push({ name: "home" });

      console.log("pushToLocalStroage");
    }

    async function readFile() {
      warning = "";

      const str = await file.value.text();
      const lines = str.split(/\r?\n/);
      var it = 0;
      var idx = 0;
      var validate = true;
      for (let i = 0; i < lines.length; i++) {
        var answerNumbers = 0;
        if (it == 0) {
          if (Number(lines[i] == isNaN)) {
            validate = false;
          } else {
            questions.value.push({ id: idx, counter: 0, question: lines[i] });
            it += 1;
          }
        } else if (it == 1) {
          if (!Number(lines[i])) {
            validate = false;
          } else {
            answerNumbers = parseInt(lines[i]);
            var ans = [];
            for (var j = 0; j < answerNumbers; j++) {
              if (Number(lines[i] == isNaN)) {
                validate = false;
              } else {
                ans.push({ id: j, ans: lines[i + j + 1] });
              }
            }
            answers.value.push({ id: idx, answer: ans });
            i = i + j;
            it += 1;
          }
        } else if (it == 2) {
          if (Number(lines[i] == isNaN)) {
            validate = false;
          } else {
            let temp = lines[i].split("");
            let cA = [];
            for (ans of temp) {
              cA.push(ans.charCodeAt(0) - 97);
            }
            correctAnswers.value.push({ id: idx, correct: cA });
            it += 1;
          }
        } else {
          it = 0;
          idx++;
        }

        if (!validate) {
          warning = "Wrong file format.";
          break;
        }
      }
      if (validate) {
        pushToLocalStroage();
      }
    }

    return {
      file,
      checkFileType,
      onRejected,
      readFile,
      UploadInfoVue
    };
  },
});
</script>
<style lang="scss">
.MyInput .q-field__label {
  width: 80%;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
}
</style>
