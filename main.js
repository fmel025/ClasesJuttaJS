// Operadores de asignacion
/*
    Los operadores de asignacion asignan un valor
    a la variable que tenemos a la izquierda del operador
    basandose en el valor a la derecha del operador
*/

// En simples terminos el operador de asignacion es
// utilizado para darle valores a una variable

/* El operador mas comun es el signo igual "=" el
    cual iguala la variable al valor dado    
*/

// Operador de asignacion
let numero = 3

// Operador de asignacion de suma (+=)
// Le suma al valor de la variable el valor
// de la derecha de este operador
numero += 3
console.log(numero); // El valor es 6

// Operador de asignacion de resta (-=)
// le resta al valor de la variable el valor de la derecha
// del operador. Ejemplo:

numero -= 2 // Puede ser una operacion matematica
console.log(numero); // Se convierte en 4

// Operador de asignacion de multiplicacion (*=)
// Este operador multiplica el valor de la variable
// por el valor que esta a la derecha del operador.

numero *= 3 // Se convierte en 12
console.log(numero);

// Ej equivalente: numero = numero * 3

// Operador de asignacion de division (/=)
// Este operador divide el valor de nuestra variable
// con el valor que esta a la derecha del operador

numero /= 4
console.log(numero); // Se convierte en 3 ya que 12/4 = 3
// Es lo mismo a: numero = numero / 4

// Operador de asignacion de residuo (%=)
// Este operador saca el residuo de nuestra variable
// y el valor a la derecha del operador, y lo guarda
// en la variable.

numero %= 2 // Obtiene el residuo de numero/2 y lo asigna
console.log(numero); // El resultado es 1

// Ejercicio

// Declara una variable con un valor de 2
// Multiplicala por 3
// Sumale 4
// Dividela entre 2
// Y encuentra el residuo con 2
// Muestra su resultado