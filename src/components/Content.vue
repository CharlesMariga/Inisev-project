<template>
  <div class="content">
    <SideNav />
    <MainContent />
  </div>
</template>

<script>
import SideNav from "./SideNav.vue";
import MainContent from "./MainContent.vue";

export default {
  name: "Content",
  components: {
    SideNav,
    MainContent,
  },
};
</script>

<style lang="scss">
.content {
  widows: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;

  @media screen and (max-width: 320px) {
    position: relative;
    grid-template-columns: 1fr;
  }
}
</style>
