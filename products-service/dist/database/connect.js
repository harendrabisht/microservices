"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var envs_1 = __importDefault(require("../envs"));
mongoose_1.default.connect(envs_1.default.dbUrl);
exports.default = mongoose_1.default.connection;
