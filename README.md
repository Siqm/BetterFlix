# O projeto

Uma aplicação ReactJs que consome a API <a href="https://www.themoviedb.org/">The Movie DB</a> em alguns endpoints específicos.
Os endpoints consumidos são:
1. De imagem (para posters), <a href="https://developers.themoviedb.org/3/getting-started/images">mais informações</a>
2. Para detalhar um filme, <a href="https://developers.themoviedb.org/3/movies/get-movie-details">mais informações</a>
3. Lista de filmes em cartaz, <a href="https://developers.themoviedb.org/3/movies/get-now-playing">mais informações</a>
4. Lista dos melhores avaliados, <a href="https://developers.themoviedb.org/3/movies/get-top-rated-movies">mais informações<a/>
5. Lista dos filmes que irão lançar, <a href="https://developers.themoviedb.org/3/movies/get-upcoming">mais informações</a>
 
Utilizei esse conteúdo para montar todas as páginas da aplicação, a página Home irá apresetar as listas, Movie irá detalhar um filme escolhido pelo usuário e Favorites mostrará a lista de filmes salvos localmente

## Requisitos

1. Instale o nodeJs na sua máquina
2. Pegue uma key da API TMDB
>pode pegar uma através de: <a href="https://developers.themoviedb.org/3/getting-started/introduction#:~:text=below%20for%20help%3A-,Click,-on%20your%20avatar">The Movie DB getting started</a>

## Começando
Para utilizar o projeto:
1. Na linha de comando esteja em "BetterFlix\frontend"
2. Execute "npm i"
3. Criei uma variável de ambiente, pode ser feito no PowerShell dessa forma
```
 $env:REACT_APP_API_KEY="(TMDB_API_KEY)";
```
> Tire os parenteses, isso é só uma demonstração de como ficaria sua imdb key 
> e.g. com key fictícia : `$env:REACT_APP_API_KEY="123-KeyFicticia-123";`

.4 Nesse ponto o projeto deve estar pronto para ser executado, digite `npm start` para rodar

## Estrutura do projeto

* `./frontend/` é a pasta raiz do projeto, contem o aplicativo react, suas rotas e estilos globais
* `./frontend/src/components` contem os "pedaços" primordiais do site, que se repetem nas páginas
    * `<Error>` Conteúdo que aparecerá se o usuário acessar uma rota inexistente
    * `<Header>` Header que estará disponível em todas as páginas
* `./frontend/src/pages` Todas as páginas que estarão disponíveis
    * `<Favorites>` Página que exibe os filmes salvos localmente pelo usuário
    * `<Home>` Página principal da aplicação, Exibe listas de filmes
        * Esses dados são extraídos da aplicação TMDB
    * `<Movie>` Página responsável por mostrar detalhes do filme escolhido na "Home"
        * Disponibiliza a opção de Salvar como favorito e também redireciona para trailer no youtube
* `/frontend/src/services` Responsável por fazer a conexão com a API, utiliza axios
