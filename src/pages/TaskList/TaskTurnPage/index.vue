<template>
  <!-- 任务的翻页组件 -->
  <div>
    <a-row style="padding:10px 0">
      <a-pagination size="small" :total="500" show-size-changer show-quick-jumper />
    </a-row>
  </div>
</template>

<script>
export default {
name:"TaskTurnPage",
}
</script>

<style>

</style>