const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if(nome === "" || email === ""){

        alert("Preencha todos os campos!");

    }else{

        alert("Cadastro realizado com sucesso!");

    }

});


