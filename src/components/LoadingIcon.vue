<template>
    <div class="loading-icon" role="progressbar">
        <div class="container">
            <svg viewBox="22 22 44 44">
                <circle fill="none" cx="44" cy="44" r="16" strokeWidth="13" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoadingIcon'
};
</script>

<style scoped>
@keyframes color-switch {
  0% {
    color: #6d1b7b;
  }
  25% {
    color: #ab003c;
  }
  75% {
    color: #ff1744;
  }
}
.loading-icon {
  text-align: center;
  color: #6d1b7b;
  animation: color-switch 4.5s steps(3) infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
.container {
  display: inline-block;
  width: 44px;
  height: 44px;
  margin: 0 auto;
  animation: rotate 1.5s ease-in-out infinite;
}
@keyframes circular-dash {
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dasharray: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -120px;
  }
}
circle {
  stroke: currentColor;
  animation: circular-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
}
</style>