<template>
  <div ref="toast" class="toast">
    <p class="toast__text">Ви помилилися, спробуйте ще раз</p>
  </div>
  <img
    class="game-top-bg"
    style="position: absolute; z-index: 0; max-width: 45vw"
    src="../assets/img/game-left_bg.png"
    alt=""
  />
  <img
    class="game-img__top"
    src="../assets/img/game/game_left-top.png"
    alt=""
  />
  <img
    class="game-img__bottom"
    src="../assets/img/game/game_left-bottom.png"
    alt=""
  />
  <div v-if="stage === 'game'" class="game">
    <div class="game-left">
      <div class="game__top">
        <h1 class="title">Смачний Великдень з</h1>
        <a
          href="https://foodsales.com.ua/search?search=%D1%85%D1%83%D1%82%D0%BE%D1%80%D0%BE%D0%BA+"
          ><img class="logo" src="../assets/img/logo.png" alt="logo"
        /></a>
      </div>
      <div class="game__play">
        <div ref="dataSteap" class="game-frame" data-steap="0">
          <div
            class="game-frame__flow"
            v-for="(ar, index) in arrStapOne.slice(0, 5)"
            v-bind:key="index"
          >
            <div class="game-frame__item">
              <img
                @click="getIngridien($event)"
                class="game-frame__img"
                :src="ar.src"
                :dataingridien="ar.name"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="game-progress">
          <div class="game-progress__item">
            <div class="game-progress__bg">
              <img src="../assets/img/progress/progress_1.png" alt="" />
            </div>
            <p>
              <span>{{ piecesEaster }}</span
              >/<span>12</span>
            </p>
          </div>

          <div class="game-progress__item">
            <div class="game-progress__bg">
              <img src="../assets/img/progress/progress_2.png" alt="" />
            </div>
            <p>
              <span>{{ raisins }}</span
              >/<span>2</span>
            </p>
          </div>
          <div class="game-progress__item">
            <div class="game-progress__bg">
              <img src="../assets/img/progress/progress_3.png" alt="" />
            </div>
            <p>
              <span>{{ cashew }}</span
              >/<span>2</span>
            </p>
          </div>
          <div class="game-progress__item">
            <div class="game-progress__bg">
              <img src="../assets/img/progress/progress_4.png" alt="" />
            </div>
            <p>
              <span>{{ walnut }}</span
              >/<span>2</span>
            </p>
          </div>
          <div class="game-progress__item">
            <div class="game-progress__bg">
              <img src="../assets/img/progress/progress_5.png" alt="" />
            </div>
            <p>
              <span>{{ apricots }}</span
              >/<span>2</span>
            </p>
          </div>
          <div class="game-progress__item">
            <div class="game-progress__bg">
              <img src="../assets/img/progress/progress_6.png" alt="" />
            </div>
            <p>
              <span>{{ almond }}</span
              >/<span>2</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="game-right">
      <div class="game-right__wrap">
        <div class="timer">
          <p class="timer__text">{{ stageText }}</p>
          <div class="timer__count">
            <div class="timer__count-num">{{ minutes }}:{{ second }}</div>
            <div class="timer__count-text">хвилин секунд</div>
          </div>
        </div>
        <div class="game-easter">
          <img
            class="game-easter__img"
            ref="easterSteap"
            src="https://pascha.smak.ua/easter/steap/steap_1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <GameSuccess v-else-if="stage === 'success'" />
</template>

