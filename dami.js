function multiplicación(a, b)
{
    let resultadoMultiplicación = a * b
    return resultado
}
alert(multiplicación(5, 7))

function división(a, b)
{
    let resultadoDivisión = a / b
    return resultado
}
alert(división(16, 8))

function suma(a, b)
{
    let resultadoSuma = a + b
    return resultado
}
alert(suma(100, 35))

function resta(a, b)
{
    let resultadoResta = a - b
    return resultado
}
alert(resta(60, 20))

function potencia(x)
{
    let resultadoPotenciacuadrada = x ^ 2 + 5
    resultadoPotenciacuadrada = x * x + 5
    return resultado
}
alert(potencia(5))

function saludo()
{
    let nombre = prompt('Ingresa tu nombre')
    return ' Bienvenido ' + nombre
}
alert(saludo())

/*Otro ejemplo para llamar a una variable en js es:*/
/*crearla*/ let cantidad_libros
/*llamarla*/cantidad_libros = 5 /*con un valor de 5*/

/*a la variable que llamamos podemos ponerle una suma llamandola a la variable en si, ej:*/
cantidad_libros = cantidad_libros + 5 /*que en total daría 10 porque antes ya se había asignado otro valor de 5*/

/*¿cómo mostrarlo en la consola?*/
console.log(cantidad_libros)
alert(cantidad_libros) /*se pone la alerta para que aparezca un mensaje en el documento*/

/*para que muestre un mensaje en el console.log podemos hacer*/
console.log('La cantidad de libros es:' + cantidad_libros)
