import { expect } from '@playwright/test'

export class ListaDeDesejos {

    constructor(page) {
        this.page = page
    }

    async acessarPaginaDeDesejos() {
        const linkListaDesejos = await this.page.locator('.footer_one_widget a[href="/wishlist"]')
        await linkListaDesejos.click()

        await expect(this.page.locator('.product_name a[href="/product-details-one/9"]'))
            .toHaveText('Boho Tops for Girls')
    }

    async adicionarProdutoCarrinho() {
        const addCart = await this.page.locator('.product_addcart button[type="button"]').first()
        await addCart.click();
    }

    async removerProduto() {
        const removerProd = await this.page.locator('.product_remove i[style="cursor: pointer;"]').nth(1)
        await removerProd.click()
    }

    async validarAdicaoDeProduto() {
        await expect(this.page.locator('#swal2-title')).toHaveText('Success!')
        await expect(this.page.locator('#swal2-html-container')).toHaveText('Successfully added to your Cart')
        await expect(this.page.locator('.item-count').nth(1)).toHaveText('4')
        await this.page.locator('.item-count').nth(1).click()
        await expect(this.page.locator('a[href="/product-details-one/9"]').nth(1)).toHaveText('Boho Tops for Girls')
    }

    async validarRemocaoProduto(quantidadeProd) {
        await expect(this.page.getByText('Skater Dress')).toBeHidden()
        await expect(this.page.locator('.item-count').nth(2)).toHaveText(quantidadeProd)
        await this.page.locator('a[href="#offcanvas-wishlish"] .item-count').nth(0).click()
        await expect(this.page.getByText('Skater Dress')).toBeHidden()
    }

    async acessarListaDeDesejos() {
        await this.page.locator('a[href="#offcanvas-wishlish"] .item-count').nth(0).click()
        await expect(this.page.getByText('View wishlist')).toBeVisible()
    }

}