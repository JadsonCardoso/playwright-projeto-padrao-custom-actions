import { expect } from '@playwright/test'

export class Login {

    constructor(page) {
        this.page = page
    }

    async fazerLogin(email, senha) {
        await this.acessarLogin()
        await this.preencherCampos(email, senha)
        await this.clicarBotaoLogin()
        await this.clicarEmOk()
    }

    async acessarLogin() {
        await this.page.goto('/login');
        await expect(this.page.locator('#btnLogin')).toHaveText('login')
    }

    async preencherCampos(email, senha) {
        await this.page.locator('#user').fill(email)
        await this.page.locator('#password').fill(senha)
    }

    async clicarBotaoLogin() {
        await this.page.locator('#btnLogin').click()
    }

    async validarError(mensagemError) {
        await expect(this.page.locator('//span[@class="invalid_input"]')).toHaveText(mensagemError)
    }


    async clicarEmOk() {
        await this.page.getByText('OK').click()
    }
}
