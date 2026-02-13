 function alterarDiv() {
            var div = document.getElementById("conteudo");
            
            // 1. Alterar texto
            div.innerHTML = "Vai Corinthians";
            
            // 2. Alterar cor de fundo
            div.style.backgroundColor = "lightblue";
            
            // 3. Mostrar no console
            console.log(document.getElementById("conteudo").innerHTML);
        }