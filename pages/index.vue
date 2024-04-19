<template>
    <div>
      
        <main class="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-10 mt-10">
   
               <div class="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">Good <span class="font-semibold">luck</span> with your new idea</div>

                <img width="300" src="/img/logo.png"/>

                <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">Antoine project
                    <span class="relative whitespace-nowrap text-primary-400">
                        <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full ab-primary-fill" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                        <span class="relative ab-primary">starter</span>
                    </span>
                </h1>

                <p class="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eum quas dolorum nihil repudiandae doloremque deleniti dolorem ea quia incidunt tempore ipsam voluptatem cumque nulla rerum quae, beatae reprehenderit! Placeat.</p>

                <NuxtLink v-if="!loggedIn" class="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80" to="/register"> Get started</NuxtLink>

                <NuxtLink v-if="loggedIn" class="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80" to="/search"> Start ot use</NuxtLink>
        </main>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path class="ab-primary-fill" fill-opacity="1" d="M0,224L80,229.3C160,235,320,245,480,245.3C640,245,800,235,960,202.7C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

        <footer class=" bg-primary">
            <section class="w-10/12 m-auto pb-3">
                    <img class="mx-auto" src="/img/logo.png" width="50" alt="">
                     <p class=" text-center text-xs text-white"> Made with ♥ by <a target="_blank" href="https://www.antoinebrossault.com/">Antoine</a> </p>
            </section>
           
        </footer>

    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';


    export default {
        components: {

        },
        data() {
            return {
                loggedIn : null,
            }
        },
        methods: {


        },
        computed: {
            ...mapGetters({
       
            })
        },

        mounted() {

            // this.$store.dispatch('card/getCards')

        },
        async created(){
            await this.getCurrentUser(this.$fire.auth);
            const user = this.$fire.auth.currentUser;
            this.loggedIn = !!user;
        }
    }
</script>