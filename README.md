# Nublue
Desafio técnico para vaga de QA na empresa [Webjump](https://webjump.ai/).

O desafio consistia na automação web do [site](https://magento2-demo.magebit.com/) utilizando a ferramenta [Cypress](https://www.cypress.io/).

## Requisitos
- [Node](https://nodejs.org) >= v18.16.0
- [Git](https://git-scm.com/)

## Instalação e execução
```
$ git clone https://github.com/Bhyan/nublue.git
$ cd nublue/
$ npm install
$ npm run headless
```

# Bibliotecas externas
[Faker JS](https://fakerjs.dev/) - Biblioteca usada para gerar dados aleatórios.

# Cenários automatizados
- Cadastro de usuário
- Login
- Adicionar produto ao carrinho
- Finalização de compra

# Cenários a fazer
- Esqueci minha senha
- Adicionar produto ao carrinho em fluxos alternativos:
- Página de produto
- Busca
- Validação do pedido realizado
- Lista de pedido
- Detalhe do pedido

# Ponto de melhoria
- Remover o wait explícito para aguardar o carregamento dos SKUs na [página de produto](https://github.com/Bhyan/nublue/blob/main/cypress/support/page/product.js#L9).

