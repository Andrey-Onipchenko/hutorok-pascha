<template>
  <div class="page-winners">
    <div class="container">
      <h3 class="page-winners__title">Наші переможці</h3>
      <!-- 21.04.21 -->
      <p class="page-winners__subtitle">Розіграш від 21.04.21</p>
      <video class="page-winners__video" loop="" controls="">
        <source src="../assets/video/21_04.mp4" type="video/mp4" />
      </video>
      <ul class="page-winners__list">
        <li class="page-winners__item">1. - 1170 - Олег +38(068)85237**</li>
        <li class="page-winners__item">2. - 703 - Людмила +38(050)64501**</li>
        <li class="page-winners__item">3. - 3089 - Інна +38(068)22414**</li>
        <li class="page-winners__item">4. - 2952 - Марія +38(068)32388**</li>
        <li class="page-winners__item">5. - 3342 - Оксана +38(096)23935**</li>
        <li class="page-winners__item">6. - 1415 - Олена +38(098)95683**</li>
        <li class="page-winners__item">7. - 3405 - Вікторія +38(067)44217**</li>
        <li class="page-winners__item">8. - 2282 - Таня +38(099)05774**</li>
        <li class="page-winners__item">9. - 3113 - Алексей +38(099)43805**</li>
        <li class="page-winners__item">10. - 69 - Надія +38(068)72740**</li>
      </ul>
      <!-- 21.04.21 /2 -->
      <p class="page-winners__subtitle">
        Організатор Акції не зміг зв’язатись з переможцем «- 3342 - Оксана»,
        тому додатково визначаємо переможця
      </p>
      <video class="page-winners__video" loop="" controls="">
        <source src="../assets/video/21_04_2.mp4" type="video/mp4" />
      </video>
      <ul class="page-winners__list">
        <li class="page-winners__item">1. – 3281 – Вікторія +38(097)82970**</li>
      </ul>
      <!--28.04.21  -->
      <p class="page-winners__subtitle">Розіграш від 28.04.21</p>
      <video class="page-winners__video" loop="" controls="">
        <source src="../assets/video/28_04.mp4" type="video/mp4" />
      </video>
      <ul class="page-winners__list">
        <li class="page-winners__item">1. - 287 - Валентина +38(096)45572**</li>
        <li class="page-winners__item">2. - 165 - Алиса +38(063)21481**</li>
        <li class="page-winners__item">3. - 633 - Наталія +38(097)71761**</li>
        <li class="page-winners__item">4. - 1619 - Юля +38(098)38098**</li>
        <li class="page-winners__item">5. - 144 - Алексей +38(099)94253**</li>
        <li class="page-winners__item">6. - 308 - Юлія +38(050)61606**</li>
        <li class="page-winners__item">7. - 219 - Крістіна +38(066)71985**</li>
        <li class="page-winners__item">8. - 1631 - Люда +38(063)92386**</li>
        <li class="page-winners__item">
          9. - 1201 - Іваненко Анна +38(066)18539**
        </li>
        <li class="page-winners__item">10. - 1354 - Елена +38(095)64622**</li>
      </ul>
      <!-- winner -->
      <p class="page-winners__subtitle">
        Розіграш Головного призу від 28.04.21
      </p>
      <video class="page-winners__video" loop="" controls="">
        <source src="../assets/video/28_04_2.mp4" type="video/mp4" />
      </video>
      <ul class="page-winners__list">
        <li class="page-winners__item">1. - 4353 - Зоряна +38(096)47844**</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    const home = document.querySelector(".nav__home");
    home.style.display = "inline-block";
    home.style.background = "#C1E7D8";
    const rules = document.querySelector(".nav__rules");
    rules.style.background = "transparent";
  },
};
</script>

<style lang="scss" scoped>
.page-winners {
  padding: 100px 0 30px;
  min-height: 100vh;
  height: 100%;
  font-family: "Chalkboard SE", sans-serif;
  text-align: center;
  @media (max-width: 1360px) {
    padding: 60px 0 30px;
  }
  @media (max-width: 600px) {
    padding: 30px 0;
  }
  &__title {
    font-size: 24px;
    margin: 10px 0 0;
  }
  &__subtitle {
    padding: 20px 0;
    font-size: 18px;
  }
  &__video {
    max-width: 800px;
    width: 100%;
    margin-bottom: 15px;
  }
  &__list {
    max-width: 350px;
    font-size: 18px;
    margin: 0 auto;
    text-align: left;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
}
</style>
