const guardarContacto = (dbc,contacto) =>{
    
    
    dbc.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = `/`
}

