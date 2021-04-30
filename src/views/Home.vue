<template>
  <div class="home">
    <img
      class="home-mobile__left"
      src="../assets/img/home/home_mobile-left.png"
      alt=""
    />
    <img
      class="home-mobile__bottom-left"
      src="../assets/img/home/home_mobile-bottom-left.png"
      alt=""
    />
    <img
      class="home-mobile__bottom-right"
      src="../assets/img/home/home_mobile-bottom-right.png"
      alt=""
    />
    <div class="home__wrap">
      <div class="home-left">
        <img
          class="home-left__img-center"
          src="../assets/img/home/home_left.png"
          alt=""
        />
        <img
          class="home-left__img-bottom"
          src="../assets/img/home/home_left-bottom.png"
          alt=""
        />
        <div class="promo">
          <div class="promo__text">
            Смачний Великдень з
            <a
              href="https://foodsales.com.ua/search?search=%D1%85%D1%83%D1%82%D0%BE%D1%80%D0%BE%D0%BA+ "
              ><img class="promo__logo" src="../assets/img/logo.png" alt=""
            /></a>
          </div>
        </div>
        <p class="home-left__text">
          Збирай смачну Великодню паску та вигравай щотижня кошик смаколиків від
          ТМ “Хуторок”,
          <span class="home-left__text-mobile">
            а 28 квітня <span class="bold">головний приз – хлібопіч</span> для
            приготування найсмачнішої випічки</span
          >
        </p>
        <ul class="home-rules">
          <li class="home-rules__item">
            <span class="home-rules__bg"> </span>
            <span class="home-rules__num">1</span>
            <span class="home-rules__text">Збирай паску до Великодня</span>
          </li>
          <li class="home-rules__item">
            <span class="home-rules__bg"> </span>
            <span class="home-rules__num">2</span>
            <span class="home-rules__text"
              >Реєструйся та вигравай подарунки
            </span>
          </li>
        </ul>
        <router-link to="/game">
          <span class="btn" @click="gtagPlay">грати</span>
        </router-link>
      </div>
      <div class="home-right">
        <img
          class="home-right__img-top"
          src="../assets/img/home/home_right-top.png"
          alt=""
        />
        <img
          class="home-right__img"
          src="../assets/img/home/home_right.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      phone: "",
    };
  },
  mounted: function () {
    const home = document.querySelector(".nav__home");
    const rules = document.querySelector(".nav__rules");
    home.style.display = "none";
    rules.style.background = "#C1E7D8";
  },
  methods: {
    gtagPlay() {
      this.$gtag.event("click", {
        event_category: "pascha",
        event_label: "start_game",
      });
    },
    sub() {
      axios
        .post("https://back-sp.umh.com.ua/api/hutorok/easter/new", {
          name: this.name,
          phone: this.phone,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped lang="scss">
.promo {
  &__text {
    font-family: "Georgia", sans-serif;
    font-weight: bold;
    font-size: 72px;
    line-height: 110.4%;
    position: relative;
    display: inline;
    @media (max-width: 1680px) {
      font-size: 60px;
    }
    @media (max-width: 1366px) {
      font-size: 48px;
    }
    @media (max-width: 1024px) {
      font-size: 60px;
      line-height: 110.4%;
      margin-bottom: 25px;
    }
    @media (max-width: 600px) {
      font-size: 26px;
    }
  }
  &__logo {
    content: "";
    position: absolute;
    width: 215px;
    height: 135px;
    background: url("../assets/img/logo.png") no-repeat;
    background-size: contain;
    bottom: 0;
    left: 105%;
    z-index: 2;

    @media (max-width: 1366px) {
      width: 170px;
      height: 110px;
    }
    @media (max-width: 1024px) {
      width: 150px;
      height: 100px;
      right: 0;
      left: 0;
      bottom: -100px;
      margin: 0 auto;
    }
    @media (max-width: 600px) {
      width: 92px;
      height: 58px;
      bottom: -60px;
    }
  }
}
.home-mobile {
  &__left {
    display: none;
    @media (max-width: 1024px) {
      display: block;
      position: absolute;
      left: 0;
      top: 18%;
      width: 10%;
    }
    @media (max-width: 600px) {
      width: initial;
      top: 12%;
    }
  }
  &__bottom-left {
    display: none;
    @media (max-width: 1024px) {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 35%;
    }
    @media (max-width: 600px) {
      width: initial;
    }
  }
  &__bottom-right {
    display: none;
    @media (max-width: 1024px) {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 45%;
    }
    @media (max-width: 600px) {
      width: initial;
    }
  }
}
.home {
  background: #fff url("../assets/img/home__bg.png") no-repeat;
  background-size: contain;
  overflow: hidden;
  @media (max-width: 1024px) {
    background: none;
  }
  &__wrap {
    display: flex;
  }
}
.home-left {
  padding: 10% 0 0 190px;
  height: 100vh;
  width: 42vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  @media (max-width: 1680px) {
    padding: 9% 0 0 150px;
  }
  @media (max-width: 1366px) {
    padding: 7% 0 0 110px;
  }
  @media (max-width: 1024px) {
    padding: 80px 0 0;
    width: 100vw;
    text-align: center;
    height: 75vh;
  }
  @media (max-width: 600px) {
    padding: 35px 0 0;
    height: 70vh;
  }
  &__text {
    font-size: 24px;
    line-height: 29px;
    max-width: 580px;
    @media (max-width: 1680px) {
      font-size: 23px;
    }
    @media (max-width: 1366px) {
      font-size: 17px;
    }
    @media (max-width: 1024px) {
      font-size: 24px;
      line-height: 35px;

      background: url("../assets/img/home/home_mobile-text.png") no-repeat;
      background-size: contain;
      background-position: center center;
      height: 30vh;
      width: 100%;
      margin: 0 auto;
      padding: 10% 10px 0;
    }
    @media (max-width: 600px) {
      font-size: 14px;
      line-height: 17px;
      width: 305px;
      height: 175px;
      padding: 50px 10px 0;
    }
    &-mobile {
      @media (max-width: 1024px) {
        display: block;
      }
    }
  }
  &__img {
    &-center {
      position: absolute;
      top: 31%;
      left: 0;
      @media (max-width: 1680px) {
        max-width: 180px;
      }
      @media (max-width: 1366px) {
        max-width: 125px;
      }
      @media (max-width: 1024px) {
        display: none;
      }
    }
    &-bottom {
      position: absolute;
      bottom: 0;
      left: 18%;
      @media (max-width: 1680px) {
        max-width: 320px;
      }
      @media (max-width: 1680px) {
        max-width: 16%;
      }
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
}
.home-rules {
  &__item {
    display: flex;
    align-items: center;
    position: relative;
    &:nth-child(1) {
      margin-bottom: 15px;
    }
    @media (max-width: 1024px) {
      max-width: 50%;
      margin: 0 auto;
    }
    @media (max-width: 600px) {
      max-width: 265px;
    }
  }
  &__bg {
    background: rgba(193, 231, 216, 1);
    border-radius: 50%;
    width: 70px;
    height: 70px;
    position: relative;
    filter: blur(15px);
    @media (max-width: 1680px) {
      width: 40px;
      height: 40px;
    }
    @media (max-width: 1024px) {
      width: 70px;
      height: 70px;
    }
    @media (max-width: 600px) {
      width: 40px;
      height: 40px;
    }
  }
  &__num {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    line-height: 29px;
    @media (max-width: 1680px) {
      width: 40px;
      height: 40px;
      @media (max-width: 1024px) {
        width: 70px;
        height: 70px;
      }
      @media (max-width: 600px) {
        width: 40px;
        height: 40px;
      }
    }
  }
  &__text {
    padding-left: 25px;
    font-size: 18px;
    line-height: 22px;
    @media (max-width: 1024px) {
      padding-left: 15px;
      font-size: 16px;
      line-height: 20px;
      text-align: left;
    }
    @media (max-width: 600px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
}
.home-right {
  height: 100vh;
  width: 58vw;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  @media (max-width: 1280px) {
    align-items: center;
  }
  @media (max-width: 1024px) {
    display: none;
  }
  &__img {
    max-width: 100%;
    @media (max-width: 1680px) {
      max-width: 95%;
    }
    @media (max-width: 1366px) {
      max-width: 80%;
    }
  }
  &__img-top {
    position: absolute;
    top: 0;
    right: 0;
    @media (max-width: 1366px) {
      max-width: 35%;
    }
  }
}
</style>
