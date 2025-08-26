# Weather ChatGPT App

This demo shows how to build a small weather-focused chat interface using React and the OpenAI API. It illustrates many React concepts:

- **Local state** via `useState`
- **Global state** with Zustand
- **Context** through a theme provider
- **Side effects** using `useEffect`
- **Prop drilling** between atomic design components

## Getting an OpenAI API key
1. Create an account at [platform.openai.com](https://platform.openai.com/).
2. Visit the [API keys page](https://platform.openai.com/account/api-keys) and generate a new secret key.
3. Copy `.env.example` to `.env` and place the key as `VITE_OPENAI_API_KEY`.

```
VITE_OPENAI_API_KEY=sk-...
```

> **Note:** Exposing your key in the browser is for learning only. In production you should proxy requests through a backend.

## Running the app
```bash
npm install
npm run dev
```

Ask questions like “What is the weather in Tokyo?” and the assistant will respond using the OpenAI Chat Completions API.
