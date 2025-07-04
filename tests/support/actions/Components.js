import { expect } from '@playwright/test'
/// Quando houver elemento com o mesmo HTML E CSS, coque nesse arquivo

export class Components {

    constructor(page) {
        this.page = page
    }

    async mensagemError(texto) {
        await expect(this.page.locator('.errorLabel')).toHaveText(texto)
    }

    async logout() {
        await this.page.locator('.right_list_fix .after_login').hover() // Mover Mouse para o elemento
        await this.page.locator('.custom_dropdown a[href="/my-account#!"]').click()
    }
    
    async sucesso(titulo, texto) {
        await expect(this.page.locator('#swal2-title')).toHaveText(titulo)
        await expect(this.page.locator('#swal2-html-container')).toHaveText(texto)
    }

    
    async clicarEmOk() {
        await this.page.getByText('OK').click()
    }
}