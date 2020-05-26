<template>
<div id="app">
    <router-link class="menuText" to="/contactme/email">Contact Me</router-link>
    <router-link class="menuText" to="/myapp">My App</router-link>
    <router-view/><br>

  
  <input type="button" class="button" v-model="button" v-on:click="fetchUser"/>
  <div>
  <article>
  <div  class="text" >{{user.id}}</div>
  <div  class="text" >{{user.name}}</div>
  <div  class="text" >{{user.username}}</div>
  <div  class="text" >{{user.email}}</div>
  <div  class="text" >{{user.phone}}</div>
  <div  class="text" >{{user.website}}</div>
  </article>
  </div>

  </div>
</template>

<script>


  export default {
    name : 'app',
    data (){
      return {
        url : 'https://jsonplaceholder.typicode.com/users/',
        button : 'Fetch Random User',
        user:{},
        query: ''
      }

    },
    methods: {
      
      fetchUser (){
          fetch(this.url)
            .then (response => {
              return response.json();
            }).then(this.setResults);
      },

    setResults(results){
      var i = Math.floor(Math.random() * 9) + 1;
      this.user = results[i];
      this.$store.commit('addUser' , this.user)
    }
  }
}
</script>
<style>
body {
    font-family: 'Geneva', 'Tahoma';
    text-align: center;
    align-items: center;
    background-color: rgb(39, 255, 223);
    color:white;
    margin: 0;
    padding: 0;
}

#app {
    margin-top: 10px;
}

.menuText {
    text-align: center;
    margin: 20px ;
    padding: 20px;
    color: black;
    font-size: 1rem;
}

article {
  background-image: url('./assets/bgcode.jpg');
  background-position: center;
  background-size:cover;
  min-height: 150vh;
  padding: 20px;  
}

.button {
    text-align: center;
    margin: 20px ;
    padding: 20px;
    width: 250px;
    background-color:black;
    color: white;
    font-size: 1rem;
}

.text {
    text-align: center;
    margin: 20px ;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
}

</style>
