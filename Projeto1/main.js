function compararNumeros() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
  
    const mensagemNumero1Maior = `O <b>${numero1}</b> é maior que o <b>${numero2}</b>`;
    const mensagemNumero2Maior = `O <b>${numero2}</b> é maior que o <b>${numero1}</b>`;
    const mensagemNumeroIguais = `Ambos <b>${numero1}</b> e <b>${numero2}</b> são iguais`;
  
    if (numero1 > numero2) {
      const containerNumero1Maior = document.querySelector('.Numero1Maior');
      containerNumero1Maior.innerHTML = mensagemNumero1Maior; 
      containerNumero1Maior.style.display = 'block'; 
    } else if (numero2 > numero1) {
      const containerNumero2Maior = document.querySelector('.Numero2Maior');
      containerNumero2Maior.innerHTML = mensagemNumero2Maior;
      containerNumero2Maior.style.display = 'block';
    } else {
      const containerNumeroIguais = document.querySelector('.NumeroIguais');
      containerNumeroIguais.innerHTML = mensagemNumeroIguais;
      containerNumeroIguais.style.display = 'block';
    }
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
  }
  
  document.getElementById('form-numeros').addEventListener('submit', function(e) {
    e.preventDefault(); 
    compararNumeros();
  });
  
