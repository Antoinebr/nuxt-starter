<template>
    <div>
        <Header title="Profile" goBack="true" />


        <section class="w-96 block m-auto mt-4 pt-2">

            <h1 class="text-xl font-semibold">All users</h1>

        
            <p class="text-sm mt-2 mb-2" > See all users using the app : </p>


            <div class="pt-2 pb-2" v-if="this.users.length !== 0">

                <article > </article>

                <!-- {{ this.users }}
                <userCard name="Antoine"></userCard> -->

                <userCard v-for="user in users" :key="user.id" :name="user.data.firstName"></userCard>


            
            </div>

                
        </section>

        <!-- {{etablissement}} -->

    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';

    import userCard from '../../components/userCard.vue' 

    import axios from 'axios';


    export default {
        components: {
            userCard
        },
        data() {
            return {
                users : []
        
            }
        },
        methods: {
     

        },
        computed: {

        },

        async mounted() {

            // get the data

            console.log('looooo');
            try {
                
                const docRef = this.$fire.firestore.collection("users");

                const doc = await docRef.get();

                doc.forEach((doc) => this.users.push({id : doc.id, data : doc.data()}) );

                console.log(this.users);

            } catch (error) {
                console.log(error);
            }
           

        },
        created() {
            // const user = this.$fire.auth.currentUser;
            // if (!user) this.$root.context.redirect({
            //     name: 'login'
            // });
        }
    }
</script>