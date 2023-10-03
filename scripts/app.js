
import Vue from 'vue';
import NftListing from './NftListing.vue';

// Assuming data is globally available, for simplicity in this mockup
const nfts = window.nftData;

new Vue({
  el: '#app',
  data: {
    nfts: nfts
  },
  components: {
    NftListing
  }
});
