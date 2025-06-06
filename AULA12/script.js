document.addEventListener('DOMContentLoaded', () => {
  consultarCEP();
});

function consultarCEP() {
    console.log(document.getElementById('cep'))
  const params = new URLSearchParams(window.location.search);
  const cep = params.get("cep");

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(dados => {
      if (dados.erro) {
        alert("CEP não encontrado!");
        return;
      }

      const resultado = document.getElementById("resultado");
      resultado.innerHTML = `
        <td>${dados.uf}</td>
        <td>${dados.bairro}</td>
        <td>${dados.localidade}</td>
        <td>${dados.logradouro}</td>
      `;
    })
    .catch(erro => {
      console.error("Erro:", erro);
      alert("Erro ao buscar o CEP.");
    });
}
