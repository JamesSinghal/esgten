<template>
    <div class="grad-bg absolute">
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
  position: fixed;
  margin-left: 12vw;
  width: 88vw;
  height: 100%;
  z-index: -10;
}

.grad-bg > div {
  width: 100%;
  height: 100%;
}
</style>
