// funções que são executadas quando a página é carregada
document.addEventListener ('DOMContentLoaded',function(){
    ocultaLoader()
})
// função que exibe o loader 
const exibeLoader = () =>{
    $('.preloader').fadeTo("slow", 1);
}

// função que oculta o loader
const ocultaLoader = () =>{
    $('.preloader').fadeOut("slow", 0);
}



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

const exibe = (id) =>{

   let elemento = document.getElementById(id)

   if(elemento.hidden == true){
    elemento.hidden = false
   }else{
    elemento.hidden = true
   }
}

// const exibeSelect = () =>{

//     let opcao = document.getElementById('tecnologia').value


//     let elemento = document.getElementById(opcao)
 
//     if(elemento.hidden == true){
//      elemento.hidden = false
//     }else{
//      elemento.hidden = true
//     }
//  }

const exibeCidade = () =>{
    // captura o elemento html do estado
    let estado = document.getElementById('estado')
    let cidade = document.getElementById('cidade')

    // exibe o elemento do valor capturado
    // alert(estado.value)
    if(estado.value == 'sp'){
        cidade.innerHTML = `
        <option value="">Aguai</option>
        <option value="">São João da Boa Vista</option>
        <option value="">Águas da Prata</option>
        `
    }else if(estado.value == 'rj'){
        cidade.innerHTML = `
        <option value="">Laranjeiras</option>
        <option value="">Xerém</option>
        <option value="">Parati</option>
        `
    }else if(estado.value == 'mg'){
        cidade.innerHTML = `
        <option value="">Andradas</option>
        <option value="">Poços de Caldas</option>
        <option value="">Belo Horizonte</option>
        `
    }

    
}

// função que consulta o cep de uma API
// api utilizada POSTMON
const consultaCep = () =>{
    let cep = document.getElementById('cep').value

    if(cep == ''){
        alert('Prencha o CEP!')
        return
    }

    exibeLoader();
    const result = fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response=>response.json()) 
        .then(result=>{
            // resposta final da requisção, já validada em formato JSON
            // manipulação do HTML
            document.getElementById('logradouro').value = result.logradouro
            document.getElementById('bairro').value = result.bairro
            document.getElementById('localidade').value = result.localidade
            document.getElementById('uf').value = result.uf

            document.getElementById("numero").focus()

            ocultaLoader()
        })
}



