<template>
  <div>

    <div class="h-12 border-b-3 shadow relative  bg-white">

      <div class="absolute h-full w-48 bottom-0 top-3 left-0 right-0">

        <nuxt-link v-if='link' :to="link">
          <img width="30px"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48ZyBkYXRhLW5hbWU9IjEiIGlkPSJfMSI+PHBhdGggZD0iTTM1Myw0NTBhMTUsMTUsMCwwLDEtMTAuNjEtNC4zOUwxNTcuNSwyNjAuNzFhMTUsMTUsMCwwLDEsMC0yMS4yMUwzNDIuMzksNTQuNmExNSwxNSwwLDEsMSwyMS4yMiwyMS4yMUwxODkuMzIsMjUwLjEsMzYzLjYxLDQyNC4zOUExNSwxNSwwLDAsMSwzNTMsNDUwWiIvPjwvZz48L3N2Zz4="
            alt="back button">
        </nuxt-link>


        <img v-if="goBack" @click="goPreviousPage()" width="30px"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48ZyBkYXRhLW5hbWU9IjEiIGlkPSJfMSI+PHBhdGggZD0iTTM1Myw0NTBhMTUsMTUsMCwwLDEtMTAuNjEtNC4zOUwxNTcuNSwyNjAuNzFhMTUsMTUsMCwwLDEsMC0yMS4yMUwzNDIuMzksNTQuNmExNSwxNSwwLDEsMSwyMS4yMiwyMS4yMUwxODkuMzIsMjUwLjEsMzYzLjYxLDQyNC4zOUExNSwxNSwwLDAsMSwzNTMsNDUwWiIvPjwvZz48L3N2Zz4="
          alt="back button">

      </div>

      <div class="text-center">
        <img class="inline" src="/img/logo.png" width="50" alt="">
        <p class="inline text-lg text-center leading-10 pt-2 font-bold text-gray-800">{{title}}</p>
      </div>

      <!-- <button class="absolute  top-3 right-0 h-8 w-8 bg-blue-700" @click="showMenu = !showMenu">Menu</button> -->

      <svg class="absolute  top-3 right-0 h-8 w-8 " @click="showMenu = !showMenu" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g id="Menu / Menu_Alt_01">
            <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="#000000" stroke-width="1.6320000000000001"
              stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </g>
      </svg>

    </div>

    <aside class="bg-white border-l filter shadow h-screen w-60 right-0 absolute top-15  z-10 p-4" v-show="showMenu">
      <ul>
        <li class=" border-b mb-2">
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li v-if="!loggedIn" class="border-b mb-2">
          <NuxtLink to="/register"> Register </NuxtLink>
        </li>

         <li v-if="loggedIn" class=" border-b mb-2">
          <NuxtLink to="/profile"> Profile </NuxtLink>
        </li>


        <li v-if="loggedIn" class=" border-b mb-2">
          <NuxtLink to="/search"> Search </NuxtLink>
        </li>

        <li v-if="loggedIn" class=" border-b mb-2">
          <NuxtLink to="/hubspot"> HubSpot connection </NuxtLink>
        </li>

        <li v-if="loggedIn" class="border-b mb-2">
          <a :href="this.getInstallURL()" class="bg-orange border-b mb-2 mt-2 rounded-md text-xs text-center  block py-1 text-white leading-6 p-1 pl-4 pr-4 w-full"> Connect your HubSpot Portal</a>
        </li>

        <li v-if="loggedIn" @click="signout"
          class="border-b mb-2 mt-2 rounded-md bg-gray-400 text-sm text-center  text-white leading-6 p-1 pl-4 w-full">
          Sign out </li>
        
        <li v-if="!loggedIn" class="border-b mb-2 mt-2 rounded-md bg-orange text-sm text-center  text-white leading-6 p-1 pl-4 w-full">
          <NuxtLink to="/login"> Login </NuxtLink>
        </li>

      </ul>
    </aside>

  </div>
</template>


<script>
  export default {
    props: ['title', 'goBack', 'link'],

    data() {
      return {
        showMenu: true,
        loggedIn: false
      }
    },
    methods: {

      goPreviousPage() {
        //console.log("looool")
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },

      async signout() {

        try {
          const signout = this.$fire.auth.signOut();

          console.log(`${signout} response`);

          this.$root.context.redirect({
            name: 'login'
          });

        } catch (e) {
          console.log("Error ❌ : ", e.toString(), e ); 
        }

      }

    },
    created() {
      this.$fire.auth.onAuthStateChanged(user => this.loggedIn = !!user )
    }
  }
</script>