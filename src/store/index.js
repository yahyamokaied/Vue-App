import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state :{
      userHistory: []
    
  }, 
    
    mutations : {
      addCity (state , user) {
        state.userHistory.push(user)
      }
    }
  })
