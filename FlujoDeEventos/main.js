// Se ejecuta del mas especifico al menos especifico
// Mas especifico son los hijos
// los menos especificos son los contenedores

const container2 = document.querySelector('.container-2');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('.container')



// BUBBLING

//  container.addEventListener("click",(e)=>{
//     alert("container")
//  });
 

// //  container2.addEventListener("click",(e)=>{
// //     alert("container2")
// //  });
 
 
// titulo.addEventListener("click",(e)=>{
//     alert("titulo")
//  });
 
   

// CAPTURING


container.addEventListener("click",(e)=>{
   alert("container")
});


 container2.addEventListener("click",(e)=>{
    alert("container2")
    e.stopPropagation()
   //  detiene todos eventos asociados
 }),true;
//  con *true* se ejecuta primero

titulo.addEventListener("click",(e)=>{
   alert("titulo")
   e.stopPropagation()
});

  