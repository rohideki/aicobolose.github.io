

function enviarCadastro(){
    console.log('a')
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let cpf = document.getElementById("cpf").value
    let telefone = document.getElementById("tel").value
    let endereco = document.getElementById("endereco").value
    let numero = document.getElementById("numero").value
    let complemento = document.getElementById("complemento").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let estado = document.getElementById("estado").value
    let cep = document.getElementById("cep").value
    
    let url = "http://localhost:3030/api/customers"
    var xmlhttp = new XMLHttpRequest()
    var body = {
        "nome": `${nome}`,
        "email": `${email}`,
        "cpf": `${cpf}`,
        "telefone": `${telefone}`,
        "endereco": `${endereco}`,
        "numero": `${numero}`,
        "complemento": `${complemento}`,
        "bairro": `${bairro}`,
        "cidade": `${cidade}`,
        "estado": `${estado}`,
        "cep": `${cep}`
    }
    console.log(body)
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzA1MzEwNjZ9.iIkz-uY17NaeLdUcxAZfWElRgXbLaqvziUTtimtn3EQ")
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.addEventListener('load', function () {
        console.log(xmlhttp.response)
    })
    xmlhttp.send(JSON.stringify(body))

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
            console.log(xmlhttp.response);
        }
    }
    var resultado = confirm(`${nome}, Tem certeza que deseja continuar?`)
    if (resultado == true) {

        window.alert('Cadastro enviado com sucesso!!')
    }
    else {
        window.alert('Obrigado')
    }
}

function opinar(){
    
    let listaDoces = ["boloPote","paoMel","brigadeiro","beijinhoCrocante","boloGelado"] 
let preferido = []
    for(let i of listaDoces){
        console.log(i)
        console.log(document.getElementById(i.toString()).checked)
        if(document.getElementById(i).checked == true){
preferido.push(i)
        }
    else{
        continue
    }
    }

 
    var resultado = confirm(`${preferido}, Tem certeza que deseja continuar?`)
    if (resultado == true) {

        window.alert('Obrigado!')
    }
    else {

       
    }
}