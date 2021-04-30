<template>
  <div class="success">
    <img class="success__bg-top" src="../assets/img/success_top.png" alt="" />
    <img class="success__mobile-bg" src="../assets/img/share_left.png" alt="" />
    <img
      class="success__bg-bottom"
      src="../assets/img/success_bottom.png"
      alt=""
    />
    <div class="success__top">
      <h1 class="title title-m__310">Смачний Великдень з</h1>
      <a
        href="https://foodsales.com.ua/search?search=%D1%85%D1%83%D1%82%D0%BE%D1%80%D0%BE%D0%BA+"
        ><img class="logo" src="../assets/img/logo.png" alt="logo"
      /></a>
    </div>
    <div class="success__wrap">
      <div class="success-left">
        <img
          class="success-left__img"
          src="../assets/img/success.png"
          alt="Паска"
        />
      </div>
      <div class="success-right">
        <div class="success-right__message">
          <p class="success-right__message-text">
            <span class="success-right__message-title">Вітаємо!</span>
            Ви вдало зібрали та прикрасили паску
          </p>
        </div>
        <Popup />
        <a
          class="share"
          href="https://www.facebook.com/sharer.php?u=https://pascha.smak.ua/"
          target="_blank"
          @click="gtagShare"
        >
          <!-- <a class="share" href="" @click="gtagShare" > -->
          <img class="share__img" src="../assets/img/fb.png" alt="" />
          <p class="share__text">Поділитися</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Popup from "@/components/Popup.vue";
export default {
  name: "GameSuccess",
  components: {
    Popup,
  },
  mounted() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  },
  methods: {
    gtagShare() {
      this.$gtag.event("click", {
        event_category: "hutorok",
        event_label: "share",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.success {
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  position: relative;
  &__wrap {
    display: flex;
    justify-content: center;
    @media (max-width: 1680px) {
      justify-content: flex-start;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      margin-top: 70px;
    }
    @media (max-width: 600px) {
      margin-top: 0;
    }
  }
  &__bg {
    &-top {
      position: absolute;
      top: 0;
      right: 0;
      @media (max-width: 11024px) {
        max-width: 20%;
      }
      @media (max-width: 1024px) {
        max-width: 25%;
      }
      @media (max-width: 1024px) {
        display: none;
      }
    }
    &-bottom {
      position: absolute;
      bottom: 0;
      right: 0;
      @media (max-width: 1680px) {
        max-width: 20%;
      }
      @media (max-width: 11024px) {
        max-width: 15%;
      }
    }
  }
  &__mobile-bg {
    display: none;
    @media (max-width: 1024px) {
      display: inline-block;
      position: absolute;
      top: 10%;
      left: 0;
    }
  }
}
.success-left {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  @media (max-width: 1440px) {
    max-width: 50%;
  }
  @media (max-width: 1024px) {
    max-width: 100%;
    height: 37vh;
  }
  &__img {
    max-width: 90%;
    @media (max-width: 1680px) {
      max-width: 80%;
    }
    @media (max-width: 1440px) {
      max-width: 75%;
    }
  }
}
.success-right {
  text-align: center;

  &__message {
    background: url("../assets/img/success_text.png") no-repeat;
    background-size: contain;
    max-width: 640px;
    width: 100%;
    height: 410px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1680px) {
      max-width: 600px;
    }
    @media (max-width: 1440px) {
      max-width: 455px;
      height: 290px;
    }
    @media (max-width: 1024px) {
      background: none;
      height: auto;
      margin: 50px auto 0;
    }
    @media (max-width: 360px) {
      margin: 0 auto;
    }
    &-title {
      font-weight: 700;
      display: inline-block;
      width: 100%;
      font-size: 80px;
      line-height: 91px;
      @media (max-width: 1680px) {
        font-size: 72px;
      }
      @media (max-width: 1440px) {
        font-size: 64px;
      }
      @media (max-width: 1024px) {
        font-size: 24px;
        line-height: 27px;
      }
    }
    &-text {
      font-family: "Georgia", sans-serif;
      font-weight: bold;
      font-size: 50px;
      line-height: 60px;
      text-align: center;
      @media (max-width: 1680px) {
        font-size: 44px;
      }
      @media (max-width: 1366px) {
        font-size: 38px;
        line-height: 48px;
      }
      @media (max-width: 1024px) {
        font-size: 24px;
        line-height: 27px;
      }
    }
  }
}
.share {
  &__img {
    @media (max-width: 1024px) {
      width: 31px;
      height: 31px;
    }
  }
  &__text {
    font-family: "Euclid Flex", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #425b96;
    @media (max-width: 1024px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
}
.success__top {
  padding: 20px 0 0 20px;
  display: flex;
  align-items: flex-end;
  position: relative;
  z-index: 1;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 70px 0 0;
  }
  @media (max-width: 600px) {
    padding: 40px 0 0;
  }
}
</style>
