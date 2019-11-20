<template>
  <div class="page">
    <i></i>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  },
  mounted() {
    console.log(11)
  }
}
</script>

<style scoped lang="scss">
.page{
  background: url('./assets/bj.jpg') no-repeat top center;
  width: 500px;
  height: 500px;
}

i{
  background: url('./assets/excel.png') no-repeat top center;
  width: 10px;
  height: 10px;
}
</style>
