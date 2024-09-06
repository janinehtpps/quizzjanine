const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua maneira favorita de passar o tempo livre?",
        alternativas: [
        {
        texto: " Ler um livro ou estudar algo novo",
        afirmacao: [
        "Se você prefere ler ou estudar, você pode se identificar com a mente curiosa e intelectual de Hermione Granger",
        ],
        
        },
        {
        texto: "Passar tempo com amigos e explorar novos lugares",
        afirmacao: [
        "Se você gosta de socializar e explorar, pode ter um espírito aventureiro semelhante ao de Ron Weasley",
        
        ],
        }
        ]
        },
        {
        enunciado: "Como você lida com desafios inesperados?",
        alternativas: [
        {
        texto: "Analiso a situação e planejo uma estratégia",
        afirmacao: [
        "Se você analisa e planeja, pode ter uma abordagem metódica como Hermione Granger",
        
        ],
        
        },
        {
        texto: "Enfrento o desafio com coragem e improviso",
        
        afirmacao: [
        "Se você enfrenta desafios com coragem e improviso, pode se assemelhar a Harry Potter, que muitas vezes age rapidamente em situações inesperadas",
        ],
        },
        ]
        },
        {
        enunciado: "Qual é a sua abordagem para resolver conflitos?",
        alternativas: [
        {
        texto: "Tentar entender todos os lados e mediar uma solução justa",
        afirmacao: [
        "Se você tenta mediar e entender todos os lados, você pode se identificar com a abordagem diplomática de Minerva McGonagall",
        ],
        },
        {
        texto: "Agir diretamente e tentar resolver o problema rapidamente",
        afirmacao: [
        "Se você prefere resolver problemas diretamente, pode ter uma abordagem mais direta como a de Harry Potter",
        ],
        },
        ]
        },
        {
        enunciado: "Como você prefere trabalhar em equipe?",
        alternativas: [
        {
        texto: "Como um líder, guiando e organizando o grupo",
        
        afirmacao: [
        "Se você se vê como um líder que guia e organiza, pode ter uma personalidade semelhante à de Albus Dumbledore",
        ],
        },
        {
        texto: "Como um membro ativo, contribuindo com ideias e apoio",
        afirmacao: [
        "Se você prefere contribuir ativamente e apoiar o grupo, pode se identificar com a abordagem de Ron Weasley",
        ], 
        },
        ]
        },
        {
        enunciado: "Como você se sente em relação a mudanças e novas experiências?",
        alternativas: [
        {
        texto: "Gosto de mudanças e vejo novas experiências como oportunidades",
        
        afirmacao: [
        "Se você gosta de mudanças e novas experiências, pode ter um espírito aventureiro semelhante ao de Harry Potter",
        
        ],
        
        },
        {
        texto: "Prefiro manter a rotina e me sentir confortável no familiar",
        
        afirmacao: [
        "Se você prefere a rotina e o familiar, pode se identificar com a abordagem mais estável de personagens como Neville Longbottom",
        
        ],
        
        },
        ]
        },
        {
        enunciado: "Qual é o seu tipo de humor preferido?",
        alternativas: [
        {
        texto: "Sarcasmo e humor inteligente",
        
        afirmacao: [
        
        "Se você gosta de sarcasmo e humor inteligente, pode se identificar com o estilo de humor de Sirius Black",
        
        ],
       
        
        },
        {
        texto: "Humor leve e situações engraçadas",
        
        afirmacao: [
        "Se você prefere humor leve e situações engraçadas, pode se assemelhar ao estilo de Ron Weasley",
        
        ],
        
        },
        ]
        },
        {
        enunciado: "Qual é o seu papel em um grupo de amigos?",
        alternativas: [
        {
        texto: " O conselheiro, sempre pronto para oferecer orientação e sabedoria",
        
        afirmacao: [
        "Se você é o conselheiro, oferecendo orientação e sabedoria, pode se identificar com a personalidade de Albus Dumbledore, que é conhecido por sua orientação e conhecimento",
        
        ],
        
        },
        {
        texto: "O animador, que mantém o grupo divertido e leve",
        
        afirmacao: [
        "Se você é o animador, mantendo o grupo divertido e leve, pode se assemelhar a personagens como Fred e George Weasley, que trazem alegria e humor para seus amigos",
        
        ],
       
        },
        ]
        },
        
        {
        enunciado: "Como você prefere enfrentar uma situação de crise?",
        alternativas: [
        {
        texto: " Com um plano bem pensado e uma abordagem estratégica",
        afirmacao: [
        "Se você prefere enfrentar crises com um plano bem estruturado e uma abordagem estratégica, pode se identificar com a personalidade meticulosa de Hermione Granger",
         
        ],
        },
        {
        texto: "Com improviso e adaptabilidade para lidar com o que vier",
        
        afirmacao: [
        "Se você tende a ser mais flexível e adaptável, lidando com imprevistos conforme surgem, pode se assemelhar à abordagem improvisada e corajosa de Harry Potter",
          
        ],
        },
        ]
    }
    ];                     
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigada por responder";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
