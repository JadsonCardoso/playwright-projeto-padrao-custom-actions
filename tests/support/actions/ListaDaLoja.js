import { expect } from "@playwright/test";

export class ListaDaLoja {
    constructor(page) {
        this.page = page
    }

    async acessarListaDaLoja() {
        await this.page.getByRole('link', {name: 'Shop'}).first().hover()
        await this.page.getByRole('link', {name: 'Shop List View'}).click()
    }

    async validacaoTelaDaLoja() {
        await expect(this.page.getByText('T-Shirt For Men')).toBeVisible()
    }
}