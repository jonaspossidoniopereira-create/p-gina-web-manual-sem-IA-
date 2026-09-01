// ===== MENSAGEM DE BOAS-VINDAS =====
window.addEventListener("load", () => {
    console.log("⚽ Bem-vindo ao Mundo da Copa!");

    // Pequena animação no título
    const titulo = document.querySelector("h1");

    if (titulo) {
        titulo.addEventListener("click", () => {
            titulo.classList.toggle("titulo-ativo");
        });
    }
});


// ===== BOTÃO "VOLTAR AO TOPO" =====
const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "⬆️";
botaoTopo.title = "Voltar ao topo";

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "25px";
botaoTopo.style.right = "25px";
botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#ffdf00";
botaoTopo.style.color = "#006437";
botaoTopo.style.fontSize = "22px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "1000";

document.body.appendChild(botaoTopo);


// Mostrar botão quando o usuário rolar
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});


// Voltar para o topo
botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===== EFEITO NOS TÍTULOS =====
const titulos = document.querySelectorAll("h2, h3");

titulos.forEach((titulo) => {
    titulo.addEventListener("click", () => {
        titulo.style.transform = "scale(1.02)";

        setTimeout(() => {
            titulo.style.transform = "scale(1)";
        }, 200);
    });
});


// ===== ANO AUTOMÁTICO NO CONSOLE =====
const anoAtual = new Date().getFullYear();

console.log(`Mundo da Copa - ${anoAtual}`);
