import mongoose, {Schema} from "mongoose";
const recetaSchema = new Schema({
    nombreReceta:{
        type: String,
        required:true,
        min:3,
        max:70,
        unique: true
    },
    imagen:{
        type: String,
        required: true,
        validate:{
            validator: (valor)=>{
                return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor)
            }
        }
    },
    categoria:{
        type: String,
        required: true,
        enum:['Desayuno','Almuerzo','Merienda','Cena','Postres']
    },
    ingredientes:{
        type: String,
        required: true,
        min: 5,
        max: 500
    },
    descripcion_breve:{
        type: String,
        required: true,
        min: 10,
        max: 70,
    },
    descripcion:{
        type: String,
        required: true,
        min: 30,
        max: 2000,
    }
})

const Receta = mongoose.model('receta', recetaSchema)
export default Receta;