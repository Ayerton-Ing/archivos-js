function analizarTexto(texto) {
    const palabras = texto.trim().split(/\s+/);
    const vocales = texto.toLowerCase().match(/[aeiou]/g) ||[];

    return {
        totalPalabras: palabras.length,
        totalVocales: vocales.length
    };
}

console.log(analizarTexto("Hola mundo, solo es una prueba"));
console.log(analizarTexto("Jesús es el camino la verdad y la vida"));
