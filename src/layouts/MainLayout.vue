<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10" bordered>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="menu-button"
          @click="leftDrawerOpen = !leftDrawerOpen"
          size="20px"
        />
        
        <q-toolbar-title
          style="
            font-family: customfont;
            src: url(./fonts/customfont.woff);
            font-size: 40px;
            padding: 5px;
          "
          @click="route()"
        >

          Tester
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :show-if="leftDrawerOpen" bordered>
      <q-list style="height: 100%;">
        <q-item-label header> Pages: </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-item-label header class="q-mt-md"> Settings: </q-item-label>

        <q-item clickable v-if="showInstall" @click="install" class="text-grey-10">

          <q-item-section avatar>
            <q-icon name="get_app" />
          </q-item-section>

          <q-item-section >
            <q-item-label>Install App</q-item-label>
            <q-item-label caption>Install applciation to your device</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="text-grey-10">
          <q-item-section avatar>
            <q-icon name="dark_mode" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              Turn dark Mode
                <q-toggle 
                color="grey-10" 
                v-model="darkMode"
                @click = " changeBg()"
                />
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="text-grey-10">
          <q-item-section avatar>
            <q-icon name="pets" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Show Footer <q-toggle 
                color="grey-10" 
                v-model="showFooter"
                @click="footerSettimg()"
                /></q-item-label>
          
          </q-item-section>
        </q-item>

        <q-item-label class="text-center absolute-bottom text-subtitle2  q-mb-md">
          <a overline class="text-grey-5 full-height">by Michal Jasinski</a>
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-footer class="bg-white" v-if="showFooter">
      <q-tabs class="text-grey-10">
        <q-route-tab to="/" name="home" icon="home" />
        <q-route-tab to="/upload" name="fileUpload" icon="file_upload" />
        <q-route-tab to="/templates" name="templatePage" icon="view_list" />
      </q-tabs>
    </q-footer>

    <q-page-container class="bg-grey-1 bodyPage">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const linksList = [
  {
    title: "Tester",
    caption: "Home page",
    icon: "school",
    link: "/",
  },
  {
    title: "Upload",
    caption: "Upload File to memory",
    icon: "file_upload",
    link: "/upload",
  },
  {
    title: "Templates",
    caption: "Use template",
    icon: "view_list",
    link: "/templates",
  },
    {
    title: "Add templates",
    caption: "Add template to database",
    icon: "add_link",
    link: "/add_template",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const router = useRouter(); 
    let showFooter = ref(localStorage.getItem("footer") != undefined ? (localStorage.getItem("footer") === 'true' ? true : false) : false);
        
    let darkMode = ref(localStorage.getItem("dark") != undefined ? (localStorage.getItem("dark") === 'true' ? true : false) : false);
   
    let deferredPrompt;
    let showInstall = ref(true)

    
    function install () {
      // Hide the app provided install promotion
      showInstall.value = false
      leftDrawerOpen.value = !leftDrawerOpen.value
      // Show the install prompt
      if(deferredPrompt)
        deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt = null;
    }

    function footerSettimg () {
      localStorage.setItem("footer",  showFooter.value);
    }
    
    function changeBg () {
      $q.dark.set(darkMode.value)
      localStorage.setItem("dark", darkMode.value);
      let color = "#ffffff"
      if (darkMode.value)
        color = "#000000"
         
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  color)
      
    
    }
    //watch(changeBg, darkMode)
    function route () {
        router.push({ name: "home" });
      }
    onMounted(() => {

      window.addEventListener('beforeinstallprompt', function (event) {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      event.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = event;
      });

      if (screen.width <= 500) {
        showInstall.value = false
        if(localStorage.getItem("footer") == undefined)
          showFooter.value = true;
      }

      changeBg()  
      footerSettimg()     

    }) 
    
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      showFooter,
      footerSettimg,
      install,
      showInstall,
      darkMode,
      changeBg,
      route
    };
  },
});
</script>
<style lang="scss">
.q-toolbar__title {
  text-align: center;
  font-style: italic;
  font-weight: bold;
  font-size: x-large;
}
.menu-button {
  position: absolute;
}
.body--dark {

  .q-header {
    background: #1D1D1D !important;
    .q-toolbar__title {
      color: white;
    }
    .q-btn{
      color: white
    }
    
  }
  .q-footer{
    background: #1D1D1D !important;
    border-top-style: solid;
    border-top-color: white;
    .q-tab {
     color: white;
    }

  }
  .q-item__section{
    color: white;
  }
  .q-icon{
    color: white;
  }
  .q-toggle__thumb {
    color: white;
  }
  .q-toggle__track{
    color: white;
  }

  .bodyPage {
    background: #1D1D1D !important
  }
}
</style>
