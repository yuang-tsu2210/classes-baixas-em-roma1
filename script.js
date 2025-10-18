function mostrar(secao) {
  const c = document.getElementById("conteudo");

  switch (secao) {
    case "cidadania":
      c.innerHTML = `
        <h1>A IDEIA DE CIDADANIA</h1>
      </strong> A ideia que temos hoje de cidadania é os mesmos direitos pelo voto liberdade de expressão inclusão,porém essa ideia surgiu em Atenas na Grécia mas os direitos não eram tá amplos</p>
      <img class="imagem" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvCC1CNO9Qs2sIXIrZlW-4ImH0DG-ZSZzVar6mbzJSjL4E-cokc-hwB8fxN0VwnZ2hKRPfS0kT2z-5fEwZviCCOR4L9a89JCxVitTcBL-XqSIHLJLnfHPQSVm1I0WmO4B5pnsQX920wB8/s1600/edict-of-caracalla.jpg" alt="miojo extremo">
      `;
      break;

    case "grecia e roma escravista":
      c.innerHTML = `
        <h1> GRÉCIA E ROMA SOCIEDADES ESCRAVISTAS</h1>
         <p>Grécia e Roma não achavam o trabalho manual importante (não gostavam de fazer então deixavam para os escravos) eles tinham que praticar a agricultura, ajudavam na criação de Gado e executavam atividades doméstica uma pessoa era escravizada quando estava endividada,por condição de nascimento,e por ser prisioneiros de guerra.por tanto isso transformou em Grécia e Roma sociedades escravistas. Os escravos podiam ser vendidos ou trocados e Aristóteles afirma que os escravos são uma ferramenta e nunca seriam cidadãos</p>
  <img class="imagem" src="https://pt.quizur.com/_image?href=https://img.quizur.com/f/img64877494d02c96.57492905.png?lastEdited=1686598841&w=1024&h=1024&f=webp"
        <ol>
          
      `;
      break;

    
      break;

    case "contato":
      c.innerHTML = `
        <h1>creditos</h1>
        <p>creditos pra</p>
    <p>arthur,cesar,henrique,thomas e davi peres</a></p>
      `;
      break;

    case "men18":
      c.innerHTML = `
        <h1>quiz</h1>
       
        <p>
          <a href="https://pt.quizur.com/trivia/cidadania-mulheres-e-escravos-no-antigo-mundo-greco-romano-1r5yN " target="_blank" rel="noopener">quiz</a> •
       
      `;
      break;

    case "papel social das mulheres":
      c.innerHTML = `
        <h1>O PAPEL SOCIAL DAS MULHERES</h1>
        <p>Em Grécia e Roma o papel das mulheres era bem limitado,em geral sas funções eram ser boas espozas e boas mães elas pertenciam as camadas médias e altas e tinham papel restrito em casa e nunca em decisões políticas e públicas. As mulheres pobres ou escravizadas,exerciam diversos trabalhos, podendo, inclusive estar em ambientes públicos mas as mulheres não eram vistas como cidadãs. Em Roma as famílias eram patriarcas,ou seja o homem era chamado se pater (o chfe da família) dava as regras e a família deve seguir.Caso as mulheres quiserem influenciar politicamente deveria exercer ações indiretas nos bastidores ou com a ajuda do marido nunca em público</p>
        <img class="imagem" src="https://mega.ibxk.com.br/2022/06/09/09193453745554.jpg?ims=610x" alt="Exemplo">
      `;
      break;

    /* EXEMPLO: adicione quantos tópicos quiser
    case "meutopico":
      c.innerHTML = `
        <h1>Meu Tópico</h1>
        <p>Coloque aqui o conteúdo do novo tópico.</p>
      `;
      break;
    */

    default:
      c.innerHTML = `<h1>Ops</h1><p>Seção não encontrada.</p>`;
  }
}