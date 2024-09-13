<template>
  <div class="home-page">
    <div class="relative bg-gray-100">
      <img
        class="w-full h-screen opacity-75"
        src="/assets/images/hero.jpg"
        alt="Hero Image"
      />
      <div
        class="absolute inset-0 flex flex-col justify-center items-center text-center"
      >
        <div class="bg-white/50 p-10 rounded-2xl">
          <h2 class="text-4xl font-bold text-orange-800 mb-4">
            Welcome to Our Products Store
          </h2>
          <p class="text-lg text-slate-800 mb-8 max-w-lg">
            Explore a world of quality products that suit your needs. Shop with
            us for a reliable and delightful shopping experience.
          </p>
          <NuxtLink
            to="/products"
            class="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600"
          >
            Shop Now
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
