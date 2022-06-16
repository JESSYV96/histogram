<template>
  <div class="histogram">
    <div v-for="(itemData, index) in occurencesNumber" :key="index">
      <BarItemVue :number="itemData[0]" :occurences="itemData[1]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { numberArray } from "@/data";
import { getOcurrenceNumber } from "@/helpers/Histogram";
import BarItemVue from "@/components/BarItemVue.vue";

const occurencesNumber = [...getOcurrenceNumber(numberArray)].sort();
</script>

<style lang="scss" scoped>
.histogram {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
</style>
