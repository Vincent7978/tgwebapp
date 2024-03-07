<script setup lang="ts">
import { ref } from 'vue';
import {Tab,Tabs} from 'vant'
import HomeBanner from '@/components/home/HomeBanner.vue'
import WorkView from '@/views/WorkView.vue'
import MineView from '@/views/MineView.vue'
const activeTab = ref('home');
</script>

<template>
    <Tabs v-model:active="activeTab" sticky swipeable>
      <Tab title="首页" name="home">
        <HomeBanner/>
      </Tab>
      <Tab title="工作台" name="work">
        <WorkView/>
      </Tab>
      <Tab title="我的" name="me">
        <MineView/>
      </Tab>
    </Tabs>
</template>

sty
