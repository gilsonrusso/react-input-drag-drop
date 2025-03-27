# Masterizando Input com Tailwind e React

Este projeto demonstra como criar um componente de formulário em React com suporte a **drag-and-drop** e **upload de arquivos JSON**, utilizando **Formik** e **Tailwind CSS** para estilização.

## Funcionalidades

- Upload de arquivos JSON via:
  - **Input de arquivo**.
  - **Drag-and-drop**.
- Exibição dinâmica de perguntas carregadas do arquivo JSON.
- Validação e manipulação de dados com **Formik**.

## Tecnologias Utilizadas

- **React** com **TypeScript**
- **Formik** para gerenciamento de formulários
- **Tailwind CSS** para estilização
- **Vite** como bundler

## Como Usar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse o aplicativo em [http://localhost:5173](http://localhost:5173).

## Exemplo de Arquivo JSON

Use um arquivo JSON no seguinte formato para testar o upload:

```json
[
  { "id": "1", "sentenca": "Pergunta 1" },
  { "id": "2", "sentenca": "Pergunta 2" }
]
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria a build de produção.
- `npm run lint`: Verifica erros de lint no código.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
