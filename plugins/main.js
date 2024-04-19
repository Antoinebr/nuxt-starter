import Vue from 'vue'


Vue.prototype.getCurrentUser = (auth) => {

    if(!auth) throw new Error('firebase auth has to be passed as a parameter for the getCurrentUser() function');

    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
}


Vue.prototype.getAPIDomain = () => (window.location.hostname === "localhost") ? `http://localhost:3008` : `https://autocomplete.antoinebrossault.com/app`;
                                     
Vue.prototype.getInstallURL = () => (window.location.hostname === "localhost") ? `http://localhost:3008/install` : `https://autocomplete.antoinebrossault.com/app/install`;