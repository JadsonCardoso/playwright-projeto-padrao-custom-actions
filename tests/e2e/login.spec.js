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
    await page.components.sucesso('Login realizado', `Olá, ${userEmail}`)
    await page.components.clicarEmOk()
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

test('Após falha de login, deve ser  possível login após preencher campos com dados válidos', async ({ page }) => {
    const userEmail = faker.internet.email();

    // Tentativa de logim com dados vazios
    await page.login.acessarLogin()
    await page.login.preencherCampos('testes123@teste.com', '')
    await page.login.clicarBotaoLogin()
    await page.login.validarError('Senha inválida.')

    // Tentativa de logim com após falha
    await page.login.preencherCampos(userEmail, '123654')
    await page.login.clicarBotaoLogin()
    await page.components.sucesso('Login realizado', `Olá, ${userEmail}`)
})

test('Realizar Logout', async ({ page }) => {
    const userEmail = faker.internet.email();

    await page.login.fazerLogin(userEmail, '123456')

    await page.components.logout()
    await page.components.sucesso('Logout realizado', 'Obrigado, e volte sempre!')

})

