<template>
    <div>
    <div class="HeadText">Contact with me by</div>
    <div class="Email">
        {{Email}}
    </div>
    </div>
</template>

<script>
export default {
    props:[
        'Email'
    ]
}
</script>

<style>
.Email {
   color: red;
   font-size: 28px; 
   font-weight: bold;
}

.HeadText {
   color:white;
   font-size: 16px; 
   margin: 10px;
}
</style>