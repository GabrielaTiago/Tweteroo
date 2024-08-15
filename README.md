<p align="center"><img src="https://images.emojiterra.com/google/android-11/512px/1f426.png" height="80px"/></p>

# <p align = "center">Tweteroo</p>

### <p align = "center">API Tweteroo</p>

<div align = "center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" heigth="30px"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" heigth="30px"/>
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" heigth="30px">
  <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" heigth="30px"/>
</div>

## :clipboard: Descrição

Este é um projeto de uma API baseada em algumas funcionalidades da rede social Twitter. Construído com as tecnologias JavaScript, Nodejs, Express.

A API Fornece rotas de login de usuários, visualização de todos os tweets com paginação, visualização de tweets de um usuário em específico e criação de novos tweets.

## :world_map: Rotas

#### [POST] /sign-up

```yml
- Rota para login de um novo usário
- Inputs são obrigatórios
- username: string,
- avatar: string

- body:
    {
      "username": "Adele",
      "avatar": "https://i.pinimg.com/736x/13/b2/18/13b218257756135657857ce8f43daa58.jpg",
    }
```

**Retornos:**

| Status Code | Situação                   |
| :---------: | -------------------------- |
| 201         | Usuário logado com sucesso |
| 409         | Uuário já logado           |
| 422         | Nenhum 'body' enviado      |
| 422         | Username inválido          |
| 422         | Avatar inválido            |

$~$

#### [GET] /tweets?page=1

```yml
- Rota para buscar todas os tweets
- Possui paginação

- response:
    [
      {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o Patrik",
      },
      {
        username: "batman",
        avatar: "https://i.pinimg.com/originals/0f/2c/cf/0f2ccffa34f17064ec57234d2d6c8b52.jpg",
        tweet: "Faça seus medos terem medo de você",
      },
      {
        username: "MulherMaravilha",
        avatar: "https://i.pinimg.com/736x/e5/a1/05/e5a10519e7cf7658171b7d957874455c.jpg",
        tweet: "Maior que a tristeza de não ter vencido é a vergonha de não ter lutado",
      },
      ...,
    ]
```

**Retornos:**

| Status Code | Situação          |
| :---------: | ----------------- |
| 200         | Retorna os tweets |

$~$

#### [GET] /tweets/:username

```yml
- Rota para buscar tweets específicos de um usuário
- params: "MulherMavarilha"
- response:
    [
      {
        username: "MulherMaravilha",
        avatar: "https://i.pinimg.com/736x/e5/a1/05/e5a10519e7cf7658171b7d957874455c.jpg",
        tweet: "Maior que a tristeza de não ter vencido é a vergonha de não ter lutado",
      },
      {
        username: "MulherMaravilha",
        avatar: "https://i.pinimg.com/736x/e5/a1/05/e5a10519e7cf7658171b7d957874455c.jpg",
        tweet: "Tenha fé no final essa será sua maior arma",
      },
      {
        username: "MulherMaravilha",
        avatar: "https://i.pinimg.com/736x/e5/a1/05/e5a10519e7cf7658171b7d957874455c.jpg",
        tweet: "Você é mais forte do que pensa",
      },
    ]
```

**Retornos:**

| Status Code | Situação                     |
| :---------: | ---------------------------- |
| 200         | Retorna os tweets do usuário |

$~$

## :rocket: Rodando esse projeto localmente

Para inicializar esse projeto é necessário que você possua a última versão estável do [Node.js](https://nodejs.org/en/download) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro de tudo, clone este projeto ou faça o download do ZIP.

Para realizar o clone, no terminal de sua máquina, utilize o [git](https://git-scm.com/) e insira o seguinte comando:

```bash
    https://github.com/GabrielaTiago/Tweteroo.git
```

Entre na pasta do projeto

```bash
    cd Tweteroo
```

Execute o seguinte comando para instalar as dependências.

```bash
    npm install
```

Criar um arquivo **.env** na raíz do projeto com o seguinte dado:

#### env

```bash
    PORT=5000
```

Para iniciar o servidor, execute o comando:

```bash
    npm run start
```

A aplicação estará disponível em: <http://localhost:5000> no seu navegador.

## :bulb: Reconhecimentos

- [Badges para Github](https://github.com/alexandresanlim/Badges4-README.md-Profile#-database-)
- [Inspiração de README](https://gist.github.com/luanalessa/7f98467a5ed62d00dcbde67d4556a1e4#file-readme-md)
- [Driven Education](https://www.driven.com.br)

## :muscle: Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhoria, abra uma _issue_ ou envie um _pull request_.

## :woman_technologist: Autora

Gabriela Tiago de Araújo

- email: <gabrielatiagodearaujo@outlook.com>
- linkedin: <https://www.linkedin.com/in/gabrielatiago/>
- portfolio: <https://gabrielatiago.vercel.app>

$~$

[🔝 Back to top](#api-tweteroo)
