const contenedor=document.querySelector('.container');

window.addEventListener('scroll',()=>{
    const {clientHeight,scrollHeight,scrollTop}=document.documentElement
    console.log(typeof(clientHeight)) // esto es solo para ver de que tipo es esta variable
    console.log(scrollTop)
    console.log(scrollHeight)
    console.log(clientHeight)

    console.log(`scrollTop + clientHeight = ${scrollTop + clientHeight}  | Altura personalizada = ${scrollHeight - 3}`)
    scrollTop + clientHeight>scrollHeight-3 && setTimeout(newContenedor,1000)
    
})

const newContenedor=()=>{
    const box=document.createElement('div');
    box.className='box d'
    contenedor.appendChild(box)
}