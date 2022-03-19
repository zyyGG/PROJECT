<template>
  <div>
      <a-menu mode="horizontal">
          <a-menu-item key="allItem">
              <span>全部商品</span>
              <router-link to="/myItem/allItem"></router-link>
          </a-menu-item>
          <a-menu-item key="onSell">
              <span>出售中的商品</span>
              <router-link to="/myItem/onSell"></router-link>
          </a-menu-item>
          <a-menu-item key="others">
              <span>草稿箱</span>
              <router-link to="/myItem/others"></router-link>
          </a-menu-item>
      </a-menu>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyItem"
}
</script>

<style>
</style>