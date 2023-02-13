# Requisitos

1. Instale o nodeJs na sua máquina
2. Pegue uma key da API TMDB
>pode pegar uma através de: <a href="https://developers.themoviedb.org/3/getting-started/introduction#:~:text=below%20for%20help%3A-,Click,-on%20your%20avatar">The Movie DB getting started</a>. 
>Siga todos os passos e você não deve ter problema

# Instalando
Para utilizar o projeto:
1. Na linha de comando esteja em "BetterFlix\frontend"
2. Execute "npm i"
3. Criei uma variável de ambiente, pode ser feito no PowerShell dessa forma
```
 $env:REACT_APP_API_KEY="(TMDB_API_KEY)";
```
> Tire os parenteses, isso é só uma demonstração de como ficaria sua imdb key 
> e.g. com key fictícia : `$env:REACT_APP_API_KEY="123-KeyFicticia-123";`

4. Nesse ponto o projeto deve estar pronto para ser executado, digite `npm start` para rodar
