import faker from 'faker'




const mount = (el) =>{
    const cartText = `<div>you have ${faker.random.number()} in your cart.</div>`
    el.innerHTML = cartText
}


if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-cart')
    if(el){
        // we are probably running in isolation
        mount(el)
    }
}

export {mount}
