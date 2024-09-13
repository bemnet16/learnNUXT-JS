<template>
  <div class="py-12 px-6 md:px-16 bg-white">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6 text-gray-900">
        Why Choose Us?
      </h2>
      <p class="text-lg text-gray-700 text-center mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut natus
        facere similique dolore velit cupiditate eveniet explicabo, at incidunt.
      </p>
      <p class="text-lg text-gray-700 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt
        praesentium eius optio, molestias laudantium pariatur perspiciatis ab
        aut incidunt!
      </p>
    </div>
  </div>

  <!-- Image Section -->
  <div class="py-12 bg-gray-50">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <img
        src="/assets/images/hero.jpg"
        alt="About Us Image 1"
        class="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <img
        src="/assets/images/hero.jpg"
        alt="About Us Image 2"
        class="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <img
        src="/assets/images/hero.jpg"
        alt="About Us Image 3"
        class="w-full h-64 object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/ETH");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
