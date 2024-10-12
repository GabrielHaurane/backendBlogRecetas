import Receta from "../database/model/receta.js";

export const crearReceta = async (req, res) => {
  try {
    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({
      mensaje: "La receta fue creada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear la receta",
    });
  }
};
export const listarRecetas = async (req,res) => {
    try {
        const arrayRecetas = await Receta.find()
        res.status(200).json(arrayRecetas)
    } catch (error) {
        res.status(500).json({
            mensaje: "Ocurrio un error, no se encontraron las recetas",
          });
    }
}
export const obtenerReceta = async (req,res) => {
    try {
        const recetaBuscada = await Receta.findById(req.params.id)
        if (!recetaBuscada) {
            return res.status(404).json({
                mensaje:"La receta no fue encontrada"
            })
        }
        res.status(200).json(recetaBuscada)
    } catch (error) {
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo encontrar la receta",
          });
    }
}
export const borrarReceta = async (req,res) => {
    try {
        const recetaBuscada = await Receta.findById(req.params.id)
        if (!recetaBuscada) {
            return res.status(404).json({
                mensaje:"La receta no fue encontrada"
            })
        }
        await Receta.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje:"La receta fue borrada correctamente"
        })
    } catch (error) {
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo borrar la receta",
          });
    }
}
export const editarReceta = async (req,res) => {
    try {
        const recetaBuscada = await Receta.findById(req.params.id)
        if (!recetaBuscada) {
            return res.status(404).json({
                mensaje:"La receta no fue encontrada"
            })
        }
        await Receta.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje:"La receta fue editada"
        })
    } catch (error) {
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo editar la receta",
          });
    }
}