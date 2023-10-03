
---
layout: default
---

<div id="app">
    <nft-listing v-for="nft in nfts" :key="nft.image" :nft="nft"></nft-listing>
</div>
