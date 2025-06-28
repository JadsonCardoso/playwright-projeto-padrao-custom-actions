import { test, expect } from '../support/index.js'
import { faker } from '@faker-js/faker'

const userEmail = faker.internet.email()
test('Acessar carrinho', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')
    
    await page.carrinhoCompras.acessarCarrinho()

})
