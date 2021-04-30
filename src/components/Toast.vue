<template>
  <div class="toast">
    <p class="toast__text">Ви помилилися, спробуйте ще раз</p>
  </div>
</template>

<script>
export default {
  name: "Toast",
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 160px;
  right: 0;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 30px;
  width: 483px;
  height: 146px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 40px;
  z-index: -1;
  &__text {
    font-size: 30px;
    line-height: 38px;
    color: #69645a;
  }
}
</style>
