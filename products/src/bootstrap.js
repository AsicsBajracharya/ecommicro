import faker from 'faker'


// console.log(products)

const mount = (el) =>{
    let products = ''

    for(let i = 0; i< 5; i++){
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }
    el.innerHTML = products
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products')
    if(el){
        // we are probably running in isolation
        mount(el)
    }
}

export {mount}