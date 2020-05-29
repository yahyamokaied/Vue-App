import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state :{
      userHistory: []
    
  }, 
    
    mutations : {
      addUser (state , huser) {
        state.userHistory.push(huser)
      }
    }
  })
