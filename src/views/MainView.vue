<script setup lang="ts">
import { ref } from 'vue';
import {Tab,Tabs} from 'vant'
import HomeView from '@/views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import MineView from '@/views/MineView.vue'
const activeTab = ref('home');

</script>

<template>
  <div class="tab-warp">
    <Tabs v-model:active="activeTab" sticky swipeable>
      <Tab title="首页" name="home">
        <HomeView/>
      </Tab>
      <Tab title="工作台" name="work">
        <WorkView/>
      </Tab>
      <Tab title="我的" name="me">
        <MineView/>
      </Tab>
    </Tabs>
  </div>
</template>

<style scoped>

</style>
