<template>
  <q-page class="text-center">
    <h6>Select a test by clicking on the card</h6>
    <div class="flex flex-center">
      <q-card v-if="data" clickable v-ripple :id="item.json" @click="pushToLocalStroage(item.json)" v-for="item in data" class="q-py-md q-my-sm my_card">
        <q-img v-if="item.image" :src="item.image" style="max-height: 50%; max-width: 50%;"/>
        <q-card-section class="text-h6">
          <q-item-label>
            <b>{{item.title}}</b>
          </q-item-label>
          <q-item-label caption class="text-gray-10 textDate">
            {{ this.date.formatDate(parseInt(item.date), 'DD.MM.YYYY')}}
          </q-item-label>
        </q-card-section>
      </q-card>
       <div v-else class="flex flex-center text-grey-5 q-py-md my_card" flat>
        <h6 caption>No tests yet</h6>
       
       </div>

    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import axios from 'axios';
import { date, Loading } from 'quasar'
import { useRouter } from "vue-router";




export default defineComponent({
  components: {},
  name: "TemplatesPage",
  setup() {
    let data = ref(null);
    const router = useRouter();

    function pushToLocalStroage(item) {
      localStorage.setItem("data",item);
      router.push({ name: "home" });
    }

    onMounted(async () => {
      Loading.show()
      await axios.get('https://tester-backend.herokuapp.com/').then(response => {
          data.value = response.data
        }).catch(err => {
          console.log('err', err)
          data.value = null
        })
        Loading.hide()
    })
    
    return {
      data,
      date,
      pushToLocalStroage
    };
  },
});
</script>
<style lang="scss">
  .my_card{
     width: 80%;
    @media (min-width: 900px) { 
      width: 60%;
      
    }
  }
  .body--dark {
    .my_card{
      background-color: rgba(255, 255, 255, 0.07);
    }
    .textDate{
      color:white;
    }
  }
  .my_card2{
    
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
