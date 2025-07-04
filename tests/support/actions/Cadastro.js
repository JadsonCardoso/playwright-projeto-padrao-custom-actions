import { expect } from '@playwright/test'

export class Cadastro {

    constructor(page) {
        this.page = page
    }

    async acessarCadastro() {
        await this.page.goto('/register')

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

    async cadastroSucesso(nome) {
        const logueUser = this.page.locator('#userLogged')
        await expect(logueUser).toContainText(nome)
    }
    
    async clicarEmOk() {
        await this.page.getByText('OK').click()
    }

} 