<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## MONGON KÄYTTÖ -- Lotten kirjoittama

Mongodbn käyttönotto

Lataa koneelle uusin mongodb

Katso jokin video-ohje, esimerkiksi (huom, lataussivu näyttää eriltä)

[webdevsimplifiedin tutoriaali](https://www.youtube.com/watch?v=wcx3f0eUiAw)

osoite: https://www.mongodb.com/docs/manual/administration/install-community/

avatusta mongodb-yhteydestä saat localhost-osoitteen

määritä .env-muuttuja DB_URI = localhost-osoite/database

(/database) on oman databasen nimi joka sisältää collectioneja, jotka sisältävät varsinaiset tiedot

Jos ei määritä jotain databasea niin kaikki tiedot menevät test-databaseen joka luodaan automaattisesti

//Yritin parhaani näiden ohjeiden kanssa, mutta viestitkää minulle tarvittaessa - Lotte

## backendin käyttö

# API Dokumentaatio

<details>
  <summary>Emails</summary>
  
### Emails

#### GET /emails

Palauttaa listan email-entryistä tietokannassa.

Request: ei mitään

Response: tietokannan kaikki email-entryt

```
[
    {
        "_id": "65f2dcc313abfda4183a1ff5",
        "source": "short-term rental",
        "textField": "content",
        "furnishingLevel": "Standard",
        "roomChoices": {
            "noDataSent": true
        },
        "name": "content",
        "email": "content",
        "createdAt": "2024-03-14T11:17:23.601Z",
        "updatedAt": "2024-03-14T11:17:23.601Z"
    },
    {
        "_id": "65f2dcda13abfda4183a1ff8",
        "source": "short-term rental",
        "textField": "content",
        "furnishingLevel": "Standard",
        "roomChoices": {
            "bigRoom": true
        },
        "name": "content",
        "email": "content",
        "createdAt": "2024-03-14T11:17:46.421Z",
        "updatedAt": "2024-03-14T11:17:46.421Z"
    }
]
```

#### DELETE /emails/id

Poistaa tietyn email-entryn id:n perusteella

Request: ei mitään

Response (toistaiseksi): poistettu email-entry

#### POST /emails/id

Lisää email-entryn, lähetä siis tämäntyylinen objekti. roomChoicesissa voi
olla kuinka monta avainta tahansa, bigRoom on vain esimerkki. Jos roomChoicesissa
ei yhtään avainta, lisätään sinne avain ja arvo "noDataSent": true

Request:

```
{
  "source": "short-term rental",
  "textField": "content",
  "furnishingLevel": "Standard",
  "roomChoices": {
    "bigRoom": true
  },
  "name": "content",
  "email": "content"
}
```

Response: Lisätyt timestampit ja automaattisesti luotu "\_id"

```
{
    "source": "short-term rental",
    "textField": "content",
    "furnishingLevel": "Standard",
    "roomChoices": {
        "bigRoom": true
    },
    "name": "content",
    "email": "content",
    "_id": "65f2df7d26fc359115aa7512",
    "createdAt": "2024-03-14T11:29:01.437Z",
    "updatedAt": "2024-03-14T11:29:01.437Z"
}
```

</details>
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

```

```
