<template>
  <div class="histogram">
    <div v-for="(itemData, index) in occurencesNumber" :key="index">
      <BarItemVue :number="itemData[0]" :occurences="itemData[1]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

import { getOcurrenceNumber } from "@/helpers/Histogram";
import BarItemVue from "@/components/BarItemVue.vue";
import { getNumbersList } from "@/services/HistogramService";

const numberList = reactive<{numbers: string[]}>({ numbers: await getNumbersList() })
const occurencesNumber = [...getOcurrenceNumber(numberList.numbers)].sort();
</script>

<style lang="scss" scoped>
.histogram {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
</style>
