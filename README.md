# API express + mongoose 

## index.js
Este archivo tiene la tarea de levantar nuestra aplicación 

## server.js
Este archivo guarda la definición del servidor 
- Que rutas van a existir 
- Que middlewares se van a usar
- Aquí se montan los routers al servidor 

## models 1.
Alberga nuestros modelos de base de datos 
> un modelo es la representación de una colección y consta de un nombre de colección y un schema

##  usecases 2.
Alberga funciones que puede ejecutar el usuario en el sistema 
> Agrupadas por entidades 

## routes 3
Alberga las rutas de nuestro servidor 
> Agrupadas por entidades 

## lb 4
Alberga condigo reutilizable a traves de todas las capas de la arquitectura 

## Proceso de desarrollo 

Este es el proceso que debemos seguir cuando necesitamos agregar un nuevo endpoint  a nuestra API 

1. Modelos: asegurarnos de tener el acceso a datos que necesitamos para la tarea 
2. UseCases:Asegurarnos de tener las funciones necesarias para la tarea
3. Router: Asegurarnos de tener la ruta(s) necesaria(s)