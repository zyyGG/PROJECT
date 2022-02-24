<template>
  <div class="tdl container">
    <!-- 标题 -->
    <Title></Title>
    <Page></Page>
  </div>
</template>

<script>
import Title from './components/Title'
import Page from './components/Page'

export default {
  name: 'APP',
  components:{Title,Page},
}
</script>

<style>
/* all */
.tdl{
    background:linear-gradient(to top,pink,skyblue);
    min-height:100vh;
}


</style>