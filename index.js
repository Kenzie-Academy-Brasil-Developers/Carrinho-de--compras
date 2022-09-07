
//------------------------------------------------------------
let body = document.querySelector('body')

let header = document.createElement('header')

let principal = document.createElement('main')
principal.setAttribute('class','container')

let title = document.createElement('h1')
title.setAttribute('class','titulo')
title.innerText = 'Virtual Market'

let subtitle = document.createElement('div')
subtitle.setAttribute('class','subtitle')

let item = document.createElement('h2')
item.innerText = 'Item'

let valor = document.createElement('h2')
valor.innerText = 'Valor'

let todosProdutos = document.createElement('ul')
todosProdutos.setAttribute('class','produtos')

let precoProductUva = document.createElement('div')
precoProductUva.setAttribute('class','precoProduct')
let Uva = document.createElement('li')
Uva.innerText = 'Uva Crismon'
let precoUva = document.createElement('p')
precoUva.innerText = 'R$ 44,99'

let precoProductvinho = document.createElement('div')
precoProductvinho.setAttribute('class','precoProduct')
let vinho = document.createElement('li')
vinho.innerText = 'Vinho Canção'
let precoVinho = document.createElement('p')
precoVinho.innerText = 'R$ 17,98'

let precoProductAguaCoco = document.createElement('div')
precoProductAguaCoco.setAttribute('class','precoProduct')
let aguaCoco = document.createElement('li')
aguaCoco.innerText = 'Agua de coco'
let precoAguaCoco = document.createElement('p')
precoAguaCoco.innerText = 'R$ 8,99'

let precoProductMamao = document.createElement('div')
precoProductMamao.setAttribute('class','precoProduct')
let mamao = document.createElement('li')
mamao.innerText = 'Mamão papaya'
let precoMamao = document.createElement('p')
precoMamao.innerText = 'R$ 9,98'

let precoProductAguaTonica = document.createElement('div')
precoProductAguaTonica.setAttribute('class','precoProduct')
let aguaTonica = document.createElement('li')
aguaTonica.innerText = 'Agua Tônica'
let precoAguaTonica = document.createElement('p')
precoAguaTonica.innerText = 'R$ 17,98'

let secao = document.createElement('section')

let somarProduct = document.createElement('div')
somarProduct.setAttribute('class','subtotal')

let total = document.createElement('p')
total.innerText = 'Total:'

let pSoma = document.createElement('p')
pSoma.setAttribute('class','somaTotal')

let but = document.createElement('button')
but.setAttribute('class','botao')
but.innerText = 'Finalizar Compra'

body.append(header,principal)
principal.append(title,subtitle,todosProdutos,secao)
subtitle.append(item,valor)
todosProdutos.append(precoProductUva,precoProductvinho,precoProductAguaCoco,precoProductMamao,precoProductAguaTonica)
precoProductUva.append(Uva,precoUva)
precoProductvinho.append(vinho,precoVinho)
precoProductAguaCoco.append(aguaCoco,precoAguaCoco)
todosProdutos.append(precoProductMamao)
precoProductMamao.append(mamao,precoMamao)
precoProductMamao.append(mamao,precoMamao)
precoProductAguaTonica.append(aguaTonica,precoAguaTonica)
secao.append(somarProduct,but)
somarProduct.append(total,pSoma)


//-------------------------------------------------------------

function somarProdutos(lista){

    let soma = 0

    for (let i = 0; i < lista.length; i++){
        soma += lista[i].price
    }
    return pSoma.append(soma)
}
// somarProdutos(productsCart)

but.addEventListener('click', function () {
    let soma = productsCart.reduce((acc, elemento) => acc + elemento.price, 0)
    pSoma.innerText = `R$${soma}`
})

