<template>
    <div>
        <Header title="Profile" goBack="true" />


        <section class="w-96 block m-auto mt-4 pt-2">

            <h1 class="text-xl font-semibold">Profile</h1>

        
            <p class="text-sm mt-2 mb-2" >Welcome to your Profile Page! Here, you can personalize your experience .</p>


                   <div class="pt-2 pb-2">
                <form @submit.prevent="pressed">

                    <div class="input-group mb-2">
                        <label for="firstName" class="text-base font-bold text-gray-800">First Name:</label>
                        <input ref="firstName"
                            class="border block mt-2 border-gray-400 rounded-md bg-gray-50 text-sm leading-10 pl-4 w-full"
                            placeholder="firstName" v-model="firstName" type="text">
                    </div>

               
                    <div class="input-group mb-3">
                        <label for="lastName" class="text-base font-bold text-gray-800">Lastname:</label>
                        <input ref="lastName"
                            class="border block mt-2 border-gray-400 rounded-md bg-gray-50 text-sm leading-10 pl-4 w-full"
                            placeholder="lastName" v-model="lastName" type="text">
                    </div>



                    <!-- <div class="input-group mb-3">
                        <label for="accessToken" class="text-base font-bold text-gray-800">Access Token:</label>
                        <input ref="accessToken"
                            class="border block mt-2 border-gray-400 rounded-md bg-gray-50 text-sm leading-10 pl-4 w-full"
                            placeholder="accessToken" v-model="accessToken" type="text">
                    </div>


                      <div class="input-group mb-3">
                        <label for="refreshToken" class="text-base font-bold text-gray-800">Refresh Token:</label>
                        <input ref="refreshToken"
                            class="border block mt-2 border-gray-400 rounded-md bg-gray-50 text-sm leading-10 pl-4 w-full"
                            placeholder="refreshToken" v-model="refreshToken" type="text">
                    </div> -->

                    <button class="bg-primary rounded-xl text-white font-medium  text-sm block w-full px-4 py-2" > Update your profile</button>
                    
                     <!-- Success message -->
                    <!-- <div v-if="successMessage" class="text-green-600 text-center p-4">
                    {{ successMessage }}
                    </div> -->

                    <!-- Success message -->
                    <div v-if="successMessage" class="text-center fixed bottom-0 left-0 right-0 bg-green-500 text-white p-4 transition-transform transform translate-y-0 ease-in duration-300">
                            {{ successMessage }}
                    </div>

                    <!-- Error message -->
                    <div v-if="errorMessage" class="text-center fixed bottom-0 left-0 right-0 bg-red-500 text-white p-4 transition-transform transform translate-y-0 ease-in duration-300">
                            {{ errorMessage }}
                    </div>

               
                </form>
            </div>

                
        </section>

        <!-- {{etablissement}} -->

    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';

    import axios from 'axios';

    import {
        debounce
    } from "debounce";

    export default {
        components: {

        },
        data() {
            return {
                fromAPI : null,
                firstName : "",
                lastName : "",
                accessToken : "",
                refreshToken: "",
                successMessage : "",
                errorMessage : ""
            }
        },
        methods: {
         async pressed() {

            const userData = this.$fire.firestore.collection('users').doc(this.$fire.auth.currentUser.uid);

            try {

                userData.set({
                    firstName : this.firstName,
                    lastName : this.lastName
                },{merge: true})

                this.successMessage = 'User data updated successfully';

                setTimeout( () => this.successMessage = "",2000)


            } catch (error) {

                this.errorMessage = `Error when updating user data:  ${error.toString()}`;

                setTimeout( () => this.errorMessage = "",2000)
            }

         }

        },
        computed: {

        },

        async mounted() {

            try {
                const user = this.$fire.auth.currentUser;

                if (!user) console.log('You are not logged in !')

                const JWT = await this.$fire.auth.currentUser.getIdToken();

                this.fromAPI = JWT;

                const axiosConfig = {
                    headers: {
                        authorization: `Bearer ${JWT}`
                    }
                }

                console.log(axiosConfig)
                const res = await axios.get(`${this.getAPIDomain()}/private-route`, axiosConfig);
                console.log(res.data);

                this.fromAPI = res.data;

            } catch (error) {
                console.log(error);
            }


    
            // get the data
            try {
                
                const docRef = this.$fire.firestore.collection("users").doc(this.$fire.auth.currentUser.uid) ;

                const doc = await docRef.get();

                if(doc.exists){
                    this.firstName = doc.data().firstName;
                    this.lastName = doc.data().lastName;  
                    
                    if(doc.data().tokens){
                        console.log(doc.data().tokens)

                        this.accessToken = doc.data().tokens.accessToken;
                        this.refreshToken = doc.data().tokens.refreshToken;
                    }

                }

            } catch (error) {
                console.log(error);
            }
           

        },
        created() {
            const user = this.$fire.auth.currentUser;
            if (!user) this.$root.context.redirect({
                name: 'login'
            });
        }
    }
</script>