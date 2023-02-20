
// Não modifique a sentença seguinte
let idade=0;
 let ano =0; 
// Modifique aqui
  let num1 = 5; /* Só pode somar, mas não especifica quantas vezes pode sumar então tomo por default que posso somar varias vezes o numero 5 e isso mesmo aplica às outras operações com seus correspondentes numeros */
  let num2 = 4; // Só substração
  let num3 = 3; // Só multiplicação
  let num4 = 2; // Só divisão
  let primop00 = Number(ano += num1);
  console.log(primop00);
 let primop = Number(primop00 *= num3);
  console.log(primop);
  let segndop = Number(primop -= num2);
  console.log(segndop);
  let tercop = Number(segndop += num1);
  console.log(tercop);
  let quartop = Number(tercop /= num4);
  console.log(quartop);
  let quintop = Number(quartop *= num3);
  console.log(quintop);
   idade = --quintop;

/*  
  let primop = Number(num1 * num3 - num2);
  let segndop = Number((primop + num1) / num4*num3);
  
  segndop--;
  console.log(segndop);*/
  alert(idade);
  

// Não modifique a sentença seguinte
console.log(idade);
