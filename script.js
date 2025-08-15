const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o aspecto mais importante de um carro elétrico para você?",
        alternativas: [
            {
                texto: "A performance. Adoro a aceleração instantânea e o torque impressionante que os motores elétricos oferecem. A experiência de dirigir é mais empolgante do que qualquer outra coisa. ",
                afirmacao: "entusiasta de carros, focado em desempenho e tecnologia de ponta."
            },
            {
                texto:  " O custo de manutenção. Prefiro a simplicidade de um motor com menos peças móveis e a economia a longo prazo. É uma decisão inteligente e prática.",
                afirmacao: "pragmático, focado em economia, confiabilidade e valor a longo prazo."
            }    
           
        ]
    },
    {
       
            enunciado: "Qual tipo de viagem você faria mais frequentemente com seu carro elétrico?",
            alternativas: [
                {
                    texto: "Viagens longas de fim de semana para explorar novos lugares, com a família ou amigos. O planejamento das paradas para carregar faz parte da aventura.",
                    afirmacao: "aventureiro, gosta de planejar, vê os desafios como parte da experiência e valoriza a liberdade de ir a qualquer lugar."
                },
                {
                    texto:  " O trajeto diário para o trabalho, levando as crianças para a escola e fazendo compras na cidade. A conveniência de carregar em casa é fundamental para a minha rotina.",
                    afirmacao: "prático, focado na rotina, valoriza a conveniência e a eficiência para o dia a dia."
                }    
               
            ]
        },
        {
            enunciado: "Considerando a infraestrutura de recarga para carros elétricos, o que mais pesa na sua decisão de compra?",

            alternativas: [
                {
                    texto:  " A rapidez da recarga. Quero a garantia de que consigo carregar o carro em poucos minutos em estações rápidas, para evitar longas esperas em viagens ou emergências. ",
                    afirmacao: "impaciente, valoriza a eficiência e não quer que a tecnologia atrapalhe seu ritmo."
                },
                {
                    texto:    "A disponibilidade de pontos de recarga em casa e no trabalho. A praticidade de carregar o carro enquanto estou em outras atividades é o mais importante para mim, mesmo que demore mais.",
               
                    afirmacao: " paciente, valoriza a conveniência e a integração da tecnologia em sua rotina, sem grandes mudanças."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();