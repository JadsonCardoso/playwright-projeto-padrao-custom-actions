import { test, expect } from '../support/index.js'
import { faker } from '@faker-js/faker'

const userEmail = faker.internet.email()

test('Acessando lista de desejos', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
})

test('Adicionado produtos no carrrinho', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.adicionarProdutoCarrinho()
    await page.listaDeDesejos.validarAdicaoDeProduto('4')
})

test('Remover no carrrinho', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.removerProdudo()
    await page.listaDeDesejos.validarQuantDeProduto('3')
})