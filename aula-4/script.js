async function buscarCep() {
  const cepInput = document.querySelector("#input_cep").value;

  if (!cepInput) return alert("O campo CEP está vazio");

  const url = `https://viacep.com.br/ws/${cepInput}/json/`;

  try {
    const response = await fetch(url);
    const dataCep = await response.json();
    console.log(dataCep);
    preencherDados(dataCep);
  } catch (error) {
    console.log(error);
    alert("Erro ao consultar os dados do CEP.");
  }
}

function preencherDados(oCep) {
  const form = document.querySelector("#form_cep");

  // const formData = new FormData(form);

  // const bairro = formData.get("input_bairro");
  // const cep = formData.get("input_cep");
  // const logra = formData.get("input_complemento");

  // bairro = "Teste";
  // cep = "Teste";
  // logra = "Teste";

  const bairro = document.querySelector("#input_bairro");
  bairro.value = oCep.bairro;
}
