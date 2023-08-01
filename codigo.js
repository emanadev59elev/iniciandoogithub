//Criando condições para confirmar a password

/*
Passo 1: Criar variáveis
*/

const pass1 = document.getElementById('password');
const pass2 = document.getElementById('password_confirm');
const alerta = document.querySelector('.password_info');

/*
Criar a função que irá testar se as passwords são iguais ou não...
*/

function confirmarPassword () {
  
  /*
  Se a primeira password for diferentes da segunda...
  */
  
  if (pass2.value != pass1.value){
    
    /*
    A tag <p> do html que fica bem antes do botão 'Cadastrar-se' irá receber o texto do comando 'alerta.innerHTML'...
    */
    
    
    alerta.innerHTML = 'A password não coincide com a anterior...';
    
    
  } else{//Se elas não forem iguais
  
  /*
  A tag <p> do html fica sem texto...
  */
  
    alerta.innerHTML = '';
  }
}



/*
Criando condições para o funcionamento do modal
*/

 /*
 Passo 1: Criar uma variável para cada classe dos input's ('entrada_usuario') e para as tags "<em>" do dialog....
 (lógica: as variáveis criadas para as tags <em> do modal irão agregar os valores das tags input do formulário com classes semelhantes)
 
 Por exemplo: a variável data recebe o valor do input com o id 'data'
 e depois criamos uma variável chamada dialogData que será o elemento <em> do dialog que receberá o valor da variável data do formulário...
 */
 
 /*Criando variáveis*/

 /*Para envio e recepção do nome*/
 let nome = document.getElementById('nome');

 let dialogNome = document.querySelector('dialog .nome');
 
 /*Para envio e recepção do username*/
 let username = document.getElementById('username');

 let dialogUsername = document.querySelector('dialog .username');

 
 /*Para envio e recepção do email*/
 let email = document.getElementById('email');

 let dialogEmail = document.querySelector('dialog .email');

 

 /*Para envio e recepção do número*/
 let num = document.getElementById('telefone');

 let dialogNum = document.querySelector('dialog .numero');

 
 /*Para envio e recepção do região*/
 let regiao = document.getElementById('regiao');

 let dialogRegiao = document.querySelector('dialog .regiao');

 /*Para envio e recepção da data*/
 let data = document.getElementById('data');

 let dialogData = document.querySelector('dialog .data');





//Definindo as funções do modal

/**/

const modal = document.querySelector('dialog');
const botaoFechar = document.querySelector('.fechar');

/*
botao.onclick = () => {
  modal.showModal();
}*/


function abrirModal(){
  
  /*
  Passo 1: Primeiro mostre Modal
  */
  
  modal.showModal();
  
  /*
  Passo 2: Agora apresente os dados
  */
  
  dialogNome.innerHTML = nome.value;
  dialogUsername.innerHTML = username.value;
  dialogNum.innerHTML = num.value;
  dialogEmail.innerHTML = email.value;
  dialogRegiao.innerHTML = regiao.value;
  dialogData.innerHTML = data.value;
  
  
  
}


/*
Criando variável que tenha acesso aos valores de todos os campos com a classe 'usuario_entrada'...
*/

const campos = document.querySelectorAll('.entrada_usuario');


/*
Criando outra variável que tenha acesso aos valores dos elementos sexo e data
*/

const elemento_extra = document.querySelectorAll('.elemento_extra');


/*
Definindo os parâmetros da função do botão fechar
*/

botaoFechar.onclick = () => {
  
  /*
  elemento_extra
  Passo 1: Limpar todos os campos dos 'input' (text, e-mail, num era e password) com a class='entrada_usuario'...
  */
  
  campos.forEach(function(campos){
    
    campos.value = '';
    
  })

  /*
  Passo 2: Limpar todos os campos de 'input' (rádio e date) com a class='elemento_extra' que foi adicionada de maneira intencional...
  */
  
  elemento_extra.forEach(function(elemento_extra){
    
    elemento_extra.value = '';
    
  })
  
  
  
  
  /*
  Passo 3: Fechar o Modal...
  */
  
  
  modal.close();
  
}


