// função que realiza a soma de dois números
const soma = () => {
    // declara uma variável e atribui valor
    let numero1 = window.prompt('Digite o primeiro número')

    let numero2 = window.prompt('Digite o segundo número')


    let soma = parseFloat(numero1) + parseFloat(numero2)

    alert('soma dos numeros: ' + soma)
}


const soma2 = (numero1,numero2) =>{
    let soma = numero1 + numero2
    alert(soma)
}

// Função que soma doi números digitados pelo usuário em um form
const somaNumeros = () =>{
    //Cria uma variavel e captura o valor do input com id = numero1
    let numero1 = document.getElementById('numero1').value

    let numero2 = document.getElementById('numero2').value

    let soma = parseFloat(numero1) + parseFloat(numero2)

    //exibe a soma dentro da div resultado
    document.getElementById('resultado').innerHTML = `
        Resultado da soma é ${soma}    
    `

}