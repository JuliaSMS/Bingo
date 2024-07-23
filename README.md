# Bingo Card Frontend

Este é um projeto simples de front-end para criar uma cartela de bingo. O projeto é implementado usando HTML, CSS e JavaScript e tem como objetivo proporcionar uma interface visual para um jogo de bingo.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página e dos elementos da cartela de bingo.
- **CSS**: Estilização e layout da cartela de bingo.
- **JavaScript**: Funcionalidade interativa da cartela de bingo.

## Funcionalidades

- Geração de uma cartela de bingo aleatória com números.
- Estilização responsiva para diferentes tamanhos de tela.
- Interface simples e intuitiva para o usuário.

## Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/JuliaSMS/Bingo.git
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd Bingo
    ```

3. **Abra o arquivo `index.html` em seu navegador:**

    O projeto não requer instalação de dependências. Você pode simplesmente abrir o arquivo `index.html` em qualquer navegador da web para ver a cartela de bingo em ação.

## Uso

1. **Geração da Cartela:**

    A cartela de bingo será gerada automaticamente quando a página for carregada.

2. **Interação:**

    A cartela de bingo apresenta uma tabela com números aleatórios. Cada célula representa um número do bingo, e o layout é responsivo para diferentes tamanhos de tela.

## Estrutura do Projeto

- **index.html**: Contém a estrutura HTML da cartela de bingo.
- **styles.css**: Define a aparência e o layout da cartela de bingo.
- **script.js**: Implementa a lógica para gerar números aleatórios e preencher a cartela.

## Exemplo de Código

### `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartela de Bingo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="bingo-container">
        <table id="bingo-card">
            <!-- A cartela de bingo será gerada aqui -->
        </table>
    </div>
    <script src="script.js"></script>
</body>
</html>
