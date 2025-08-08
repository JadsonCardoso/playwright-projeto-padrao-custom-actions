import { test, expect } from '../support/index.js'
import { faker } from '@faker-js/faker'

const userEmail = faker.internet.email()

test('Acessando a página de lista de desejos', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
})

test('Adicionando produtos no carrinho', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
    await page.listaDeDesejos.adicionarProdCarrinho()
    await page.listaDeDesejos.validarAdicaoDeProdCarrinho('$153.00')
})

test('Remover produto da página de desejos', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
    await page.listaDeDesejos.removerProdDaPagDesejos()
    await page.listaDeDesejos.validarRemocaoProdListaDeDesejos('3')
})

test('Acessando produto adicionados no Carrinho', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
    await page.listaDeDesejos.adicionarProdCarrinho()
    await page.components.sucesso('Success!', 'Successfully added to your Cart')
    await page.listaDeDesejos.validarAdicaoDeProdCarrinho('$153.00')
})

test('Acessando lista de Desejos', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.acessarProdPelaListadeDesejos()
})

test('Alterando versão do produto', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.acessarProdPelaListadeDesejos()
    await page.listaDeDesejos.alterarVersaoDoProduto('small')
})


test('Adicionando produto no carrinho via tela de detalhes do produto', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.acessarProdPelaListadeDesejos()
    await page.listaDeDesejos.adicionarProdNoCarrinhoTelaDetalhes()
    await page.components.sucesso('Success!', 'Successfully added to your Cart')
    await page.listaDeDesejos.validarValorDoCarrinho('$153.00')
})

test('Adicionando quantidade de produto', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.acessarProdPelaListadeDesejos()
    await page.listaDeDesejos.aumentarQuantidadeProduto()
    await page.listaDeDesejos.validarQuantidadeProduto('2') // Usando para validar aumento na quantidade
    
})

test('Removendo quantidade de produto', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.acessarProdPelaListadeDesejos()
    await page.listaDeDesejos.aumentarQuantidadeProduto()
    await page.listaDeDesejos.removerQuantidadeProduto()
    await page.listaDeDesejos.validarQuantidadeProduto('1') // Usando para validar diminuição na quantidade
    
})