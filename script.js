function montante(){
  var salario = parseInt(document.getElementById("salario").value);

  var imposto = parseInt(document.getElementById("imposto").value);

  var impostoPorcent = imposto/100*salario

  var descontado = salario-impostoPorcent;

  var tempo = parseInt(document.getElementById("tempo").value);

  var resultado = descontado * tempo;

  document.getElementById("resultado").value = resultado
}