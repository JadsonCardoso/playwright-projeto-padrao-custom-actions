import { expect } from '@playwright/test'

export class Endereco {
  constructor(page) {
    this.page = page
  }

  async salvar() {
    await this.page.getByRole('button', { name: 'Save' }).click()

  }

  async acessarCadastroEndereco() {
    await this.page.locator('.footer_one_widget > ul > li').getByText('Checkout View One').click()
  }

  async cadastrarEndereco(primeiro_nome, sobrenome, nome_da_empresa, email, pais, estado_cidade, cep, endereco_completo, notas_adicionais) {

    await this.page.locator('#fname').fill(primeiro_nome)
    await this.page.getByLabel('Last name').fill(sobrenome)
    await this.page.locator('#cname').fill(nome_da_empresa)
    await this.page.getByPlaceholder('info@gmail.com').fill(email)
    await this.page.locator('#zip').fill(cep)
    await this.page.locator('#faddress').fill(endereco_completo)
    await this.page.locator('#messages').fill(notas_adicionais)

    await this.page.selectOption('#country', { label: pais });

    await this.page.selectOption('#city', { value: estado_cidade });

    await this.salvar()

  }

  async selecionarFormaPagamento() {

    const condicaoParaClick = this.page.locator(' .heading_payment div[aria-expanded="false"]')

    if (condicaoParaClick) { 
    await this.page.locator('#javascript').click()
    }
  }

  async validarSucesso() {
    await expect(this.page.locator('.check-out-form > h3')).toHaveText('Billings Information registred with success!')
  }

}