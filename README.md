# AnkiAdd 2.0

Automate the process of adding flashcards for English learners in Anki. For now, this project only gives English definitions and examples. If you want to use this project as extension use the "Extension" folder, instead of "Website".

## Run Locally

Clone the project

```bash
  git clone https://github.com/maarcotulio/AnkiAdd2.0.git
```

Go to the project directory

```bash
  cd AnkiAdd2.0
```

Install dependencies of the API, choice what version you want to use extension or website, these are in the fe folder and don't forget to install the dependencies too

```bash
  pnpm install
```

Start the API

```bash
  pnpm start:dev
```

### Website

To run it use

```bash
  pnpm dev
```

Click on the link it'll appear in your terminal and enjoy!

### Extensions

Inside the extension folder make sure you already have installed the dependencies and create a build.

```bash
  pnpm build
```

The build command it'll create a dist folder, go to your browser extensions and activate the developer mode, then load the dist file to the browser and now just click to the extension to use it.

---

<br>
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
