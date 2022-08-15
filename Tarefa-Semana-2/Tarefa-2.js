let comprador = "Rogerio"
let produto = "'AntiMateria'"
let endereço = "123Street"
let vendedor = "Cleitinho"

function entrega(params) {
    console.log(`Olá, ${comprador}.`)
    
    console.log(`Fizemos a entrega do produto ${produto} no endereço ${endereço} com sucesso
    O seu produto foi recebido por: ${comprador}
    Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudarno`)
    
    console.log(`Atenciosamente,
    ${vendedor}`)
}

entrega()