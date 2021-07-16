import { SiteClient } from 'datocms-client'

export default async function handle(request, response) {

    if (request.method === 'POST') {
        const TOKEN = '335527725d3ccafdeb392f124dae21'

        const client = new SiteClient(TOKEN)
        console.log(request.body)

        const registroCriado = await client.items.create({
            itemType: "968808",
            ...request.body
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado
        })

        return
    }

    response.status(404).json({
        message: 'Rota não permitida'
    })


}