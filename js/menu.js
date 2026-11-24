/* Fecha o menu do telemóvel.
   O menu é o «collapse» do Bootstrap, que só fecha no botão ☰.
   Este código fecha-o também quando:
   - se escolhe uma opção do menu;
   - se clica fora do menu (no logótipo, no botão do modo escuro ou na página);
   - se carrega na tecla Esc. */

const menu = document.getElementById("menu");

function fecharMenu() {
    // getOrCreateInstance: usa o menu que o Bootstrap já criou
    bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
}

document.addEventListener("click", function (evento) {
    // Menu fechado (ou computador, onde o menu está sempre à vista): não faz nada
    if (!menu.classList.contains("show")) {
        return;
    }

    // O botão ☰ já abre e fecha o menu sozinho
    if (evento.target.closest(".navbar-toggler")) {
        return;
    }

    const clicouNoMenu = menu.contains(evento.target);
    const clicouNumLink = evento.target.closest("a") !== null;

    // Fecha se o clique foi fora do menu ou numa opção do menu
    if (!clicouNoMenu || clicouNumLink) {
        fecharMenu();
    }
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && menu.classList.contains("show")) {
        fecharMenu();
    }
});
