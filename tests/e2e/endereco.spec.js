import { test, expect } from '../support/index.js' // Importando o modulo o index
import data from '../support/fixtures/endereco.json' assert { type: 'json' }
import { faker } from '@faker-js/faker'

test('Cadastrar de endereço', async ({ page }) => {
    const userEmail = faker.internet.email();
    const endereco = data.dados

    // Logando a aplicação
    await page.login.fazerLogin(userEmail, '123456')

    // Acessando tela de cadastro de Enderaço
    await page.endereco.acessarCadastroEndereco()

    // Cadastro
    await page.endereco.cadastrarEndereco(endereco.primeiro_nome, endereco.sobrenome, endereco.nome_da_empresa, endereco.email, endereco.pais, endereco.estado_cidade, endereco.cep, endereco.endereco_completo, endereco.notas_adicionais)
    await page.endereco.validarSucesso()
})

test('Não dever cadastrar se os campos não forem preenchidos', async ({ page }) => {
    // Logando a aplicação
    const userEmail = faker.internet.email();

    await page.login.fazerLogin(userEmail, '123456')

    // Acessando tela de cadastro de Enderaço
    await page.endereco.acessarCadastroEndereco()

    await page.endereco.salvar()

    await page.components.validarMensagemError([
        'O campo First Name deve ser prenchido',
        'O campo Last Name deve ser prenchido',
        'O campo Company deve ser prenchido',
        'O campo E-mail deve ser prenchido ou é inválido',
        'O campo Country deve ser prenchido',
        'O campo City deve ser prenchido',
        'O campo Zip Code deve ser prenchido',
        'O campo Address deve ser prenchido',
        'O campo Additional Notes deve ser prenchido'
    ])
})