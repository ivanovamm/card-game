<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
<!--<form action="server.php" method="get" id="form">-->
<!--  <div align="right" class="nickname">-->
<!--    <h1 class="green">{{ msg }}</h1>-->
<!--    <b>Enter your nickname</b>-->
<!--    <input type="text" size="40" id="nick" placeholder="UserName123">-->
<!--  </div>-->
<!--</form>-->
</template>

<style scoped>
.nickname{
font-size: 2.6rem;
position: relative;
top: -10px;
}

.nickname{
  text-align: center;
}
</style>