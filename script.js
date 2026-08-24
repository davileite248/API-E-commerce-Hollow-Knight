document.addEventListener("DOMContentLoaded", () => {
    const vitrine = document.getElementById("vitrine");

    

    // Faz a requisição para a nossa API fake (o arquivo JSON)
    fetch("produtos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar os produtos");
            }
            return response.json();
        })
        .then(produtos => {
            // Para cada produto no JSON, criamos um elemento na tela
            produtos.forEach(produto => {
                const card = document.createElement("div");
                card.classList.add("produto-card");

                card.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem" onerror="this.src='https://via.placeholder.com/200x200?text=Sem+Imagem'">
                    <h2 class="produto-nome">${produto.nome}</h2>
                    <p class="produto-descricao">${produto.descricao}</p>
                    <p class="produto-preco">${produto.preco} Geo</p>
                    <button class="btn-comprar">Comprar</button>
                `;

                // Adiciona o evento de clique no botão "Comprar"
                const btnComprar = card.querySelector(".btn-comprar");
                btnComprar.addEventListener("click", () => {
                    alert(`Você comprou: ${produto.nome}!`);
                });

                // Adiciona o card na nossa vitrine
                vitrine.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Houve um problema com a operação fetch:", error);
            vitrine.innerHTML = "<p>Ocorreu um erro ao carregar os itens de Hallownest.</p>";
        });
});