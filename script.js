const form = document.getElementById("humor-form");
const humorInput = document.getElementById("humor");
const humorRegistrado = document.getElementById("humor-registrado");
const mensagemBtn = document.getElementById("mensagem-btn");
const mensagemMotivacional = document.getElementById("mensagem-motivacional");
 
const imagemMotivacional = document.createElement("img");
imagemMotivacional.style.width = "200px";
imagemMotivacional.style.marginTop = "15px";
document.body.appendChild(imagemMotivacional);
 
const conteudoPorHumor = {
    feliz: {
        frases: [
            "Cada passo, por menor que seja, já é progresso.",
            "Seu futuro começa com as escolhas que você faz hoje",
            "Você não precisa ser perfeito, só precisa ser constante."
        ],
        imagens: [
            "./img/Feliz.webp",
            "./img/Feliz-2.png",
            "./img/feliz 3.webp"
            
        ]
    },
    triste:{
        frases: [
            "A dor é real, mas ela nunca dura para sempre.",
            "Você não está sozinho, tudo vai melhorar.",
            "O coração se cansa, mas também aprende a recomeçar."
        ],
        imagens: [
            "./img/trsite 1.webp",
            "./img/triste 2.png",
            "./img/triste 3.png"
            
        ]
    },
    ansioso: {
        frases: [
            "Respire fundo, um passo de cada vez.",
            "Um passo de cada vez já é suficiente",
            "Foque no agora, o futuro se constrói aos poucos"
        ],
        imagens: [
            "./img/ansioso 1.jpg",
            "./img/ansioso 2.jpg",
            "./img/ansioso 3.jpg"
            
        ]
    },
    motivado: {
        frases:[
            "Você é capaz de muito mais do que imagina.",
            "Você tem tudo o que precisa para vencer.",
            "Cada dia é uma chance nova de ser melhor que ontem."
        ],
        imagens: [
            "./img/motivar 1.jpg",
            "./img/motivar 2.jpg",
            "./img/motivado 3.jpg"
            
        ]
    },
    neutro: {
        frases:[
            "Às vezes, apenas estar presente já é suficiente.",
            "Tudo tem seu tempo, e cada tempo tem seu valor.",
            "Cuide de si mesmo, mesmo nos dias comuns."
        ],
        imagens: [
            "./img/neutro 1.webp",
            "./img/neutro 2.jpg",
            "./img/neutro 3.jpg"
            
        ]
    }
};
 
let humorAtual = "neutro";
 
form.addEventListener("submit", function(event) {
    event.preventDefault();
 
    const humor = humorInput.value.trim().toLowerCase();
    humorRegistrado.textContent = "Hoje você se sente: " + humor;
 
    if (conteudoPorHumor[humor]) {
        humorAtual = humor;
} else {
    humorAtual = "neutro";
}
 
localStorage.setItem("humor", humorAtual);
humorInput.value = "";
});
 
window.addEventListener("load", function() {
    const humorSalvo = this.localStorage.getItem("humor");
    if (humorSalvo) {
        humorAtual = humorSalvo;
        humorRegistrado.textContent = "Hoje você se sente: " + humorSalvo;
    }
});
 
mensagemBtn.addEventListener("click", function(){
    const conteudo = conteudoPorHumor[humorAtual];
 
    const indiceFrase = Math.floor(Math.random() * conteudo.frases.length);
    mensagemMotivacional.textContent = conteudo.frases[indiceFrase];
 
    const indiceImagem = Math.floor(Math.random() * conteudo.imagens.length);
    imagemMotivacional.src = conteudo.imagens[indiceImagem];
});