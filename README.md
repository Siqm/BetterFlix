# O projeto



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
