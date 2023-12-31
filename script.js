// aqui estamos selecionando os elementos com o querySelector
const about = document.querySelector('.about');
const education = document.querySelector('.education');
const contact = document.querySelector('.contact');
const portfolio = document.querySelector('.portfolio');
const main = document.querySelector('.main');

// aqui estou adicionando um evento de click ao elemento "about", para mudar o conteúdo da página
about.addEventListener('click', () => {
    main.innerHTML = `<h1 class="abouth1">Sobre mim</h1>
    <div class="aboutdiv">
    <p class="aboutp1"> Olá eu me chamo Abraão Rocha de Paula, tenho 20 anos e moro no Paraná, nesta
    seção irei falar um pouco sobre mim e meus hobbies, eu realmente sou fascinado 
    por tecnologia, então em meu tempo livre acabo pesquisando e estudando sobre,
    também adoro ouvir música, assistir animes, ler mangás, jogar video games e
    sair com meus amigos.</p>
    <p class="aboutp2">Entre meus Animes/Mangás favoritos estão Death Note, Neon Genesis Evangelion,
    Code Geass e Steins;Gate, meu estilo musical favorito no momento é o Metal
    apesar de eu ser muito Eclético, e entre os jogos que mais gosto estão
    Lost Ark, BloodBorne e New World</p>
    </div>`
})

// aqui estou adicionando um evento de click ao elemento "education", para mudar o conteúdo da página
education.addEventListener('click', () => {
    main.innerHTML = `<h1 class="educationh1">Educação</h1>
    <div class="educationdiv">
    <p class="educationp1">Atualmente estou cursando Análise e Desenvolvimentos de Sistemas na UNINTER, e também 
    atuo como estagiário DevOps na IDS Software e Assessoria, meus maiores interesses são desenvolvimento backend
    e nas práticas DevOps: CI/CD, automatização, manutenção de servidores.</p>
    <h2 class="educationh2">Habilidades</h2>
    <div class="abilities">
    <ul>
    <li>NodeJS</li>
    <li>ExpressJS</li>
    <li>Java</li>
    <li>CentOS</li>
    <li>Jira</li>
    <li>Postman</li>
    <li>WildFly</li>
    </ul>
    <ul>
    <li>MySQL</li>
    <li>MongoDB</li>
    <li>PostgreSQL</li>
    <li>Git</li>
    <li>Docker</li>
    <li>Vim</li>
    <li>WinSCP</li>
    </ul>
    </div>
    </div>`
})

// aqui estou adicionando um evento de click ao elemento "portfolio", para mudar o conteúdo da página
portfolio.addEventListener('click', () => {
    main.innerHTML = `<h1 class="portfolioh1">Portfólio</h1>
    <div class="portfoliodiv">
    <p class="portfoliop1">
    Caso queira ver meus projetos, clique <a href="https://github.com/abraaorochapb" target="_blank">aqui</a> para
    se direcionar ao meu GitHub, onde pode ver meus projetos, estudos e códigos.
    <h2 class="portfolioh2">Highlights</h2>
    <div class="projects">
    <ul>
    <li>
    <a href="https://abraaorochapb.github.io/proj4CursoFrontEndInstagram/" 
    target="_blank">Clone da página de login do Instagram</a>
    </li>
    <li>
    <a href="https://abraaorochapb.github.io/Notes/" 
    target="_blank">Bloco de notas</a>
    </li>
    <li>
    <a href="https://abraaorochapb.github.io/GeradorQRCode-JS/" 
    target="_blank">Gerador de QR Code</a>
    </li>
    </ul>
    <ul>
    <li>
    <a href="https://abraaorochapb.github.io/PokedexJS/" 
    target="_blank">Pokédex</a>
    </li>
    <li>
    <a href="https://abraaorochapb.github.io/AdvancedTodoList-JS/" 
    target="_blank">Todo List</a>
    </li>
    <li>
    <a href="https://abraaorochapb.github.io/proj3CursoFrontEnd-LandingPage/" 
    target="_blank">Landing Page</a>
    </li>
    </ul>
    </div>
    </p>
    </div>`
})

// aqui estou adicionando um evento de click ao elemento "contact", para mudar o conteúdo da página
//utilização da tag form para o formulário
contact.addEventListener('click', () => {
    main.innerHTML = ` <section class="contact-container">
    <h2>Contato</h2>
    <p>Entre em contato comigo</p>
    <form>
      <input type="text" name="name" id="name" placeholder="Nome">
      <input type="email" name="email" id="email" placeholder="E-mail">
      <textarea name="message" id="message" placeholder="Insira sua mensagem"></textarea>
      <input type="submit" value="Enviar">
    </form>
  </section>
</main>`
})
