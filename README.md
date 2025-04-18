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

## Controle de Versão

Para realizar o **bump de versão**, siga os passos abaixo:

1. Crie um **Pull Request** para os branches `main` ou `stage`.
2. Adicione uma das labels ao PR para definir o tipo de versão:
   - **major** → Incrementa de `1.0.0` para `2.0.0`.
   - **minor** → Incrementa de `1.0.0` para `1.1.0`.
   - **patch** → Incrementa de `1.0.0` para `1.0.1`.
   - **pre-release** → Cria uma tag como `1.0.1-beta`.
3. Ao fazer o merge do PR, o **GitHub Actions** gera automaticamente a tag correspondente.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
