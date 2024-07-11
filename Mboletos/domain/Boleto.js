"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, origen, destino, fecha, horaSalida, horaLlegada, asiento, precio, numCorrida) {
        this.id = id;
        this.origen = origen;
        this.destino = destino;
        this.fecha = fecha;
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.asiento = asiento;
        this.precio = precio;
        this.numCorrida = numCorrida;
    }
}
exports.Product = Product;
