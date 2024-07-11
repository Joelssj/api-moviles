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
exports.GetAllUsersController = void 0;
class GetAllUsersController {
    constructor(getAllUsersUseCase) {
        this.getAllUsersUseCase = getAllUsersUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.getAllUsersUseCase.run();
                if (users) {
                    res.status(200).json(users.map((user) => {
                        return {
                            id: user.id,
                            nombre: user.nombre,
                            apellido: user.apellido,
                            correo: user.correo,
                            password: user.password
                        };
                    }));
                }
                else {
                    res.status(400).json({
                        status: "Error",
                        msn: "Ha ocurrido un problema",
                    });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Error interno del servidor' });
            }
        });
    }
}
exports.GetAllUsersController = GetAllUsersController;