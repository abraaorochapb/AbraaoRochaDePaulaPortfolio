// aqui estamos selecionando os elementos com o querySelector
const about = document.querySelector('.about');
const education = document.querySelector('.education');
const contact = document.querySelector('.contact');
const portfolio = document.querySelector('.portfolio');
const main = document.querySelector('.main');

// aqui estou adicionando um evento ao elemento, para mudar o conteúdo da página
about.addEventListener('click', () => {
    main.innerHTML = `<h1>Sobre mim</h1>
    <p> Olá eu me chamo Abraão Rocha de Paula, tenho 20 anos e moro no Paraná, nesta
    seção irei falar um pouco sobre mim e meus hobbies, eu realmente sou fascinado 
    por tecnologia, então em meu tempo livre acabo pesquisando e estudando sobre,
    também adoro ouvir música, assistir animes, ler mangás, jogar video games e
    sair com meus amigos.</p>
    <p>Entre meus Animes/Mangás favoritos estão Death Note, Neon Genesis Evangelion,
    Code Geass e Steins;Gate, meu estilo musical favorito no momento é o Metal,
    Apesar de eu ser muito Eclético, e entre os jogos que mais gosto estão
    Lost Ark, BloodBorne e New World</p>`
})