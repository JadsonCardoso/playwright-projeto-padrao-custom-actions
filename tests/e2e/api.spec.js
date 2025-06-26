import { request } from 'http'
import { test, expect } from '../support/index.js'

test('Cadastrar Objeto', async ({ request }) => {

    await request.api.cadastrandoObjeto()
})

test('Buscar Objetos Pelo ID', async({ request }) => {
   await request.api.buscarObjetoEspecificos()
})
