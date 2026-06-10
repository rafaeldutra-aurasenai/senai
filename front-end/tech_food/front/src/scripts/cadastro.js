const form = document.getElementById("formCadastro");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;
    const preco = document.getElementById("preco").value;
    const imagem = document.getElementById("imagem").value;

    if (!nome || !descricao || !preco || !imagem) {
        alert("Preencha todos os campos");
        return;
    }

    try {

        const resposta = await fetch(
            "http://localhost:3000/produtos",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome,
                    descricao,
                    preco,
                    imagem
                })
            }
        );

        const dados = await resposta.json();

        document.getElementById("mensagem").textContent =
            "Produto cadastrado com sucesso!";

        form.reset();

    } catch (erro) {
        console.error(erro);
    }
});