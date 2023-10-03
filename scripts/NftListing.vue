
<template>
  <div class="nft-listing">
    <img :src="nft.image" alt="NFT Image" width="100">
    <h2>{{ nft.name }}</h2>
    <p>{{ nft.inscription }}</p>
    <p>Price: {{ nft.price }}</p>
    <a :href="nft.viewLink">View</a>
    <a :href="nft.buyLink">Buy</a>
  </div>
</template>

<script>
export default {
  name: 'NftListing',
  props: {
    nft: Object
  }
}
</script>

<style scoped>
.nft-listing {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
}
</style>
