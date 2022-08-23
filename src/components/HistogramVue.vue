<template>
  <div class="container">
    <input v-model.lazy="numberListLength" type="number" name="numberListLength" />
    <div class="histogram">
      <div v-for="(itemData, index) in occurencesNumber" :key="index">
        <BarItemVue :number="itemData[0]" :occurences="itemData[1]" />
      </div>
    </div>
    <button @click.prevent="() => getNumbersListHandler(numberListLength)"> Fetch numbers </button>
  </div>

</template>

<script lang="ts" setup>
import { ref, reactive, onUpdated } from "vue";

import { getOcurrenceNumber } from "@/helpers/Histogram";
import BarItemVue from "@/components/BarItemVue.vue";
import { fetchNumbersList } from "@/services/HistogramService";

const numberListLength = ref(100) 

const numberList = reactive<{numbers: string[]}>({ numbers: await fetchNumbersList(numberListLength.value) })
const occurencesNumber = ref<[string, number][]>([...getOcurrenceNumber(numberList.numbers)].sort());


const getNumbersListHandler = async (numberListLength: number): Promise<void> => {
  numberList.numbers = [...await fetchNumbersList(numberListLength)]
  occurencesNumber.value = [...getOcurrenceNumber(numberList.numbers)].sort()
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .histogram {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
}

</style>
