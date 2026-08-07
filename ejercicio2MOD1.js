function validarUsuario(usuario) {
    const { nombre, edad, email } = usuario;

    if (!nombre || nombre.trim() === "") {
        return "Error: elnombre es obligatorio.";
    }
    if (typeof edad !== "number" || edad <= 0) {
        return "Error: la edad debe ser un número mayor a 0.";
    }
    if (!email || !email.includes("@")) {
        return "Error: el email no es válido.";
    }
    return "Usuario válido✅";
}

console.log(validarUsuario({ nombre: "Ana", edad: 25, email: "ana@mail.com"}));
console.log(validarUsuario({ nombre: "", edad: -3, email: "sinarroba"}));
console.log(validarUsuario({ nombre: "Juan", edad: 35, email: "juan@mail.com"}));
console.log(validarUsuario({ nombre: "Juan", edad: 0.5, email: "juan@mail.com"}));