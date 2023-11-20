//console.log("hola mundo");

//const express= require("express");
import express from 'express'
import { dirname, join } from 'path' /*para poder usar la ruta para el frontend mostrar las vistas*/
import {fileURLToPath} from "url" /*para obtener la direcion de nuestra vista del frontend exacta o completa*/
import ejs from "ejs"

const app = express()

const __dirname= dirname(fileURLToPath(import.meta.url))/*para obtener la ruta de la carpeta del frontend donde esta nuestra vista*/

app.set("views", join(__dirname, "views"))/*para que busque la carpeta de la vista del frontend*/
app.set("viem engine", "ejs")
app.get("/", (req, res)=>res.render("index.ejs"))    /* enviando archivos del frontend al backend*/

app.listen(5000)

console.log("el servidor ha respondido su peticion en el puerto",5000)

//var express = require('express');
//var app = express();


