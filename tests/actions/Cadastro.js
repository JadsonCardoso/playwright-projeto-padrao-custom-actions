import { expect } from '@playwright/test'

export class Cadastro {

    constructor(page) {
        this.page = page
    }

    async acessarCadastro() {
        await this.page.goto('https://automationpratice.com.br/register')

        const cadastroForm = this.page.locator('.account_form')
        await expect(cadastroForm).toBeVisible()
    }

    async submeterCadastro(nome, email, senha) {
        await this.page.locator('#user').fill(nome)
        await this.page.locator('#email').fill(email)
        await this.page.locator('#password').fill(senha)
        await this.page.locator('#btnRegister').click()
    }

    async clicarCadastrar() {
        await this.page.locator('#btnRegister').click()
    }
    
    async validarCadastroSucesso(nome) {
    await this.page.waitForLoadState('networkidle')
    await expect(this.page.locator('#swal2-title')).toHaveText('Cadastro realizado!')
    await expect(this.page.locator('#swal2-html-container')).toHaveText(`Bem-vindo ${nome}`)
    await expect(this.page).toHaveURL(/.*my-account/)
  }


} 