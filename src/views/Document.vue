<template>
  <main>
    <menu class="sidebar">
      <div class="sidebar__menu">
        <div class="sidebar__menu-group" v-for="(group, index) in menus" :key="index">
          <h2 class="sidebar__menu-title">{{ group.meta.title }}</h2>
          <router-link v-for="(menu, index) in group.children" :key="index" :to="menu.path" class="sidebar__menu-item">
            {{ menu.meta.title }}
          </router-link>
        </div>
      </div>
      <div class="sidebar__bg"></div>
    </menu>
    <div class="container">
      <div class="panel" v-html="mdHtml" />
      <view class="footer">
        <view class="content">
          <text>Copyright © 2020 上海汇付数据服务有限公司</text>
        </view>
      </view>
    </div>
  </main>
</template>
<script>
import showdown from "showdown";
export default {
  name: "Document",
  components: {},
  data() {
    return {
      mdHtml: null,
    };
  },
  mounted() {},
  methods: {},
  computed: {
    menus() {
      const paths = this.$route.path.split("/");
      import("../markdown/" + paths[1] + "/" + paths[2] + ".md").then((Component) => {
        this.mdHtml = new showdown.Converter({ tables: true }).makeHtml(Component.default);
      });
      return this.$route.matched[0].children;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  max-width: 1600px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

menu.sidebar {
  margin: 0;
  padding: 0;
  .sidebar__menu {
    position: fixed;
    top: 70px;
    bottom: 0;
    z-index: 3;
    width: 220px;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: block;
      width: 0;
    }
    &:hover::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      color: #0d6eff;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
    }
    &:hover::-webkit-scrollbar-thumb {
      background: hsla(0, 0%, 53%, 0.4);
    }
    &:hover::-webkit-scrollbar-track {
      background-color: #f4f4f4;
    }
    .sidebar__menu-group {
      font-size: 14px;
      font-weight: 400;
      width: 216px;

      .sidebar__menu-title {
        height: 45px;
        font-size: 16px;
        line-height: 55px;
        text-indent: 28px;
        color: #999;
        margin: 0;
        padding: 0;
      }
      .sidebar__menu-item {
        display: block;
        height: 45px;
        line-height: 45px;
        text-indent: 45px;
        cursor: pointer;
        color: #000;
        box-sizing: border-box;
      }
      .router-link-active {
        color: #0d6eff;
        background-color: #e6f0ff;
        border-right: 3px solid #0d6eff;
      }
    }
  }
  .sidebar__bg {
    position: fixed;
    top: 70px;
    bottom: 0;
    z-index: 1;
    width: 216px;
    background-color: #fff;
    box-shadow: 0 0 12px #ebedf0;
  }
}
.container {
  margin: 30px;
  margin-left: 250px;
}
.panel {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
}
.footer {
  border-top: 0;
  background: none;
  padding: 0;
  height: 20px;
  line-height: 20px;
  margin-bottom: 20px;
}
</style>
