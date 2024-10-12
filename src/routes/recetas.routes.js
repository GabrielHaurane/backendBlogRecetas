import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  listarRecetas,
  obtenerReceta,
} from "../controllers/receta.controllers.js";
import validacionRecetas from "../helpers/validacionRecetas.js";

const recetaRouter = Router();
recetaRouter.route("/recetas")
.post([validacionRecetas],crearReceta)
.get(listarRecetas);
recetaRouter
.route("/recetas/:id")
.get(obtenerReceta)
.delete(borrarReceta)
.put([validacionRecetas],editarReceta)
export default recetaRouter;