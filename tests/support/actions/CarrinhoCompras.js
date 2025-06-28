import { expect } from "@playwright/test"

export class CarrinhoCompras {
    constructor(page) {
        this.page = page
    }

    async acessarCarrinho() {
        await this.page.locator('.item-count').nth(1).click()
        await expect(this.page.getByText('View Cart')).toBeVisible()
    }
    
}