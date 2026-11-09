const viagens = [
    {
      destino: "Rio de Janeiro",
      pais: "Brasil",
      dias: 5,
      preco: 1500.00
    },
    {
      destino: "Paris",
      pais: "França",
      dias: 7,
      preco: 6500.00
    },
    {
      destino: "Buenos Aires",
      pais: "Argentina",
      dias: 4,
      preco: 2800.00
    },
    {
      destino: "Orlando",
      pais: "Estados Unidos",
      dias: 10,
      preco: 8500.00
    },
    {
      destino: "Lisboa",
      pais: "Portugal",
      dias: 6,
      preco: 5200.00
    }
  ];

const corpoDaTabela = document.getElementById("corpoDaTabela");

for (let viagem of viagens){
    const linha = document.createElement("tr");

    linha.innerHTML = `
    <td>${viagem.destino}</td>
    <td>${viagem.pais}</td>
    <td>${viagem.dias}</td>
    <td class="preco">${viagem.preco.toLocaleString(
        "pt-BR",{
            style: "currency",
            currency: "BRL"
        }
    )}</td>
    `;

    corpoDaTabela.appendChild(linha);
}