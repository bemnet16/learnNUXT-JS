<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product img" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">
          {{ product.title }}
        </h2>
        <div class="flex justify-between">
          <p class="text-xl my-7">
            Price: {{ convertedPrice }} {{ selectedCurrency }}
          </p>
          <div class="flex gap-4 items-center justify-center">
            <label
              for="currency"
              class="block text-sm font-medium text-gray-700"
            >
              Select Currency
            </label>
            <select
              id="currency"
              v-model="selectedCurrency"
              @change="convertPrice"
              class="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
            >
              <option
                v-for="(value, code) in currencyCodes"
                :key="code"
                :value="value"
              >
                {{ value }}
              </option>
            </select>
          </div>
        </div>

        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const { product } = defineProps(["product"]);
const { data: currencyCodes } = await useFetch("/api/currency/getCodes");

const selectedCurrency = ref("USD");
const convertedPrice = ref(product.price.toFixed(2));

const convertPrice = async () => {
  try {
    const { data: conversionRateRef } = await useFetch(
      `/api/currency/${selectedCurrency.value}`
    );

    const conversionRate = conversionRateRef.value;

    if (conversionRate && !isNaN(parseFloat(conversionRate))) {
      convertedPrice.value = (
        product.price * parseFloat(conversionRate)
      ).toFixed(2);
    } else {
      console.error("Invalid conversion rate");
    }
  } catch (error) {
    console.error("Error fetching conversion rate:", error);
  }
};

watch(selectedCurrency, convertPrice, { immediate: true });
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
