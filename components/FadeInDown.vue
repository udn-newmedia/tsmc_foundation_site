<template>
  <div class="fadeindown">
    <slot></slot>
  </div>
</template>

<script>
/** 
 * 本元件之功能：
 *  在頁面載入時有下滑之特效 
*/    
export default {
  name: 'fadeindown'
}
</script>

<style>
.fadeindown {
  animation-duration: 1s;
  transition-timing-function: ease-in-out;
  /* transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86); */
  animation-fill-mode: both;
  animation-name: fadeInDown;
}

@media screen and (max-width: 1023px){
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -2.5%, 0);
    }

    100% {
      opacity: 1;
      transform: none;
    }  
  }  
}

@media screen and (min-width: 1024px){
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -5%, 0);
    }

    100% {
      opacity: 1;
      transform: none;
    }  
  }  
}
</style>