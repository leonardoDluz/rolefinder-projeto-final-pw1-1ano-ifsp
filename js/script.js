const botaoCarrinho = document.querySelector('.icons__carrinho')
const carrinho = document.querySelector('.carrinho')

botaoCarrinho.addEventListener('click', () => {
    carrinho.classList.toggle('carrinho--aberto')
})