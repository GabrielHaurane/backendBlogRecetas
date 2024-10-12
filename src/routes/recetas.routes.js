import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  listarRecetas,
  obtenerReceta,
} from "../controllers/receta.controllers.js";

const recetaRouter = Router();
recetaRouter.route("/recetas")
.post(crearReceta)
.get(listarRecetas);
recetaRouter
.route("/recetas/:id")
.get(obtenerReceta)
.delete(borrarReceta)
.put(editarReceta)
export default recetaRouter;