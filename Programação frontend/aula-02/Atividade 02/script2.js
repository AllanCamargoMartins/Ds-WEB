       function trocar1() {
            document.getElementById("foto")
                    .setAttribute("src", "images.jpg");
        }

        function trocar2() {
            document.getElementById("foto")
                    .setAttribute("src", "911.jpg");
        }

        function mostrarSrc() {
            var valor = document.getElementById("foto")
                                .getAttribute("src");
            console.log(valor);
        }