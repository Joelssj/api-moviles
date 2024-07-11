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
exports.CreateProductController = void 0;
class CreateProductController {
    constructor(createProductUseCase) {
        this.createProductUseCase = createProductUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log("mensaje " + JSON.stringify(data));
            try {
                const product = yield this.createProductUseCase.run(data.origen, data.destino, data.fecha, data.horaSalida, data.horaLlegada, data.asiento, data.precio, data.numCorrida);
                if (product)
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: product === null || product === void 0 ? void 0 : product.id,
                            origen: product === null || product === void 0 ? void 0 : product.origen,
                            destino: product === null || product === void 0 ? void 0 : product.destino,
                            fecha: product === null || product === void 0 ? void 0 : product.fecha,
                            horaSalida: product === null || product === void 0 ? void 0 : product.horaSalida,
                            horaLlegada: product === null || product === void 0 ? void 0 : product.horaLlegada,
                            asiento: product === null || product === void 0 ? void 0 : product.asiento,
                            precio: product === null || product === void 0 ? void 0 : product.precio,
                            numCorrida: product === null || product === void 0 ? void 0 : product.numCorrida,
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        data: "NO fue posible agregar el registro",
                    });
            }
            catch (error) {
                res.status(204).send({
                    status: "error",
                    data: "Ocurrió un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreateProductController = CreateProductController;
