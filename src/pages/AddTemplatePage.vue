<template>
  <q-page class="q-pa-md text-center" style="font-size: large">
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

      <q-separator class="q-mt-lg" />
      <div class="q-gutter-md q-mt-md row items-start flex flex-center column">
        <q-input filled v-model="title" label="Title" class="MyInput">
          <template v-slot:prepend>
            <q-icon name="notes" /> </template
        ></q-input>

        <q-file
          input-class="text-center"
          class="MyInput"
          outlined
          v-model="file"
          filled
          label="Input test"
          :filter="checkFileType"
          @rejected="onRejected"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
        <!--<q-file
            input-class="text-center"
            class="MyInput"
            outlined
            v-model="img"
            filled
            label="Input image(optional)"
            :filter="checkImg"
             @rejected="onRejected"
          >
          <template v-slot:prepend>
            <q-icon name="image" />
          </template>
          </q-file>-->
        <q-input
          filled
          v-model="img"
          label="Link to image(optional)"
          class="MyInput"
        >
          <template v-slot:prepend>
            <q-icon name="image" /> </template
        ></q-input>
      </div>
      <div class="q-mt-xl">
        <q-btn
          size="25px"
          round
          color="grey-10"
          icon="cloud_upload"
          @click="readFile()"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import UploadInfoVue from "../components/UploadInfo.vue";

export default defineComponent({
  name: "AddTamplatePage",
  components: { UploadInfoVue },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    let file = ref(null);
    let questions = ref([]);
    let answers = ref([]);
    let correctAnswers = ref([]);
    let warning = ref("");
    let img = ref(null);
    let title = ref("");

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
      };

      let formData = new FormData();
      formData.append("date", parseInt(Date.now()));
      formData.append("json", JSON.stringify(data));
      formData.append("title", title.value);
      formData.append("image", img.value != null ? img.value : "");
      let goodPas = true;

      $q.dialog({
        title: "Password",
        message: "Give password",
        prompt: {
          model: "",
          isValid: (val) => val.length > 2, // << here is the magic
          type: "text", // optional
        },
        cancel: true,
        persistent: true,
      }).onOk((data) => {
        let pas = "";
        axios
          .get("https://tester-backend.herokuapp.com/pas/")
          .then((response) => {
            pas = response.data;
            if (pas == data && data != "") {
              axios
                .post("https://tester-backend.herokuapp.com/add/", formData)
                .then((response) => {
                  console.log("response");
                });
              router.push({ name: "home" });
            } else {
              $q.notify({
                type: "negative",
                size: "large",
                message: `Wrong password!`,
              });
            }
          });
      });
    }

    function checkImg(file) {
      return file.filter(
        (f) =>
          f.type === "image/png" ||
          f.type === "image/jpg" ||
          f.type === "image/jpeg"
      );
    }

    async function readFile() {
      warning.value = "";
      if (title.value === "") {
        warning.value = "title is required";
        $q.notify(warning.value);
      } else {
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
            warning.value = "Wrong file format.";
            break;
          }
        }
        if (validate) {
          pushToLocalStroage();
        }
      }
    }

    return {
      file,
      checkFileType,
      onRejected,
      readFile,
      img,
      title,
      checkImg,
      warning,
    };
  },
});
</script>
<style lang="scss">
.MyInput {
  width: 70%;
  .q-field__label {
    text-align: left;
  }
  @media (min-width: 900px) {
    width: 50%;
    text-align: left;
  }
}
</style>
