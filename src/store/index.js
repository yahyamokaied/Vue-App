import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



export default new Vuex.Store({
    state :{
      citiesHistory: []
    
  }, 
    
  
    mutations : {
      addCity (state , city) {
        state.citiesHistory.push(city)
        
      }
    }
  })
  //console.log(store.state.citiesHistory)

