import { test, expect } from '../support/index.js' // Importando o modulo o index
import { faker } from '@faker-js/faker'

test('Acessar Aplicação', async ({ page }) => {
    await page.login.acessarLogin()
})

test('Login válido', async ({ page }) => {
    const userEmail = faker.internet.email();
    await page.login.acessarLogin()

    await page.login.preencherCampos(userEmail, '123654')
    await page.login.clicarBotaoLogin()

    await page.login.validarSucesso('Login realizado', `Olá, ${userEmail}`)
})

test('Login sem preencher campos', async ({ page }) => {
    await page.login.acessarLogin()

    await page.login.preencherCampos('', '')
    await page.login.clicarBotaoLogin()

    await page.login.validarError('E-mail inválido.')
})

test('Login sem preencher campo Email', async ({ page }) => {
    await page.login.acessarLogin()

    await page.login.preencherCampos('', '123456')
    await page.login.clicarBotaoLogin()

    await page.login.validarError('E-mail inválido.')
})

test('Login sem preencher campo Senha', async ({ page }) => {
    await page.login.acessarLogin()

    await page.login.preencherCampos('testes123@teste.com', '')
    await page.login.clicarBotaoLogin()

    await page.login.validarError('Senha inválida.')
})
