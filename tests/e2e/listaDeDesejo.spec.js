import { test, expect } from '../support/index.js'
import { faker } from '@faker-js/faker'

const userEmail = faker.internet.email()

test('Acessando a página de lista de desejos', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
})

test('Adicionado produtos no carrrinho', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
    await page.listaDeDesejos.adicionarProdutoCarrinho()
    await page.listaDeDesejos.validarAdicaoDeProduto()
})

test('Remover produto na lista de defeitos', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
    await page.listaDeDesejos.removerProduto()
    await page.listaDeDesejos.validarRemocaoProduto('3')
})

test('Acessando produto adicionados no Carrinho', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
    await page.listaDeDesejos.adicionarProdutoCarrinho()
    await page.listaDeDesejos.validarAdicaoDeProduto()
})

test('Acessando lista de Desejos', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')
    
    await page.listaDeDesejos.acessarListaDeDesejos()
})