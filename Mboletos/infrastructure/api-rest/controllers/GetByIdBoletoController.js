"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdProductController = void 0;
class GetByIdProductController {
    constructor(getByIdProductUseCase) {
        this.getByIdProductUseCase = getByIdProductUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const product = yield this.getByIdProductUseCase.run(id);
                if (product)
                    //Code HTTP : 200 -> Consulta exitosa
                    res.status(200).send({
                        status: "success",
                        data: {
                            id: product.id,
                            origen: product.origen,
                            destino: product.destino,
                            fecha: product.fecha,
                            horaSalida: product.horaSalida,
                            horaLlegada: product.horaLlegada,
                            asiento: product.asiento,
                            precio: product.precio,
                            numCorrida: product.numCorrida
                        },
                    });
                else
                    res.status(400).send({
                        status: "Error",
                        msn: "Ha ocurrido un problema",
                    });
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.GetByIdProductController = GetByIdProductController;
