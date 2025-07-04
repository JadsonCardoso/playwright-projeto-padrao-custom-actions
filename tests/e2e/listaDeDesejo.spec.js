import { test, expect } from '../support/index.js'
import { faker } from '@faker-js/faker'

const userEmail = faker.internet.email()

test('Acessando a página de lista de desejos', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
})

test('Adicionado produtos no carrrinho', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
    await page.listaDeDesejos.adicionarProdutoCarrinho()
    await page.listaDeDesejos.validarAdicaoDeProduto('$153.00')
})

test('Remover produto na lista de defeitos', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
    await page.listaDeDesejos.removerProduto()
    await page.listaDeDesejos.validarRemocaoProduto('3')
})

test('Acessando produto adicionados no Carrinho', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarPaginaDeDesejos()
    await page.listaDeDesejos.adicionarProdutoCarrinho()
    await page.components.sucesso('Success!', 'Successfully added to your Cart')
    await page.listaDeDesejos.validarAdicaoDeProduto('$153.00')
})

test('Acessando lista de Desejos', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.acessarProdutoPelaListadeDesejos()
})

test('Alterando versão do produto', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.acessarProdutoPelaListadeDesejos()
    await page.listaDeDesejos.alterarVersaoDoProduto('small')
})


test('Adicionando produto no carrinho via tela de detalhes do produto', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.acessarProdutoPelaListadeDesejos()
    await page.listaDeDesejos.adicionarProdutoTelaDetalhes()
    await page.components.sucesso('Success!', 'Successfully added to your Cart')
    await page.listaDeDesejos.validarValorDoCarrinho('$153.00')
})

test('Adicionando quantidade de produto', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.acessarProdutoPelaListadeDesejos()
    await page.listaDeDesejos.aumentarQuantidadeProduto()
    await page.listaDeDesejos.validarQuantidadeProduto('2') // Usando para validar aumento na quantidade
    
})

test('Removendo quantidade de produto', async ({ page }) => {
    await page.login.fazerLogin(userEmail, '123456')

    await page.listaDeDesejos.acessarListaDeDesejos()
    await page.listaDeDesejos.acessarProdutoPelaListadeDesejos()
    await page.listaDeDesejos.aumentarQuantidadeProduto()
    await page.listaDeDesejos.removerQuantidadeProduto()
    await page.listaDeDesejos.validarQuantidadeProduto('1') // Usando para validar diminuição na quantidade
    
})