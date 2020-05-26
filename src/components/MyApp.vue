<template>
    <div>
    <p class="Text">{{ message }}</p>
    <h3 class="Text">{{ message2 }}</h3>
    </div>
</template>
<script>
export default {
    name:"MyApp",
    data (){
        return {
            message : "Vue App",
            message2 : "by: Yahya Mokaied"

        }
    }
}
</script>

<style>
.Text {
   color:grey;
   font-size: 16px; 
   margin: 10px;
}
</style>