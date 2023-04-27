const btn_guardar= document.querySelector('.a')
const nombre=document.getElementById('nombre')
const apellido=document.getElementById('apellido')
const cedula=document.getElementById('cedula')
const fecha=document.getElementById('fecha')
const mostrar_tabla=document.querySelector('.mostrar')

let personas=[]


class persona1{
    constructor(nombre,apellido,cedula,fecha){
        this.nombre=nombre
        this.apellido=apellido
        this.cedula=cedula
        this.fecha=fecha

    }

    mostrar_funcion(){
        mostrar_tabla.innerHTML+=`
        <td>${this.nombre}</td>
        <td>${this.apellido}</td>
        <td>${this.cedula}</td>
        <td>${this.fecha}</td>
        `
    }
}

btn_guardar.addEventListener('click',(e)=>{
    e.preventDefault()
    const datos=new persona1(nombre.value,apellido.value,cedula.value,fecha.value)
    personas.push(datos)
    datos.mostrar_funcion()
    
    nombre.value=""
    apellido.value=""
    cedula.value=""
    fecha.value=""
    
})