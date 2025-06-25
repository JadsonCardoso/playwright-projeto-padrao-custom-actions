# Projeto de Testes Automatizados com Playwright
Este projeto utiliza o [Playwright](https://playwright.dev/) para automação de testes end-to-end em aplicações web. Ele foi desenvolvido com o objetivo de garantir a qualidade e estabilidade da aplicação através de testes robustos, rápidos e confiáveis.

## Estrutura do Projeto

```
- e2e/                  # Casos de teste organizados por grupos funcionais
- actions/              # Actions (métodos reutilizáveis)
- index.js/             # Configurações (credenciais, visual, contextos)
- fixtures/             # JSON, Imagens, etc (para massa de testes)
- utils/                # Utilitários e helpers reutilizáveis
- playwright.config.ts  # Configurações globais do Playwright
```

## 💻 Tecnologias
- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)
- JavaScript
- [Faker.js](https://fakerjs.dev/)


## 🤖 Como executar

1. Clonar o repositório, instalar as dependências
```
npm install
```

2. Executar testes em Headless
```
npx playwright test 
```

3. Executar ver o relatório dos testes
```
npx playwright show-report
```
# 🤖 Integração Contínua com GitHub Actions

Este repositório utiliza **GitHub Actions** para executar testes automatizados com [Playwright](https://playwright.dev/) sempre que houver um `push` ou `pull request` nas branches `main` ou `master`.

---

## 🛠️ Arquivo de Workflow

O workflow está localizado em: .github/workflows/playwright.yml

📦 O que esse workflow faz:
Instala o Node.js (versão LTS)

Instala as dependências do projeto (npm ci)

Instala os navegadores usados pelo Playwright

Executa os testes (npx playwright test)

Faz upload do relatório de testes como artefato

✅ Como visualizar o relatório:
Vá até a aba Actions no seu repositório GitHub.

Selecione uma execução.

Vá até a seção Artifacts e baixe o playwright-report.

