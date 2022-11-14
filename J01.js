const nombre = document.querySelector(`.nombre`)
const numero = document.querySelector(`.numero`)
const direccion = document.querySelector(`.direccion`)
const btnAgregar = document.querySelector(`.btn-agregar-tarea`)

const listadoContacto = document.querySelector(`.listado-contactos`)

const dbc = window.localStorage



btnAgregar.onclick = (e) => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }

    
    
   guardarContacto(dbc,contacto)
}

const cargarContacto = (dbc,parentNode) => {
    let claves = Object.keys(dbc)
    
    for(clave  of claves){
    let contacto = JSON.parse(dbc.getItem(clave))

    crearContacto(parentNode,contacto,dbc)
    }

    
}


const crearContacto = (parentNode,contacto,dbc) => {
    let divContacto = document.createElement(`div`)
    let nombreContacto = document.createElement(`h3`)
    let numeroContacto = document.createElement(`p`)
    let direccionContacto = document.createElement(`p`)
    let iconoBorrar = document.createElement(`span`)

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = `deleter_forever`
 
    divContacto.classList.add(`contacto`)
    iconoBorrar.classList.add(`material-icons` , `icono`)
    
    iconoBorrar.onclick = () => {
        dbc.removeItem(contacto.id)
        window.location.href = `/`
    }


    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)



}

cargarContacto(dbc,listadoContacto)