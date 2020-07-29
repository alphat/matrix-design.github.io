<template>
  <div id="root" class="container no-sidebar">
    <header class="nav-bar">
      <div class="nav-bar__wrapper">
        <div class="content" :class="{ 'menu-bread-open': menuBreadOpen }">
          <router-link to="/" class="logo">
            <img src="./assets/logo.svg" />
          </router-link>
          <div class="menu-bread" @click="toggleMenuBread">
            <div class="bread-icon top" />
            <div class="bread-icon left" />
            <div class="bread-icon right" />
            <div class="bread-icon bottom" />
          </div>
          <div class="menu" @click="closeMenuBread">
            <router-link to="/">首页</router-link>
            <router-link to="/design/base">设计语言</router-link>
            <router-link to="/develop/changelog">开发文档</router-link>
            <router-link to="/component/uni">小程序/H5</router-link>
            <router-link to="/component/rn">手机 APP</router-link>
            <router-link to="/component/pc">桌面 PC</router-link>
          </div>
        </div>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      menuBreadOpen: false,
    };
  },
  methods: {
    toggleMenuBread() {
      this.menuBreadOpen = !this.menuBreadOpen;
    },
    closeMenuBread() {
      this.menuBreadOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 70px;
}
.nav-bar__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  z-index: 9;
  .content {
    display: flex;
    justify-content: space-between;
    .logo {
      margin: 20px 30px;
      height: 30px;
      a {
        display: inline-block;
      }
    }
    .menu-bread {
      display: none;
      position: absolute;
      right: 0;
      top: 0;
      width: 60px;
      height: 60px;
      cursor: pointer;
      .bread-icon {
        width: 20px;
        height: 2px;
        background-color: #444;
        position: absolute;
        left: 20px;
        top: 30px;
        transition: opacity 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), transform 0.4s cubic-bezier(0.52, 0.16, 0.24, 1);
        &.top {
          top: 24px;
        }
        &.bottom {
          top: 36px;
        }
      }
    }
    &.menu-bread-open {
      .menu {
        height: 100%;
        opacity: 1;
      }
      .menu-bread .bread-icon {
        &.top {
          transform: translate3d(0, -10px, 0);
          opacity: 0;
        }
        &.left {
          transform: rotate(45deg);
        }
        &.right {
          transform: rotate(-45deg);
        }
        &.bottom {
          transform: translate3d(0, 10px, 0);
          opacity: 0;
        }
      }
    }
    .menu {
      display: flex;
      align-items: center;
      margin: 20px 0;
      height: 30px;
      a {
        display: inline-flex;
        line-height: 30px;
        padding: 20px 30px;
        color: #333;
        position: relative;
        transition: all 0.4s;
        overflow: hidden;
        &:before {
          content: "";
          position: absolute;
          top: -3px;
          left: 30px;
          right: 30px;
          height: 3px;
          background-color: #0d6eff;
          transition: all 0.4s;
        }
        &:hover {
          color: #0d6eff;
        }
        &.router-link-active {
          color: #0d6eff;
          &:before {
            top: 0;
          }
        }
      }
    }
  }
}
@media (max-width: 980px) {
  .nav-bar {
    height: 60px;
  }
}
@media (min-width: 768px) and (max-width: 980px) {
  .nav-bar__wrapper {
    .logo {
      margin: 15px !important;
    }
    .menu {
      margin: 15px 0 !important;
      a {
        padding: 15px !important;
        &:before {
          left: 15px !important;
          right: 15px !important;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .logo {
    margin: 15px auto !important;
  }
  .nav-bar__wrapper {
    .content .menu {
      display: block !important;
      position: fixed;
      background-color: #fff;
      top: 60px;
      left: 0;
      right: 0;
      margin: 0;
      height: 0;
      overflow: hidden;
      opacity: 0;
      transition: all 0.3s;
      a {
        display: block;
        border-bottom: 1px solid #eee;
        padding: 10px 20px;
        margin: 0 20px;
        &:before {
          left: -3px;
          right: auto;
          height: 100%;
          width: 3px;
          transition: all 0.3s 0.5s;
        }
        &.router-link-active {
          &:before {
            left: 0;
          }
        }
      }
    }
    .menu-bread {
      display: inline-block !important;
    }
  }
}
</style>
