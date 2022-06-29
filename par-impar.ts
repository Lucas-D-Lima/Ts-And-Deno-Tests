/*
 Um jogo simples de par ou impar, onde você escolher no primeiro argumento 'par' ou 'impar' e um numero qualquer
*/
const number:number = parseInt(Deno.args[1]) + Math.round(Math.random()*10);
const choise:string = Deno.args[0];

const rest:number = number%2

console.log(number)

if (choise =="par" && rest==0){
    console.log(`Você ganhou, o resultado foi: ${number}, o bot escolheu ${number-parseInt(Deno.args[1])}`)
} else if( choise =="par" && rest==1){
    console.log(`Você perdeu, o resultado foi: ${number}, o bot escolheu ${number-parseInt(Deno.args[1])}`)
} else if( choise == "impar" && rest ==0){
    console.log(`Você perdeu, o resultado foi: ${number}, o bot escolheu ${number-parseInt(Deno.args[1])}`)
} else{
    console.log(`Você ganhou, o resultado foi: ${number}, o bot escolheu ${number-parseInt(Deno.args[1])}`)
}
