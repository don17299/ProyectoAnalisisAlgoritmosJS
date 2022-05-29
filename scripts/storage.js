export function crear(nombre, valor){
    sessionStorage.setItem(nombre,valor)
}

export function obtener(nombre){
    return sessionStorage.getItem(nombre)
}

export function modificar(nombre, valor){
    sessionStorage.setItem(nombre,valor)
}

export function eliminar(nombre){
    sessionStorage.removeItem(nombre)
}