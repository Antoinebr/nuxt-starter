const getAPIURL = () => location.toString().includes('local') ? 'http://localhost:3009' : 'https://siren-api.antoinebrossault.com';

export const state = () => ({
    inseeResult : [],
    queryName : "",
    sirenSelected : "",
    etablissement: {}
    
});



export const mutations = {

 
    setQueryName(state, payload) {

        if (!payload) {
            console.error(`store [search/setQueryName] set an empty setQueryName, we got ${payload} of type ${typeof payload}`)
        }

        console.log(payload);
        state.queryName = payload;
    },

    setInseeResult(state, payload) {

        if (!payload) {
            console.error(`store [search/setInseeResult] set an empty setInseeResult, we got ${payload} of type ${typeof payload}`)
        }

        state.inseeResult = payload;

    },

    setSirenSelected(state, payload) {

        if (!payload) {
            console.error(`store [search/setSirenSelected] set an empty setSirenSelected, we got ${payload} of type ${typeof payload}`)
        }

        state.sirenSelected = payload;

    },

    setEtablisseent(state,payload){

        if (!payload) {
            console.error(`store [search/setEtablisseent] set an empty setEtablisseent, we got ${payload} of type ${typeof payload}`)
        }
        state.etablissement = payload;

    }

};



export const actions = {

    async searchCompanies({ commit, state, rootGetters }) {

        const myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

        const data = await fetch(`${getAPIURL()}/search?name=${this.state.search.queryName}`, {
            headers: myHeaders
        });

        if (!data.ok) {
            // todo set an error in the state 
            const errorText = await data.text();
            throw new Error(errorText);
        }

        const inseeResult = await data.json();

        this.commit('search/setInseeResult',inseeResult);

        console.log(inseeResult)

    },

    async searchEtablissement({ commit, state, rootGetters }) {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        if(!this.state.search.sirenSelected || this.state.search.sirenSelected === "" ) throw new Error(`store [search/searchCompanies] the value sirenSelected is falsy we got ${typeof this.state.search.sirenSelected} `);
        
        const data = await fetch(`${getAPIURL()}/siretFromSiren?siren=${this.state.search.sirenSelected}`, {
            headers: myHeaders
        });

        if (!data.ok) {
            // todo set an error in the state 
            const errorText = await data.text();
            throw new Error(errorText);
        }

        const inseeResultEtablissement = await data.json();

        console.log(inseeResultEtablissement)

        this.commit('search/setEtablisseent',inseeResultEtablissement);

    }

};



export const getters = {

    getInseeResult: state => state.inseeResult,

    getEtablissement: state => state.etablissement,

};