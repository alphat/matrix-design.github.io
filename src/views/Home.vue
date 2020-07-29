<template>
  <main>
    <div class="banner">
      <div class="content">
        <h2>Matrix Desgin</h2>
        <h3>汇付前端组件库</h3>
        <p>追求极致的用户体验，做最便捷的组件库</p>
        <div class="btns">
          <router-link to="/design/base">开始使用</router-link>
        </div>
      </div>
    </div>
    <div class="features">
      <div class="content">
        <div class="feature">
          <div class="img" />
          <h5>标准性</h5>
          <p>
            为前端开发提供了一套标准的指南，提升开发效率、节约成本，使不同的开发人员根据标准制作出统一的页面
          </p>
        </div>
        <div class="feature">
          <div class="img" />
          <h5>组合性</h5>
          <p>
            前端页面一般都是由组件之间组合而成，Matrix 很好的满足了前端开发过程中不同组件之间的组合、嵌套的问题
          </p>
        </div>
        <div class="feature">
          <div class="img" />
          <h5>可维护性</h5>
          <p>
            任何一个组件应该都具有一套自己的完整的稳定的功能，与其他组件无关的逻辑，使其更加容易理解，同时大大减少发生bug的几率
          </p>
        </div>
      </div>
    </div>
    <div class="cases">
      <h4>案例展示</h4>
      <h5>Matirx 现已应用在 太山、教育小程序、医美小程序 等项目中</h5>
      <div class="pic-img" />
      <div class="mobile-img">
        <img src="https://cdn.cloudpnr.com/miniapp/matrix/website/case1.png" />
        <img src="https://cdn.cloudpnr.com/miniapp/matrix/website/case2.png" />
        <img src="https://cdn.cloudpnr.com/miniapp/matrix/website/case3.png" />
        <img src="https://cdn.cloudpnr.com/miniapp/matrix/website/case4.png" />
        <img src="https://cdn.cloudpnr.com/miniapp/matrix/website/case5.png" />
      </div>
    </div>
    <div class="team">
      <h4>团队介绍</h4>
      <h5>
        Matrix 由
        <strong>研发中心 - 用户体验与移动开发部</strong>制作与维护
      </h5>
      <img class="img" src="https://cdn.cloudpnr.com/miniapp/matrix/website/team.svg" />
    </div>
    <div class="footer">
      <div class="content">
        <img src="https://cdn.cloudpnr.com/miniapp/huifusite/huifu-logo.png" />
        <span>Copyright © 2020 上海汇付数据服务有限公司</span>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.banner {
  background-image: linear-gradient(#1a43ca, #4abaff);
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 550px;
    background: url("https://cdn.cloudpnr.com/miniapp/matrix/website/home-banner.svg") no-repeat center;
    h2,
    h3,
    p {
      line-height: 1;
      margin: 0;
      font-weight: 400;
      margin-bottom: 15px;
    }
    h2 {
      margin-top: 20px;
      font-size: 32px;
      letter-spacing: 9px;
      margin-left: 9px;
    }
    h3 {
      font-size: 40px;
      letter-spacing: 6px;
      margin-left: 6px;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 1.5px;
      margin-bottom: 40px;
    }
    .btns {
      width: 315px;
      display: flex;
      justify-content: space-between;
      a {
        display: flex;
        width: 60%;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        border: 1px solid #fff;
        background: #fff;
        color: #0d6eff;
        height: 38px;
        border: 1px solid #fff;
        border-radius: 48px;
        font-size: 16px;
        transition: all 0.1s;
        &:hover {
          transform: translateY(-1px);
          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
        }
        &:active {
          transform: translateY(0);
          box-shadow: none;
        }
      }
    }
  }
}
.features {
  .content {
    width: 980px;
    padding: 100px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .feature {
      width: 250px;
      .img {
        width: 220px;
        height: 220px;
        background-size: cover;
        margin: 0 auto;
      }
      &:nth-child(1) .img {
        background-image: url("https://cdn.cloudpnr.com/miniapp/matrix/website/feature-1.png");
      }
      &:nth-child(2) .img {
        background-image: url("https://cdn.cloudpnr.com/miniapp/matrix/website/feature-2.png");
      }
      &:nth-child(3) .img {
        background-image: url("https://cdn.cloudpnr.com/miniapp/matrix/website/feature-3.png");
      }
      h5 {
        font-size: 20px;
        color: #333444;
        margin-bottom: 20px;
        text-align: center;
      }
      p {
        font-size: 14px;
        color: #5e6e7d;
        line-height: 20px;
        text-align: justify;
      }
    }
  }
}
.cases {
  background-color: #f4f6fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  .pic-img {
    width: 962px;
    height: 289px;
    background: url("https://cdn.cloudpnr.com/miniapp/matrix/website/case-bg.png") no-repeat center;
    background-size: cover;
  }
  .mobile-img img {
    display: block;
    margin: 0 auto 50px;
    width: 80%;
    &:last-child {
      margin-bottom: 30px;
    }
  }
}
.cases,
.team {
  padding: 100px 0;
  h4 {
    font-size: 30px;
    color: #333444;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
  }
  h5 {
    font-size: 14px;
    color: #5e6e7d;
    line-height: 20px;
    font-weight: normal;
    margin-bottom: 50px;
  }
  .pic-img {
    display: inline-block;
  }
  .mobile-img {
    display: none;
  }
}
.team {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (max-width: 980px) {
  .features {
    .content {
      width: auto;
      flex-direction: column;
      padding: 0;
      padding-top: 50px;
      .feature {
        margin-bottom: 50px;
      }
    }
  }
  .pic-img {
    display: none !important;
  }
  .mobile-img {
    display: inline-block !important;
  }
  .team {
    .img {
      width: 100% !important;
    }
  }
}
</style>
