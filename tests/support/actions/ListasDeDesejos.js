import { expect } from '@playwright/test'

export class ListaDeDesejos {

    constructor(page) {
        this.page = page
    }

    async acessarListaDeDesejos() {
        const linkListaDesejos = await this.page.locator('.footer_one_widget a[href="/wishlist"]')
        await linkListaDesejos.click()

        await expect(this.page.locator('.product_name a[href="/product-details-one/9"]'))
            .toHaveText('Boho Tops for Girls')
    }

    async adicionarProdutoCarrinho() {
        const addCart = await this.page.locator('.product_addcart button[type="button"]').nth(1)
        await addCart.click();
    }

    async removerProdudo() {
        const removerProd = await this.page.locator('.product_remove i[style="cursor: pointer;"]').nth(1)
        await removerProd.click()
    }

    async validarAdicaoDeProduto(quantidadeProd) {
        await expect(this.page.locator('#swal2-title')).toHaveText('Success!')
        await expect(this.page.locator('#swal2-html-container')).toHaveText('Successfully added to your Cart')
        await expect(this.page.locator('.item-count').nth(1)).toHaveText()
        this.validarQuantDeProduto(quantidadeProd) 
    }

    async validarQuantDeProduto(quantidadeProd) {
        await expect(this.page.locator('.item-count').nth(2)).toHaveText(quantidadeProd)
    }

}