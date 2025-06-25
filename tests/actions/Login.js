import { expect } from '@playwright/test'

export class Login {

    constructor(page) {
        this.page = page
    }

async acessarLogin() {
    await this.page.goto('https://automationpratice.com.br/login');
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

async validarSucesso(mensagemSucesso, validarEmail) {
    await expect(this.page.locator('#swal2-title')).toHaveText(mensagemSucesso)
    await expect(this.page.locator('#swal2-html-container')).toHaveText(validarEmail)
  }

  async clicarEmOk() {
    await this.page.getByText('OK').click()
  }
}
