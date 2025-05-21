// Seleciona o botão de alternância do modo escuro e adiciona um evento de clique
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    // Alterna a classe "dark-mode" no corpo da página
    // Isso ativa ou desativa o modo escuro com base no estilo CSS previamente definido
    document.body.classList.toggle("dark-mode");
});

// Seleciona o botão do menu de navegação e adiciona um evento de clique
document.querySelector(".menu-toggle").addEventListener("click", () => {
    // Adiciona ou remove a classe "show-menu" na barra de navegação
    // Isso controla a exibição do menu em dispositivos móveis
    document.querySelector(".navbar").classList.toggle("show-menu");
});
