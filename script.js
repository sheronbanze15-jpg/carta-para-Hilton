const pages = [
`Eu queria te dizer várias coisas…
muitas coisas que passam sempre na minha cabeça.
Mas, por agora, vou dizer duas.

A primeira é que, ao longo do tempo,
eu aprendi a tsucular, a deixar as coisas irem quando não saem como eu quero.
A não insistir demais…
Mas você foi uma das poucas coisas que mudou isso em mim.

Você me fez acreditar que vale a pena ficar,
esperar…
e não desistir.

Porque você vale o risco.
Vale a espera.
Vale a entrega do meu coração.

A segunda é que…
Tu me olhas… e as borboletas acordam.
Tu me beijas… e o meu corpo arrepia.
Tu me abraças… e a muralha despedaça.
Eu te olho… e o mundo fica silencioso.
Te beijo… e tudo desaparece.
Te abraço… e percebo o quanto estou desarmada.

E, de alguma forma…
isso não me assusta.`,

`Wahhhhhhh queres mais nem kkkkkkkkkk`,

`Eu sou muito vingativa, eu posso te deixar hospitalizado, só não posso te matar porque Deus disse "não matarás".
Mas yeah.`,

`Sem dúvidas...

Sem dúvidas tu és um dos capítulos mais lindos do meu livro da minha vida...

É um daqueles capítulos que ficas ansioso para saber o que vem a seguir mas amando cada segundo da leitura,
um daqueles que preciso parar, respirar e bater as pernas na cama para depois continuar a ler de tanta euforia, de tanta emoção que não tem explicação...

Sem dúvidas tu és aquele capítulo que esperamos ansiosamente que não tenha fim. ❤️`,

`Nessa última semana estou a ouvir muitas coisas e isso me deixa maluca,
e vem aquela frase que me disseste:
"não põe a mão no fogo por ninguém".`,

`Esses foram alguns textos que escrevi antes de falar contigo naquele sábado.`,

`O que me entristece é o fato de termos vivido tudo que vivemos, mas só foi real para um de nós, e o facto que depois de tudo descobrir que nada foi verdadeiro, porque a cada entrega, a cada risada, a cada discussão, a cada presente, a cada carta que eu dava, é descobrir que aquilo nunca foi real para ti.

Descobrir que estava a viver uma mentira disfarçada de realidade, que cada pensamento de futuro não era existente nem sequer no presente, descobrir que tinhas sim um amor, esse sentimento lindo mas não era por mim.`,

`A dor de duvidar de tudo que vivemos, a dor de tentar descobrir o que era verdade e o que era mentira, e se deparar que tudo era uma mentira porque não era a mim que querias do teu lado.

A dor de recordar de cada frase tua, de cada mensagem tua, de cada beijo teu e me deparar que não era comigo que querias estar a conversar, não era eu que querias estar a beijar.

A dor de perceber que nunca fui eu, e que fui totalmente uma idiota achando que poderia ser.

E pior ainda, perceber que todas as cartas de amor que eu escrevia eram dedicadas para alguém que nem sequer existe, porque era tudo mentira.`,

`Tem uma parte de mim que acredita que nada disso é real, que é simplesmente um engano grandee.

Porque eu te amo, construiria minha vida ao teu lado, te apoiando em tudo e escolhendo somente a ti, porque depois de Deus serias tu a minha prioridade, a nossa vida, porque eu realmente acredito ou acreditava sei lá, que seríamos capazes de fazer isso.`,

`Eu falo muito desculpa kkkkkk,
mas era isso eu também fizzzz um siteeeeeeeeee wahhhhhhhhhh.`
];

let current = 0;

function startLetter() {
  document.getElementById("cover").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
  render();
}

function render() {
  const content = document.getElementById("content");
  content.style.animation = "none";
  void content.offsetWidth;
  content.style.animation = "appear .6s ease";
  content.textContent = pages[current];

  document.getElementById("pageNumber").textContent =
    `Carta — ${current + 1} de ${pages.length}`;

  document.getElementById("backBtn").style.visibility =
    current === 0 ? "hidden" : "visible";

  document.getElementById("nextBtn").textContent =
    current === pages.length - 1 ? "♡ Fim da carta ♡" : "Continuar a ler ♡";
}

function nextPage() {
  if (current < pages.length - 1) {
    current++;
    render();
  }
}

function previousPage() {
  if (current > 0) {
    current--;
    render();
  }
}

function restart() {
  current = 0;
  document.getElementById("letter").classList.add("hidden");
  document.getElementById("cover").classList.remove("hidden");
}
