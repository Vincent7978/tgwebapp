<script setup lang="ts">
import { Cell, CellGroup } from 'vant';
</script>

<template>
  <div class="tab-warp">
  <CellGroup inset class="temp">
    <Cell title="单元格" value="内容" />
    <Cell title="单元格" value="内容" label="描述信息" />
  </CellGroup>
  </div>
</template>

<style scoped>
.temp{
  margin-top: 10px;
}
</style>