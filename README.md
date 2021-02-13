Este es un pequeño servidor de Node.js -Express Clase 9 - CoderHouse
Melisa
Hola Ruben!! 



Está bien en general. Te dejo igual algunas correcciones:

Recordá que cuando hacemos una api rest, los métodos de cada endpoint nos ayudan a saber qué hace cada uno. En tus rutas de los métodos put y delete, no hace falta que tengan los verbos "actualizar" y "delete" porque ya el método nos da esa información. Igualmente si por alguna razón fueran, trata de mantener un criterio uniforme en cuanto al idioma, esto vale en general para el código también. 
Está muy bien la forma en que estás manejando los ids y los índices del array en la mayoría de los endpoints, faltaría que en get /productos/id hagas algo similar. Porque fijate por ejemplo si tenes un array con 4 productos, y eliminas el de id 2 cuando haces get products/2 te trae el 3 que es el que pasó a estar en la segunda posición del array. 
En el método delete, fijate que la línea de splice debería estar también dentro de el if producto != undefined, porque si pones el id de un elemento que no existe te elimina el último que haya porque idx es -1. 
Por convención las variables se nombran con la primera letra en minúscula, fijate en la función getIndice, que tenes una que se llama "Indice". 


Cualquuier duda avisame y la vemos! 