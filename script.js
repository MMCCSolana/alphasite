
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
            img.src = `https://img-cdn.magiceden.dev/rs:fit:640:640:0:0/plain/${nft.image}`;
            img.alt = nft.name;

            const title = document.createElement('h2');
            title.textContent = nft.name;

            const mintOrder = document.createElement('h4');
            mintOrder.textContent = nft.inscription.replace("SOL Inscription #", "Mint# ");

            const price = document.createElement('p');
            price.textContent = 'Price: ' + nft.price;

            const viewLink = document.createElement('a');
            viewLink.href = nft.viewLink;
            viewLink.textContent = 'View';
            viewLink.target = '_blank';

            const buyLink = document.createElement('a');
            buyLink.href = nft.buyLink;
            buyLink.textContent = 'Buy';
            buyLink.target = '_blank';
            buyLink.style.marginLeft = '10px';

            nftDiv.appendChild(img);
            nftDiv.appendChild(title);
            nftDiv.appendChild(mintOrder);
            nftDiv.appendChild(price);
            nftDiv.appendChild(viewLink);
            nftDiv.appendChild(buyLink);

            container.appendChild(nftDiv);
        });
    });
