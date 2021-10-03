<template>
    <div class="grad-bg">
      <div class="bg-gradient-to-br from-grad_gray to-grad_blue"></div>
    </div>
</template>

<script>
export default {
  name: "backGrad",
}
</script>

<style>
.grad-bg {
  top: 0;
  position: fixed;
  position: 0, 0;
  margin-left: 12vw;
  width: 100vw;
  height: 100vh;
  z-index: -10;
}

.grad-bg > div {
  width: 100%;
  height: 100%;
}
</style>
