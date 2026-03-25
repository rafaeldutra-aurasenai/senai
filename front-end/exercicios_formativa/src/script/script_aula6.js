const btncurtir = document.querySelectorAll("#btn-curtir");
const contador = document.getElementById("contador");


    btncurtir.addEventListener("click", () => {
        contador++;
        span.textContent = contador;
    });
