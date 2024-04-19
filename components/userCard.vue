<template>

  <div
      class="w-64 rounded-lg border-2 border bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
      <figure class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border dark:bg-indigo-600">
          <img width="300" src="/img/logo.png"/>
      </figure>
      <h2 class="mt-4 text-xl font-bold dark:text-indigo-400">{{ name }}</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-300">Web Developer</p>
      <div class="flex items-center justify-center">
          <a href="#" class="bg-primary rounded-xl text-white font-medium  text-sm block mr-2 px-4 py-2" >Profile</a>
          <a href="#" class="bg-primary rounded-xl text-white font-medium  text-sm block mrl-2 px-4 pl-3 py-2" >Contact</a>
      </div>
  </div>
</template>


<script>
export default {
  props: ['name'],

  data() {
      return {

      }
  },
  methods: {

      hello() {
          console.log("hello")

      },


      created() {

      }
  }
}
</script>