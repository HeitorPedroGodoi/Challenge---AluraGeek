// Seleção de elementos
const nomeInput = document.getElementById('nome-produto');
const valorInput = document.getElementById('valor-produto');
const imagemInput = document.getElementById('imagem-produto');
const guardarBotao = document.getElementById('guardar-produto');
const limparBotao = document.getElementById('limpar-formulario');
const produtosLista = document.getElementById('produtos-lista');

// Função para limpar o formulário
function limparFormulario() {
    nomeInput.value = '';
    valorInput.value = '';
    imagemInput.value = '';
}

// Função para adicionar um novo produto
function adicionarProduto() {
    const nome = nomeInput.value.trim();
    const valor = valorInput.value.trim();
    const imagem = imagemInput.value.trim();

    // Validação dos campos
    if (nome === '' || valor === '' || imagem === '') {
        alert('Por favor, preencha todos os campos antes de guardar.');
        return;
    }

    // Criação do elemento do produto
    const produto = document.createElement('div');
    produto.classList.add('produto');

    produto.innerHTML = `
        <img class="produto__imagem" src="${imagem}" alt="${nome}">
        <p class="produto__nome">${nome}</p>
        <p class="produto__preco">R$ ${parseFloat(valor).toFixed(2)}</p>
        <button class="produto__remover">Remover</button>
    `;

    // Adiciona o evento de remoção para o botão de excluir
    const removerBotao = produto.querySelector('.produto__remover');
    removerBotao.addEventListener('click', () => produto.remove());

    // Adiciona o produto à lista
    produtosLista.appendChild(produto);

    // Limpa o formulário
    limparFormulario();
}

// Adiciona os eventos aos botões
guardarBotao.addEventListener('click', adicionarProduto);
limparBotao.addEventListener('click', limparFormulario);