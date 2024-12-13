---

# Shopee Cart

Bem-vindo ao projeto Shopee Cart! Este projeto implementa um carrinho de compras simples que permite adicionar, remover e calcular o total dos itens no carrinho.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- **`cart.js`**: Contém as funções principais para manipular o carrinho de compras.
- **`index.js`**: Arquivo principal onde o carrinho é inicializado e utilizado.
- **`item.js`**: Contém a função para criar itens a serem adicionados no carrinho.

## Funcionalidades

### cart.js

Este arquivo inclui as funções para:

- **Adicionar Item**: Adiciona um item ao carrinho.
- **Calcular Total**: Calcula o valor total dos itens no carrinho.
- **Deletar Item**: Remove um item do carrinho baseado no nome.
- **Remover Item**: Diminui a quantidade de um item ou o remove se for o último.
- **Mostrar Itens do Carrinho**: Exibe todos os itens presentes no carrinho.

### item.js

Este arquivo fornece a função para criar um item com nome, preço, quantidade e subtotal.

### index.js

Arquivo principal que demonstra o uso do carrinho de compras:

- Inicializa o carrinho.
- Cria itens.
- Adiciona e remove itens do carrinho.
- Mostra os itens do carrinho.
- Calcula o total do carrinho.

## Como Utilizar

1. **Clone o repositório**: Baixe ou clone este repositório para sua máquina local.
2. **Instale as dependências**: Certifique-se de ter o Node.js instalado e instale quaisquer dependências necessárias.
3. **Execute o projeto**: Utilize um ambiente Node.js para rodar o arquivo `index.js` e visualizar as operações do carrinho de compras.

```bash
node index.js
```

---