<script>
import GameSuccess from "@/components/GameSuccess.vue";
export default {
  name: "Game",
  components: { GameSuccess },
  data() {
    return {
      stage: "game",
      arrStapOne: this.$store.state["stap_1"],
      arrStapTwo: this.$store.state["stap_2"],
      piecesEaster: 0,
      raisins: 0,
      cashew: 0,
      walnut: 0,
      apricots: 0,
      almond: 0,
      stageTwo: 0,
      second: 59,
      minutes: 1,
      stageText: "Спіймай всі шматочки щоб зібрати паску",
      trueIngridien: [
        "easter",
        "raisins",
        "cashew",
        "walnut",
        "apricots",
        "almond",
      ],
    };
  },
  mounted: function () {
    this.animations();
    this.timer();
    const home = document.querySelector(".nav__home");
    home.style.display = "inline-block";
    home.style.background = "#C1E7D8";
    const rules = document.querySelector(".nav__rules");
    rules.style.background = "transparent";
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  },
  methods: {
    steap(easter, nextSteap) {
      easter.style.opacity = "0";
      setTimeout(() => {
        easter.src = `https://pascha.smak.ua/easter/steap/steap_${nextSteap}.png`;
        easter.style.opacity = "1";
      }, 500);
    },
    getIngridien(event) {
      // event.target.src = "";
      event.target.style.display = "none";
      const easter = this.$refs.easterSteap;
      let nameIngridien = event.target.getAttribute("dataingridien");

      if (!this.trueIngridien.includes(nameIngridien)) {
        this.$refs.toast.classList.remove("toast_active");
        this.$refs.toast.classList.add("toast_active");
        let removeIndex = () => {
          this.$refs.toast.classList.remove("toast_active");
          clearTimeout(removeIndex);
        };
        setTimeout(removeIndex, 500);
      }

      if (nameIngridien === "easter" && this.piecesEaster < 12) {
        this.piecesEaster += 1;
        this.$refs.dataSteap.setAttribute("data-steap", this.piecesEaster);
        switch (this.piecesEaster) {
          case 4:
            this.steap(easter, 2);
            break;
          case 8:
            this.steap(easter, 3);
            break;
          case 12:
            this.steap(easter, 4);
            break;
        }
      } else if (nameIngridien === "raisins" && this.raisins < 2) {
        this.stageTwo += 1;
        this.raisins += 1;
      } else if (nameIngridien === "cashew" && this.cashew < 2) {
        this.stageTwo += 1;
        this.cashew += 1;
      } else if (nameIngridien === "walnut" && this.walnut < 2) {
        this.stageTwo += 1;
        this.walnut += 1;
      } else if (nameIngridien === "apricots" && this.apricots < 2) {
        this.stageTwo += 1;
        this.apricots += 1;
      } else if (nameIngridien === "almond" && this.almond < 2) {
        this.stageTwo += 1;
        this.almond += 1;
      }
      if (this.piecesEaster === 12) {
        this.stageText = "Час прикрашати паску";
      }

      switch (this.stageTwo) {
        case 3:
          this.steap(easter, 5);
          break;
        case 6:
          this.steap(easter, 6);
          break;
        case 10:
          this.steap(easter, 7);
          setTimeout(() => {
            this.stage = "success";
          }, 2000);
          break;
      }
    },
    randomNumberInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    timer() {
      let inter = setInterval(() => {
        if (this.$router.currentRoute._rawValue.fullPath != "/game") {
          clearInterval(inter);
        }
        if (this.stageTwo === 10) {
          clearInterval(inter);
        } else {
          if (this.second === 0) {
            if (this.minutes > 0) {
              this.second = 59;
              this.minutes = 0;
            } else {
              this.$router.push("/game/gameover");
              // this.stage = "success";
              clearInterval(inter);
            }
          } else {
            this.second = this.second - 1;
          }
        }
      }, 1000);
    },
    animations() {
      const images = document.querySelectorAll(".game-frame__item");
      images.forEach((img, index) => {
        let startIndex = index;
        let num = this.randomNumberInRange(
          this.randomNumberInRange(5, 8),
          this.randomNumberInRange(11, 13)
        );
        img.style.animationDuration = `${num}s`;
        img.style.transition = `all ${num}s ease-in-out`;
        img.style.animationIterationCount = "infinite";
        setInterval(() => {
          if (startIndex + 5 >= this.arrStapOne.length) {
            startIndex = index;
          } else {
            startIndex += 5;
          }
          const ingredient = img.querySelector(".game-frame__img");
          if (this.piecesEaster >= 12) {
            ingredient.style.display = "block";
            ingredient.src = this.arrStapTwo[startIndex].src;
            ingredient.setAttribute(
              "dataIngridien",
              this.arrStapTwo[startIndex].name
            );
          } else {
            ingredient.style.display = "block";
            ingredient.src = this.arrStapOne[startIndex].src;
            ingredient.setAttribute(
              "dataIngridien",
              this.arrStapOne[startIndex].name
            );
          }
        }, num * 1000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.game-top-bg {
  @media (max-width: 1024px) {
    display: none;
  }
}
.game-img {
  &__top {
    position: absolute;
    top: 0;
    right: 0;
    @media (max-width: 1680px) {
      max-width: 17%;
    }
    @media (max-width: 1366px) {
      max-width: 12%;
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }
  &__bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    @media (max-width: 1680px) {
      max-width: 205px;
    }
    @media (max-width: 1680px) {
      max-width: 150px;
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }
}
.game {
  // overflow: hidden;
  min-width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    background: none;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
  &__top {
    padding: 20px 0 0 20px;
    display: flex;
    align-items: flex-end;
    @media (max-width: 1024px) {
      position: fixed;
      top: 50px;
    }
    @media (max-width: 600px) {
      position: absolute;
      top: 20px;
    }
  }
  &__play {
    width: 100%;
    height: 60vh;
    @media (max-width: 1440px) {
      height: 57vh;
    }
    @media (max-width: 1024px) {
      height: 30vh;
    }
    @media (max-width: 375px) and (min-height: 800px) {
      height: 35vh;
    }
  }
}
.game-left {
  max-width: 55vw;
  width: 100%;
  position: relative;
  @media (max-width: 1024px) {
    max-width: 100vw;
  }
  @media (max-width: 600px) {
    position: initial;
  }
}
.game-right {
  background: url("../assets/img/game/game_bg.png") no-repeat;
  background-size: contain;
  background-position: center right;
  max-width: 45vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    max-width: 100vw;
    padding-top: 180px;
    background: none;
    margin-top: -50px;
  }
  @media (max-width: 600px) {
    padding-top: 110px;
    margin-top: 0;
  }
  &__wrap {
    width: 100%;
    height: 58vh;
    @media (max-width: 1366px) {
      height: 70vh;
    }
    @media (max-width: 1280px) {
      height: 63vh;
    }
    @media (max-width: 1024px) {
      display: flex;
      height: 40vh;
    }
    @media (max-width: 600px) {
      display: flex;
      height: 35vh;
    }
    @media (max-width: 375px) {
      height: 30vh;
    }
  }
}
.game-frame {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  height: 100%;
  &__flow {
    width: 100%;
    position: relative;
  }
  &__item {
    position: absolute;
    top: -50%;
    animation-name: anim;
  }

  &__img {
    cursor: pointer;
    outline: transparent;
    background: transparent;
    @media (max-width: 1366px) {
      max-width: 75%;
    }
    @media (max-width: 1024px) {
      max-width: 100px;
    }
    @media (max-width: 600px) {
      max-width: 50px;
    }

    &:focus {
      outline: transparent;
      background: transparent;
    }
  }
}
.game-progress {
  display: flex;
  justify-content: space-between;
  &__item {
    text-align: center;
  }
  &__bg {
    width: 150px;
    height: 150px;
    background: url("../assets/img/game-progress_not.png") no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1366px) {
      width: 120px;
      height: 105px;
      background-size: contain;
      img {
        max-width: 60px;
        max-height: 50px;
      }
    }
    @media (max-width: 1024px) {
      width: 96px;
      height: 90px;
      background-size: contain;
      img {
        max-width: 75px;
        max-height: 46px;
      }
    }
    @media (max-width: 600px) {
      width: 46px;
      height: 40px;
      background-size: contain;
      img {
        max-width: 35px;
        max-height: 16px;
      }
    }
  }
  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #68b194;
    @media (max-width: 1366px) {
      font-size: 18px;
      line-height: 22px;
    }
    @media (max-width: 1366px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
}
.timer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1366px) {
    justify-content: flex-end;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    width: 100%;
    align-items: center;
  }
  @media (max-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__text {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    max-width: 435px;
    margin-right: 20px;
    @media (max-width: 1680px) {
      font-size: 30px;
      max-width: 360px;
    }
    @media (max-width: 1440px) {
      font-size: 24px;
      max-width: 290px;
      line-height: 32px;
    }
    @media (max-width: 1366px) {
      font-size: 20px;
      max-width: 240px;
      line-height: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 34px;
      line-height: 46px;
      max-width: 305px;
    }
    @media (max-width: 600px) {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 15px;
    }
  }
  &__count {
    max-width: 280px;
    width: 100%;
    height: 110px;
    background: #fff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 30px;
    @media (max-width: 1680px) {
      max-width: 235px;
      height: 80px;
    }
    @media (max-width: 1366px) {
      max-width: 190px;
      height: 80px;
    }
    @media (max-width: 1024px) {
      max-width: 150px;
      height: 70px;
    }
    @media (max-width: 1024px) {
      max-width: 125px;
      height: 55px;
      background: #c1e7d8;
      opacity: 0.9;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    }
    &-num {
      font-weight: bold;
      font-size: 48px;
      line-height: 62px;
      @media (max-width: 1366px) {
        font-size: 36px;
        line-height: 48px;
      }
      @media (max-width: 1024px) {
        font-size: 30px;
        line-height: 38px;
      }
      @media (max-width: 1024px) {
        font-size: 24px;
        line-height: 31px;
      }
    }
    &-text {
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      @media (max-width: 1024px) {
        font-size: 12px;
        line-height: 14px;
      }
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
}
.game-easter {
  text-align: center;

  @media (max-width: 1024px) {
    width: 115%;
    background: url("../assets/img/game_mobile-result.png") no-repeat;
    background-size: contain;
    background-position-x: right;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 600px) {
    display: initial;
  }
  &__img {
    transition: 500ms ease-in-out;
    max-width: 440px;
    width: 100%;
    margin-top: 50px;
    @media (max-width: 1680px) {
      max-width: 48%;
      margin-top: 60px;
    }
    @media (max-width: 1366px) {
      max-width: 290px;
      margin-top: 60px;
    }
    @media (max-width: 1280px) {
      max-width: 290px;
      margin-top: 30px;
    }
    @media (max-width: 1024px) {
      max-width: 230px;
      margin-left: 90px;
    }
    @media (max-width: 600px) {
      max-width: 102px;
      margin-top: 20%;
      margin-left: 20px;
    }
    @media (max-width: 375px) {
      margin-left: 30px;
    }
  }
}
.toast {
  display: none;
  position: fixed;
  top: 30px;
  right: 0;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  width: 483px;
  height: 146px;
  justify-content: center;
  align-items: center;
  padding: 35px 40px;
  transition: all 1s ease;
  z-index: -1;
  @media (max-width: 1366px) {
    top: 80px;
  }
  @media (max-width: 1024px) {
    background: rgba(255, 255, 255, 1);
    top: 20px;
    right: 50;
  }
  @media (max-width: 767px) {
    background: rgba(255, 255, 255, 1);
    top: 10px;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 290px;
    padding: 10px 20px;
    height: 70px;
  }
  &_active {
    display: flex;
    z-index: 9;
  }
  &__text {
    font-size: 30px;
    line-height: 38px;
    // color: #69645a;
    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
}
@keyframes anim {
  from {
    top: -50%;
  }

  to {
    top: 100%;
  }
}
</style>
