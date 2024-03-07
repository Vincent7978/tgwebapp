<script setup lang="ts">
import {Image} from 'vant'
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'
]
</script>

<template>
  <div class="warp">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <Image :src="image" alt="" fit="contain"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style scoped>

.warp{
  height: 288px;
  background: #2c3e50;
}

</style>