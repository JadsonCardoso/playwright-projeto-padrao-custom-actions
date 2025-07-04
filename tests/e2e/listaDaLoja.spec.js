import { test, expect } from '../support/index.js'
import { faker } from '@faker-js/faker'

test('Acessar Lista da Loja', async ({ page }) => {
    const userEmail = faker.internet.email()
    await page.login.acessarLogin()
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDaLoja.acessarListaDaLoja()
    await page.listaDaLoja.validacaoTelaDaLoja()

    await page.waitForTimeout(2000)
})

test('Adicionando produto via Lista da Loja', async ({ page }) => {
    const userEmail = faker.internet.email()
    await page.login.acessarLogin()
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDaLoja.acessarListaDaLoja()
    await page.listaDeDesejos.adicionarProdutosCarrinho('$179.00')

    await page.waitForTimeout(2000)
})