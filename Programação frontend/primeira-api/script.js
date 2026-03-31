var divResposta = document.getElementById("resposta")

var botaoHello = document.getElementById('botaoHello')
botaoHello.addEventListener("click", requisicaoHello)

async function requisicaoHello(){
    var requisicao = await fetch('http://localhost/primeira-api/hello')
    var resposta =  await requisicao.json()

    console.log(resposta)


    divResposta.innerHTML = resposta.status + "<br>" + "Mensagem: " + resposta.message
}

var botaoEcho = document.getElementById("botaoEcho")
botaoEcho.addEventListener("click", requisicaoEcho)

async function requisicaoEcho(){
    var echo = document.getElementById("inputEcho").value 

    var requisicao = await fetch('http://localhost/primeira-api/echo', {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({message: echo})
    })
    var resposta =  await requisicao.json()

    console.log(resposta)

divResposta.innerHTML = resposta.status + "<br>" + "Mensagem: " + resposta.echo.message
}