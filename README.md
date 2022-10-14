# consecutive-arrays

Dado un arreglo de números, determinar si la secuencia es progresiva… (el anterior es menor que el siguiente)

En caso que no sea progresiva, determinar si eliminando un elemento del conjunto podría volverse progresiva.

De ser así mostrar el conjunto modificado.

```

[1, 2, 3, 2, 4, 5, 6, 7] Eliminar 1 número cumple la condición.
[1, 2, 2, 2, 4, 5, 6, 7] Eliminar 1 número no cumple la condición. ( 2 < 2 ) = false
[1, 2, 3, 1, 1, 4, 8, 9] Eliminar 1 número no cumple la condición.
[1, 2, 3, 4, 5, 6, 7, 9] Cumple la condición sin necesidad de eliminar alguno.

```
## Requerimientos para correr
- Node
- NPM
## Instrucciones
- Instalar dependencias con `npm install`
- Ejecutar con `npm run test`
