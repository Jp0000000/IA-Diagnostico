// Adiciona o event listener para capturar o pressionamento de tecla no input
document
  .getElementById("sintoma")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Previne o comportamento padrão (como enviar um formulário)
      event.preventDefault();

      // Mostra a mensagem "É foda msm"
      document.getElementById("resultado").innerText = "É foda msm";

      // Esconde o botão "Diagnosticar novamente"
      document.getElementById("diagnosticar-novamente").style.display =
        "inline-block";

      // Toca o som
      let som = document.getElementById("som");
      som.play();
    }
  });

// Função para reiniciar o diagnóstico
function reiniciarDiagnostico() {
  // Limpa a caixa de texto
  document.getElementById("sintoma").value = "";

  // Esconde a mensagem "É foda msm"
  document.getElementById("resultado").innerText = "";

  // Esconde o botão "Diagnosticar novamente"
  document.getElementById("diagnosticar-novamente").style.display = "none";
}

// Função para mostrar o box de informações
function mostrarInfo() {
  document.getElementById("info-box").style.display = "block";
}

// Função para fechar o box de informações
function fecharInfo() {
  document.getElementById("info-box").style.display = "none";
}
