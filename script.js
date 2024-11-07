// Variável para contar os itens no carrinho
let carrinhoCount = 0;

// Função para atualizar a quantidade de itens no carrinho
function atualizarCarrinho() {
    const carrinhoDisplay = document.getElementById('carrinho-count');
    carrinhoDisplay.textContent = carrinhoCount; // Atualiza o número de itens no carrinho
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho() {
    carrinhoCount++; // Incrementa o número de itens no carrinho
    atualizarCarrinho(); // Atualiza o carrinho na interface
    alert("Carro adicionado ao carrinho!"); // Exibe um alerta para o usuário
}

// Adicionando evento de clique aos botões de "Comprar agora"
const buttons = document.querySelectorAll('.btn-animado');

buttons.forEach(button => {
    button.addEventListener('click', adicionarAoCarrinho);
});
