# AnkiAdd 2.0

Automate the process of adding flashcards for English learners in Anki. For now, this project only gives English definitions and examples. If you want to use this project in you google extension check [AnkiAdd2.0_Extension](https://github.com/maarcotulio/AnkiAdd2.0_Extension) for more information about it.

## Run Locally

Clone the project

```bash
  git clone https://github.com/maarcotulio/AnkiAdd2.0.git
```

Go to the project directory

```bash
  cd AnkiAdd2.0
```

Install dependencies

```bash
  pnpm install
```

Start the api

```bash
  pnpm start:dev
```

Start the fe

```bash
  pnpm dev
```

Open Anki and make sure to already have in your Add-ons the [AnkiConnect](https://ankiweb.net/shared/info/2055492159) with these configurations.

```JSON
{
    "apiKey": null,
    "apiLogPath": null,
    "ignoreOriginList": [],
    "webBindAddress": "127.0.0.1",
    "webBindPort": 8765,
    "webCorsOriginList": [
        "http://localhost"
    ]
}
```

## Built With

- [Dictionary API](https://dictionaryapi.dev/)
- Nest.js
- Vite
