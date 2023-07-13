"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const util_1 = require("./api/database/util");
const app = (0, express_1.default)();
(0, util_1.dbConnection)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
fs_1.default.readdirSync(path_1.default.resolve(__dirname, 'api', 'routes')).forEach((file) => {
    /* eslint-disable */
    const { router, basePath } = require(`./api/routes/${file}`);
    app.use(basePath, router);
});
app.get('/', (req, res) => {
    return res.status(200).send({ message: 'Hello world' });
});
app.get('*', function (req, res) {
    return res.status(404).send({ message: 'APIs route not found' });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use(function (err, req, res) {
    const statusCode = err.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({
        status: err.statusText || http_status_codes_1.default.INTERNAL_SERVER_ERROR,
        message: err.message,
        errors: err.errors || {},
    });
});
