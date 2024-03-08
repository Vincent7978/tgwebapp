<script setup lang="ts">
import { Cell, CellGroup, Switch } from 'vant';
import { ref } from 'vue'

const checked = ref(true);
</script>

<template>
  <div class="tab-warp">
  <CellGroup class="temp">
    <Cell title="开课中" >
      <template #right-icon>
        <Switch v-model="checked"/>
      </template>
    </Cell>
    <Cell title="单元格" value="内容" label="描述信息" />
  </CellGroup>
  </div>
</template>

<style scoped>
.temp{
  margin-top: 10px;
}
</style>