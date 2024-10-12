import { check } from "express-validator";
import resultadoValidaciones from "./resultadoValidacion.js";

const validacionRecetas = [
    check("nombreReceta")
    .notEmpty()
    .withMessage("El nombre de la receta es un dato obligatorio")
    .isLength({
        min:3,
        max:70,
    })
    .withMessage("La receta debe contener como minimo 3 y como maximo 70 caracteres"),
    check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
    .withMessage(
        "La imagen debe ser una URL valida y terminar en alguna de las siguientes extensiones: jpg, jpeg, gif o png"
    ),
    check("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn(['Desayuno','Almuerzo','Merienda','Cena','Postres'])
    .withMessage("La categoria debe contener una de las siguientes opciones: Desayuno, Almuerzo, Merienda, Cena o Postres"),
    check("ingredientes")
    .notEmpty()
    .withMessage("Los ingredientes de la receta es un dato obligatorio")
    .isLength({
      min: 5,
      max: 500,
    })
    .withMessage(
      "Los ingredientes de la receta debe contener como minimo 5 y como maximo 50 caracteres"
    ),
    check("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion de la receta es un dato obligatorio")
    .isLength({
      min: 10,
      max: 70,
    })
    .withMessage(
      "La descripcion de la receta debe contener como minimo 5 y como maximo 50 caracteres"
    ),
    check("descripcion")
    .notEmpty()
    .withMessage("La descripcion de la receta es un dato obligatorio")
    .isLength({
      min: 30,
      max: 2000,
    })
    .withMessage(
      "La descripcion de la receta debe contener como minimo 5 y como maximo 50 caracteres"
    ),
    (req,res,next)=>resultadoValidaciones(req,res,next)
];
export default validacionRecetas
