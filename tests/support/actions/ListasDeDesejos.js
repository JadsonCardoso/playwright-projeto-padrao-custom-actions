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


    async acessarListaDeDesejos() {
        await this.page.locator('a[href="#offcanvas-wishlish"] .item-count').nth(0).click()
        await expect(this.page.getByText('View wishlist')).toBeVisible()
    }

    async acessarProdutoPelaListadeDesejos() {
        await this.page.locator('a[href="/product-details-one/9"]').nth(1)
            .getByText('Boho Tops for Girls').click()

        await expect(this.page.locator('.customs_sel_box')).toBeVisible()

    }

    async alterarVersaoDoProduto(modelo) {
        await this.page.locator('.customs_sel_box').selectOption({ value: modelo });
    }

    async adicionarProdutoTelaDetalhes() {
        const addCart = await this.page.locator('a[class="theme-btn-one btn-black-overlay btn_sm"]')
        addCart.click()
    }

    async aumentarQuantidadeProduto() {
        await this.page.locator('i[class="fa fa-plus"]').click()
    }

    async adicionarProdutosCarrinho(subtotal) {
        await this.page.getByText('Add to cart').first().click()
        await expect(this.page.locator('.item-count').nth(1)).toHaveText('4')
        await this.page.locator('.item-count').nth(1).click()
        await expect(this.page.locator('a[href="/product-details-one/2"]').nth(1)).toHaveText('T-Shirt For Men')
        await this.validarValorDoCarrinho(subtotal)
    }

    async removerQuantidadeProduto() {
        await this.page.locator('i[class="fa fa-minus"]').click()
    }

    async validarAdicaoDeProduto(subtotal) {
        await expect(this.page.locator('.item-count').nth(1)).toHaveText('4')
        await this.page.locator('.item-count').nth(1).click()
        await this.validarValorDoCarrinho(subtotal)
        await expect(this.page.locator('a[href="/product-details-one/9"]').nth(1)).toHaveText('Boho Tops for Girls')
    }


    async validarRemocaoProduto(quantidadeProd) {
        await expect(this.page.getByText('Skater Dress')).toBeHidden()
        await expect(this.page.locator('.item-count').nth(2)).toHaveText(quantidadeProd)
        await this.page.locator('a[href="#offcanvas-wishlish"] .item-count').nth(0).click()
        await expect(this.page.getByText('Skater Dress')).toBeHidden()
    }


    async validarValorDoCarrinho(subtotal) {
        await expect(this.page.locator('.offcanvas-cart-total-price-value')).toHaveText(subtotal)
    }

    async validarQuantidadeProduto(quantidade) {
        await expect(this.page.locator(`input[value="${quantidade}"]`)).toBeVisible()
    }
}