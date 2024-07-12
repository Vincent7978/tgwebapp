<script setup lang="ts">
import {Image} from 'vant'
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'
]
</script>

<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="4000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <Image :src="image" alt="" fit="cover" style="height: 288px;"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style scoped>

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

.warp{
  height: 288px;
  background: #2c3e50;
}

</style>