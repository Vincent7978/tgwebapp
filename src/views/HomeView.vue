<script setup>
import { ref } from 'vue';
import { Col, Row, Space, Icon, Popup, Area, Cascader, Search } from 'vant';
import { areaList, useCascaderAreaData } from '@vant/area-data';
import HomeBanner from '@/components/home/HomeBanner.vue'

const areaOption = useCascaderAreaData();
const showArea = ref(false);
const areaChooseCode = ref("110101");
const areaChoose = ref("东城区");
const showAreaPopup = () => {
  showArea.value = true;
};

const areaUpdate = ({ selectedValues, selectedOptions }) => {
  areaChooseCode.value = selectedValues[2];
  areaChoose.value = selectedOptions[2].text;
  showArea.value = false;
}

const areaUpdate11 = ({ value, selectedOptions, tabIndex }) => {
  areaChooseCode.value = value;
  areaChoose.value = selectedOptions[2].text;
  showArea.value = false;
}
// search
const searchValue = ref("");
const onSearch = () => {

}
const onSearchCancel = () => { }

// filter 
const showFilter = ref(false);

</script>

<template>
  <div>
    <!-- <HomeBanner style="height: 288px;"/> -->
    <!-- <Space direction="vertical"> -->
    <!-- https://zhidao.baidu.com/question/57191356.html -->
    <!-- <div style="font-size: 6px;display: inline-block;line-height: 6px;"><div><Icon name="arrow-up"/></div><div><Icon name="arrow-down"/></div></div> -->
    <form action="/">
      <Search v-model="searchValue" placeholder="请输入搜索关键词" @search="onSearch" @cancel="onSearchCancel" />
    </form>
    <Row justify="center" style="background-color: white;text-align: center;padding: 10px 0;">
      <Col span="6" @click="showAreaPopup">{{ areaChoose }}</Col>
      <Col span="6">评分</Col>
      <Col span="6">价格<div style="margin-left: 4px;font-size: 6px;display: inline-block;line-height: 6px;">
        <div>
          <Icon name="arrow-up" />
        </div>
        <div>
          <Icon name="arrow-down" />
        </div>
      </div>
      </Col>
      <Col span="6" @click="showFilter = true">筛选</Col>
    </Row>

    <!-- </Space> -->
    <Popup v-model:show="showArea" position="bottom" teleport="body">

      <Cascader v-model="areaChooseCode" title="请选择所在地区" :options="areaOption" @close="showArea = false"
        @finish="areaUpdate11" />
      <!-- <Area v-model="areaChooseCode" title="地区选择" :area-list="areaList" @confirm="areaUpdate"/> -->
    </Popup>
    <Popup v-model:show="showFilter" position="right" style="width: 80%; height: 100%; padding:16px" teleport="body">
    
    </Popup>

  </div>
</template>

<style scoped>

</style>
