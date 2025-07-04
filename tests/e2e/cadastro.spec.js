import { test, expect } from '../support/index.js'
import { faker } from '@faker-js/faker'

const userName = faker.person.fullName(); // Nome aleatório
const userEmail = faker.internet.email(); // Email Aleatório

test('Cadastro com sucesso', async ({ page }) => {
    await page.cadastro.acessarCadastro()
    await page.cadastro.submeterCadastro(userName, userEmail, '123456')
    await page.components.sucesso('Cadastro realizado!', `Bem-vindo ${userName}`)
    await page.components.clicarEmOk()
    await page.cadastro.cadastroSucesso(userName)
    await page.waitForTimeout(2000)

})

test('Não deve cadastrar sem preencher o formulário', async ({ page }) => {
    await page.cadastro.acessarCadastro()
    await page.cadastro.submeterCadastro('', '', '')
    
    await page.components.mensagemError('O campo nome deve ser prenchido')
})

test('Não deve cadastrar se os campos email e senha não forem preenchidos', async ({ page }) => {
    await page.cadastro.acessarCadastro()
    await page.cadastro.submeterCadastro(userName, '', '')

    await page.components.mensagemError('O campo e-mail deve ser prenchido corretamente')
})

test('Não deve cadastrar se os campos nome e senha não forem preenchidos', async ({ page }) => {
    await page.cadastro.acessarCadastro()
    await page.cadastro.submeterCadastro('', userEmail, '')

    await page.components.mensagemError('O campo nome deve ser prenchido')
})

test('Não deve cadastrar se o campo senha não for preenchido', async ({ page }) => {
    await page.cadastro.acessarCadastro()
    await page.cadastro.submeterCadastro(userName, userEmail, '')

    await page.components.mensagemError('O campo senha deve ter pelo menos 6 dígitos')
})

test('Não deve cadastrar com email inválido', async ({ page }) => {
    await page.cadastro.acessarCadastro()
    await page.cadastro.submeterCadastro(userName, 'wwww.dddd', '123456')

    await page.components.mensagemError('O campo e-mail deve ser prenchido corretamente')
})


test('Não deve cadastrar se senha for menor que 6 caracteres', async ({ page }) => {
    await page.cadastro.acessarCadastro()
    await page.cadastro.submeterCadastro(userName, userEmail, '123')

    await page.components.mensagemError('O campo senha deve ter pelo menos 6 dígitos')
})
