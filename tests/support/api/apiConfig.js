import { expect } from '@playwright/test'

export class Api {

    constructor(request) {
        this.request = request
        this.token = undefined
    }

    async pegarToken() {
        const response = await this.request.post('caminho da API - Não testei', {

            data: {
                email: 'teste.123@teste.com',
                password: '123456'
            }
        })

        expect(response.ok()).toBeTruthy()

        const body = JSON.parse(await response.text())
        this.token = body.token
        console.log(this.token)
    }
    async buscarObjetoEspecificos() {
        const response = await this.request.get('https://api.restful-api.dev/objects?id=3&id=5&id=10', {

        })

        expect(response.ok()).toBeTruthy()
        const body = JSON.parse(await response.text())
        console.log(body)
    }

    async cadastrandoObjeto() {
        const response = await this.request.post('https://api.restful-api.dev/objects', {

            "name": "Celular Anônimo automação",
            "data": {
                "year": 2025,
                "price": 999.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                "owner": "Anônimo"
            }
        })

        expect(response.ok()).toBeTruthy()
        const body = JSON.parse(await response.text())
        console.log(body)
    }
}