 function limparTitulo() {
            var tituloExistente = document.querySelector("h1");
            if (tituloExistente) {
                tituloExistente.remove();
            }
        }

        function azul() {
            document.body.style.backgroundColor = "blue";
            limparTitulo();
            var h1 = document.createElement("h1");
            h1.innerHTML = "Gremio";
            document.body.appendChild(h1);
        }

        function verde() {
            document.body.style.backgroundColor = "green";
            limparTitulo();
            var h1 = document.createElement("h1");
            h1.innerHTML = "Palmeiras";
            document.body.appendChild(h1);
        }

        function vermelho() {
            document.body.style.backgroundColor = "red";
            limparTitulo();
            var h1 = document.createElement("h1");
            h1.innerHTML = "Internacionali";
            document.body.appendChild(h1);
        }