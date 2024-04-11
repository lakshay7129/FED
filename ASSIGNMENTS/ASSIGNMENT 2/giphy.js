function searchGifs() {
    const apiKey = '5dZhxZlsPbRzUzjRLpJcfgof8JH8nx7H'; 
    const searchTerm = document.getElementById('searchInput').value;
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=10`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayGifs(data.data);
      })
      .catch(error => {
        console.error('Error fetching GIFs:', error);
      });
  }
  
  function displayGifs(gifs) {
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = '';
  
    gifs.forEach(gif => {
      const gifElement = document.createElement('img');
      gifElement.src = gif.images.fixed_height.url;
      gifContainer.appendChild(gifElement);
    });
  }
  