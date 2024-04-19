<template>
    <div>
        <Header title="Login" goBack="true" />


        <section class="w-96 block m-auto">

            <div class="pt-2 pb-2">
                <form @submit.prevent="pressed">

                    <div class="input-group">
                        <label for="email" class="text-base font-bold text-gray-800">Email:</label>
                        <input ref="email"
                            class="border block mt-2 border-gray-400 rounded-md bg-gray-50 text-sm leading-10 pl-4 w-full"
                            placeholder="email" v-model="email" type="email" required>
                    </div>

                    <div class="input-group mb-3">
                        <label for="password" class="text-base font-bold text-gray-800">Password:</label>
                        <input ref="password"
                            class="border block mt-2 border-gray-400 rounded-md bg-gray-50 text-sm leading-10 pl-4 w-full"
                            placeholder="password" v-model="password" type="password" required>
                    </div>

                    <button class="bg-orange rounded-xl text-white font-medium text-sm block w-full px-4 py-2 hover:bg-black/80" >Login</button>

                </form>
            </div>

            
            <button @click="googleSignIn"
                class="mt-2 m-auto px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy"
                    alt="google logo">
                <span>Login with Google</span>
            </button>

        </section>

        <!-- {{etablissement}} -->

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
                email: null,
                password: null
            }
        },
        methods: {
            async pressed() {

                try {
                    this.$fire.auth.signInWithEmailAndPassword(this.email,this.password);

                    this.$root.context.redirect({name: 'profile'});
                } catch (e) {
                    console.log(e)
                }
            },

            async googleSignIn() {

                const provider = new this.$fireModule.auth.GoogleAuthProvider();

                try {
                    await this.$fire.auth.signInWithPopup(provider);
                    this.$root.context.redirect({name: 'profile'});
                    console.log('Now logged in with Google 🔥')
                } catch (error) {

                    console.log('❌', error)
                }

            }
        },
        computed: {

        },

        async mounted() {

            await this.getCurrentUser(this.$fire.auth)

            const user = this.$fire.auth.currentUser;
            if (user) this.$root.context.redirect({
                name: 'profile'
            });

        }
    }
</script>

    .hs-btn {
        -webkit-text-size-adjust: 100%;
        --uicomponents-font-family: "Lexend Deca", Helvetica, Arial, sans-serif;
        --global-nav-height: 86px;
        --uicomponents-global-nav-height: 86px;
        box-sizing: border-box;
        font: inherit;
        margin: 0;
        text-transform: none;
        cursor: pointer;
        border-radius: 3px;
        border-style: solid;
        border-width: 1px;
        -webkit-font-smoothing: auto;
        font-family: var(--uicomponents-font-family, "Lexend Deca", Helvetica, Arial, sans-serif);
        font-weight: 400;
        text-align: center;
        user-select: none;
        transition: all .15s ease-out;
        display: inline-block;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
        white-space: nowrap;
        font-size: 12px;
        line-height: 14px;
        padding: 8px 16px;
        width: 100%;
        background-color: #ff7a59;
        border-color: #ff7a59;
        color: #fff;
    }
</style>