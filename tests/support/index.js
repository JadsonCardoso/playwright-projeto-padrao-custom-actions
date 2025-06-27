import { test as base, expect } from '@playwright/test'

// Importando os arquivos
import { Login } from './actions/Login.js'
import { MinhaConta } from './actions/MinhaConta.js'
import { Endereco } from './actions/Endereco.js'
import { Cadastro } from './actions/Cadastro.js'
import { Components } from './actions/Components.js'
import { ListaDeDesejos } from './actions/listasDeDesejos.js'

import { Api } from './api/apiConfig.js'

const test = base.extend({
    page: async ({ page }, use) => {
        const context = page
        context['cadastro'] = new Cadastro(page)
        context['login'] = new Login(page)
        context['minhaConta'] = new MinhaConta(page)
        context['endereco'] = new Endereco(page)
        context['components'] = new Components(page)
        context['listaDeDesejos'] = new ListaDeDesejos(page)

        await use(context)
    },
    request: async ({ request }, use) => {
        const context = request

        context['api'] = new Api(request)

        await use(context)
    }
})

export { test, expect } 