# SEC PASS GENERATOR

Aplicativo gerador de senhas desenvolvido em React Native com Expo, como atividade de faculdade.

## Funcionalidades

- Geração de senha aleatória com o tamanho definido pelo usuário
- Escolha dos tipos de caracteres que entram na senha (feature da tarefa 3, detalhada abaixo)
- Botão para copiar a senha gerada para a área de transferência
- Botões que mudam de cor enquanto são pressionados e voltam à cor original ao soltar

## Feature escolhida (tarefa 3): opções de caracteres

Três switches permitem escolher quais tipos de caracteres podem aparecer na senha:

| Opção | Caracteres | Padrão |
| --- | --- | --- |
| Letras maiúsculas | `A-Z` | ligado |
| Números | `0-9` | ligado |
| Símbolos | `! @ # $ % ^ & * ( ) - _ = + [ ] { } ; : , . < > ?` | ligado |

As letras minúsculas (`a-z`) sempre fazem parte da senha. Com todos os switches ligados, o comportamento é o mesmo da versão anterior do app.

## Tecnologias

- [Expo](https://expo.dev/) SDK 54
- React Native 0.81
- React 19
- TypeScript
- expo-clipboard

## Como executar

Pré-requisito: Node.js instalado e o app Expo Go no celular (ou um emulador).

```bash
npm install
npm start
```

Depois, escaneie o QR code com o Expo Go ou use um dos atalhos:

```bash
npm run android
npm run ios
npm run web
```

## Estrutura do projeto

```
src/
├── components/
│   ├── ButtonPass/      # campos, switches e botões (gerar e copiar)
│   ├── Logo/            # título e logo do app
│   └── TextInputPass/   # campo que exibe a senha gerada
├── screens/
│   └── Home.tsx         # tela principal
└── services/
    └── passwordService.ts  # lógica de geração da senha
```
