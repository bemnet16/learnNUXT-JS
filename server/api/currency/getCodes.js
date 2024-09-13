export default defineEventHandler(async (event) => {
  const { currencyKey } = useRuntimeConfig();

  const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`;
  const { data } = await $fetch(uri);

  const availableCodes = Object.keys(data);
  return availableCodes;
});
