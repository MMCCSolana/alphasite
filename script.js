
// Assuming the JSON data is hosted on the same GitHub repo and is accessible via a raw link
const dataURL = 'listed_nfts.json'; 

fetch(dataURL)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('nft-container');
        
        data.forEach(nft => {
            const nftDiv = document.createElement('div');
            nftDiv.className = 'nft';

            const img = document.createElement('img');
            img.src = nft.image;
            img.alt = nft.name;

            const title = document.createElement('h2');
            title.textContent = nft.name;

            const price = document.createElement('p');
            price.textContent = 'Price: ' + nft.price;

            nftDiv.appendChild(img);
            nftDiv.appendChild(title);
            nftDiv.appendChild(price);

            container.appendChild(nftDiv);
        });
    });
