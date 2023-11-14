function api() {
    const apikey = "0cb9d57e369508bb1b1328c84535ccd4";
    const url = "https://gnews.io/api/v4/search?q=nanotecnologia&lang=pt&apikey=" + apikey;
  
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const articles = data.articles;
  
        if (articles && articles.length > 0) {
          for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
  
            // Criar elementos HTML para exibir a imagem, título e descrição
            const articleDiv = document.createElement("div");
            articleDiv.className = "square"; // Use a classe CSS existente
            
            const imageElement = document.createElement("img");
            imageElement.src = article.image; // Suponhamos que a API forneça um campo 'image' para a URL da imagem
  
            const titleElement = document.createElement("h3");
            titleElement.textContent = article.title;
  
            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = article.description;
  
            // Adicionar os elementos ao DOM
            articleDiv.appendChild(imageElement);
            articleDiv.appendChild(titleElement);
            articleDiv.appendChild(descriptionElement);
            document.getElementById("noticias-container").appendChild(articleDiv);
          }
        } else {
          document.getElementById("noticias-container").textContent = "Nenhum artigo encontrado.";
        }
      })
      .catch(function (error) {
        console.error("Erro na solicitação: " + error);
      });
  }
  
  api();
  