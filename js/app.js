
document.addEventListener('DOMContentLoaded',()=>{

    iniciarApp();
})


function iniciarApp(){

    mostrarImagenes();
    scrollEnlaces();
    fijarMenu();
}

function mostrarImagenes(){

   const galeria = document.querySelector('#galeria-imagenes')
    

   //Añadir imagenes a la galeria del html
   for(let i = 1;i<=12;i++){

    const imagen = document.createElement('picture');
    imagen.innerHTML = `
      
    <source srcset="build/img/thumb/${i}.avif" type="image/avif">
    <source srcset="build/img/thumb/${i}.webp" type="image/webp">
    <img loading="lazy" src="build/img/thumb/${i}.jpg" alt="imagen-galeria">
    `
    imagen.addEventListener('click',(e)=>{
        identificarImagen(i);
    })

    galeria.appendChild(imagen)
   }

   function identificarImagen(id){
      
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
      
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" src="build/img/grande/${id}.jpg" alt="imagen-galeria">
    `;
     
    const iconoCierre = document.createElement('i');
    iconoCierre.classList.add('closeIcon')
    iconoCierre.onclick=()=>{
       overlay.classList.remove('overlay')
    }
    iconoCierre.innerHTML= `
    <i class='bx bx-x-circle'></i>
    `
    imagen.appendChild(iconoCierre)
    

    const overlay = document.createElement('div');
    overlay.appendChild(imagen)
    overlay.classList.add('overlay')
    overlay.onclick=()=>{
       overlay.classList.remove('overlay')
       body.classList.remove('fijar-imagen')
       overlay.remove()
    }

    
    const body = document.querySelector('body')
    body.appendChild(overlay)
    body.classList.add('fijar-imagen')
    
    }
   
}

function scrollEnlaces(){
   const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(enlace=>{
      
      enlace.addEventListener('click',(e)=>{
        e.preventDefault();
         const ancla = enlace.attributes.href.value;
         console.log(ancla)


         const seccion = document.querySelector(ancla)
         console.log(seccion)


         seccion.scrollIntoView({behavior:'smooth'})
       })
      
        
     })
      

      
  
}

function fijarMenu(){
    const barra = document.querySelector('.header');
    const seccionRef= document.querySelector('.sobre-festival')
    const body = document.querySelector('body');
    
    
    window.addEventListener('scroll',()=>{
        if(seccionRef.getBoundingClientRect().top<0){
            barra.classList.add('fijo')
            body.classList.add('body-scroll')
        }else{
            barra.classList.remove('fijo')
            body.classList.remove('body-scroll')
        }
    })
    
}