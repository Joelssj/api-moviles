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
exports.MysqlProductRepository = void 0;
// MysqlSensorRepository.ts
const mysql_1 = require("../../../database/mysql");
const Boleto_1 = require("../../domain/Boleto");
class MysqlProductRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM boleto";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));
                return dataProducts.map((boleto) => new Boleto_1.Product(boleto.id, boleto.origen, boleto.destino, boleto.fecha, boleto.horaSalida, boleto.horaLlegada, boleto.asiento, boleto.precio, boleto.numCorrida));
            }
            catch (error) {
                console.error("Error al obtener datos del sensor desde MySQL:", error);
                return null;
            }
        });
    }
    getById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM boleto WHERE id=?";
            const params = [productId];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new Boleto_1.Product(result[0].id, result[0].origen, result[0].destino, result[0].fecha, result[0].horaSalida, result[0].horaLlegada, result[0].asiento, result[0].precio, result[0].numCorrida);
            }
            catch (error) {
                return null;
            }
        });
    }
    createProduct(origen, destino, fecha, horaSalida, horaLlegada, asiento, precio, numCorrida) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO boleto (origen, destino, fecha, horaSalida, horaLlegada, asiento, precio, numCorrida) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            const params = [origen, destino, fecha, horaSalida, horaLlegada, asiento, precio, numCorrida];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new Boleto_1.Product(result.insertId, origen, destino, fecha, horaSalida, horaLlegada, asiento, precio, numCorrida);
            }
            catch (error) {
                return null;
            }
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM boleto WHERE id=?";
            const params = [productId];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return result.affectedRows > 0;
            }
            catch (error) {
                return false;
            }
        });
    }
    updateProduct(id, origen, destino, fecha, horaSalida, horaLlegada, asiento, precio, numCorrida) {
        return __awaiter(this, void 0, void 0, function* () {
            const fieldsToUpdate = [];
            const params = [];
            if (origen) {
                fieldsToUpdate.push("origen = ?");
                params.push(origen);
            }
            if (destino) {
                fieldsToUpdate.push("destino = ?");
                params.push(destino);
            }
            if (fecha) {
                fieldsToUpdate.push("fecha = ?");
                params.push(fecha);
            }
            if (horaSalida) {
                fieldsToUpdate.push("horaSalida = ?");
                params.push(horaSalida);
            }
            if (horaLlegada) {
                fieldsToUpdate.push("horaLlegada = ?");
                params.push(horaLlegada);
            }
            if (asiento) {
                fieldsToUpdate.push("asiento = ?");
                params.push(asiento);
            }
            if (precio) {
                fieldsToUpdate.push("precio = ?");
                params.push(precio);
            }
            if (numCorrida) {
                fieldsToUpdate.push("numCorrida = ?");
                params.push(numCorrida);
            }
            params.push(id);
            const sql = `UPDATE boleto SET ${fieldsToUpdate.join(", ")} WHERE id = ?`;
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0)
                    return null;
                const updatedProduct = yield this.getById(id);
                return updatedProduct;
            }
            catch (error) {
                console.error("Error in updateProduct:", error);
                return null;
            }
        });
    }
}
exports.MysqlProductRepository = MysqlProductRepository;
