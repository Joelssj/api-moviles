"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signale_1 = require("signale");
const express_1 = __importDefault(require("express"));
const UsersRouter_1 = require("./Users/infrastructure/api-rest/routes/UsersRouter");
const BoletoRouter_1 = require("./Mboletos/infrastructure/api-rest/routes/BoletoRouter");
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/user", UsersRouter_1.usersRouter);
app.use("/boleto", BoletoRouter_1.productRouter);
const port = 3010;
const host = '0.0.0.0';
app.listen(port, host, () => {
    signale.success("Server online in port 3010");
});
