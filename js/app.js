// Definindo a quantidade inicial disponível para cada tipo de ingresso
let quantidadeDisponivel = {
    pista: 100,
    superior: 200,
    inferior: 400,
  };
  
  // Função para habilitar o botão de comprar
  function habilitarCompra() {
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const quantidadeInput = document.getElementById('qtd').value;
  
    // Verifica se o tipo e a quantidade são válidos
    const tipoValido = quantidadeDisponivel.hasOwnProperty(tipoIngresso);
    const quantidadeValida = !isNaN(quantidadeInput) && quantidadeInput > 0;
  
    // Habilita o botão se ambos são válidos
    const botaoComprar = document.querySelector('button');
    botaoComprar.disabled = !(tipoValido && quantidadeValida);
  }
  
// Função para realizar a compra
function comprar() {
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const quantidadeInput = parseInt(document.getElementById('qtd').value);
  
    // Verifica se há ingressos disponíveis
    if (quantidadeDisponivel[tipoIngresso] >= quantidadeInput) {
      // Deduz a quantidade comprada
      quantidadeDisponivel[tipoIngresso] -= quantidadeInput;
  
      // Atualiza a exibição da quantidade disponível
      atualizarQuantidadeDisponivel();
  
      // Limpa os campos de seleção e desabilita o botão de comprar
      document.getElementById('tipo-ingresso').value = '';
      document.getElementById('qtd').value = '';
      habilitarCompra();
  
      // Exibe mensagem de sucesso
      alert(`Compra realizada com sucesso! ${quantidadeDisponivel[tipoIngresso]} ingressos restantes em estoque.`);
    } else {
      // Exibe mensagem de erro com a quantidade disponível
      alert(`Quantidade indisponível. Apenas ${quantidadeDisponivel[tipoIngresso]} ingressos restantes em estoque.`);
    }
  }  
  
  // Função para atualizar a exibição da quantidade disponível
  function atualizarQuantidadeDisponivel() {
    document.getElementById('qtd-pista').textContent = quantidadeDisponivel.pista;
    document.getElementById('qtd-superior').textContent = quantidadeDisponivel.superior;
    document.getElementById('qtd-inferior').textContent = quantidadeDisponivel.inferior;
  }
  
  // Adiciona eventos aos elementos para verificar a habilitação do botão
  document.getElementById('tipo-ingresso').addEventListener('change', habilitarCompra);
  document.getElementById('qtd').addEventListener('input', habilitarCompra);
  