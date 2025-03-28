window.onload = function () {
  // Adiciona o event listener para capturar o pressionamento de tecla no input
  document
    .getElementById("sintoma")
    .addEventListener("keydown", function (event) {
      console.log("Tecla pressionada:", event.key); // Verifica qual tecla foi pressionada
      if (event.key === "Enter") {
        // Previne o comportamento padrão (como enviar um formulário)
        event.preventDefault();

        // Mostra a mensagem "É foda msm"
        document.getElementById("resultado").innerText = "É foda msm";

        // Exibe o botão "Diagnosticar novamente"
        document.getElementById("diagnosticar-novamente").style.display =
          "inline-block";

        // Toca o som
        let som = document.getElementById("som");
        som.play();

        // Limpa a caixa de texto
        document.getElementById("sintoma").value = "";
      }
    });
};

// Função para mostrar o box de informações
function mostrarInfo() {
  // Exibe o box de informações
  document.getElementById("info-box").style.display = "block";
}

// Função para fechar o box de informações
function fecharInfo() {
  // Esconde o box de informações
  document.getElementById("info-box").style.display = "none";
}

// Função que reinicia o diagnóstico
function reiniciarDiagnostico() {
  console.log("Função de reinício chamada");

  // Limpa a caixa de texto
  document.getElementById("sintoma").value = "";

  // Esconde a mensagem "É foda msm"
  document.getElementById("resultado").innerText = "";

  // Esconde o botão "Diagnosticar novamente"
  document.getElementById("diagnosticar-novamente").style.display = "none";
}

// Função para capturar o pressionamento de tecla no input
window.onload = function () {
  document
    .getElementById("sintoma")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Previne o comportamento padrão

        // Exibe a mensagem "É foda msm"
        document.getElementById("resultado").innerText = "É foda msm";

        // Exibe o botão "Diagnosticar novamente"
        document.getElementById("diagnosticar-novamente").style.display =
          "inline-block";

        // Toca o som
        let som = document.getElementById("som");
        som.play();

        // Limpa o campo de texto
        document.getElementById("sintoma").value = "";
      }
    });
};
