<template>
  <div class="tdl container">
    <!-- 标题 -->
    <div class="row">
      <div class="col-md-2">
        <Side></Side>
      </div>
      <div class="col-md-10">
        <MainPage></MainPage>
      </div>
    </div>
    
    <!-- <Page></Page> -->
  </div>
</template>

<script>
import Side from './components/Side'
import MainPage from './components/MainPage'

export default {
  name: 'APP',
  components:{Side,MainPage},
}
</script>

<style>
/* all */
.tdl{
    min-height:50vh;
    border:10px double #ddd;
}


</style>