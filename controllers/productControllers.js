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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const productCache_1 = __importDefault(require("../productCache"));
const normalize_1 = __importDefault(require("../normalize"));
const productControllers = {
    getProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let { query } = req.query;
        query = (0, normalize_1.default)(query);
        const values = productCache_1.default.get(`${query}`);
        // Verifying if search is cached
        if (!values) {
            try {
                // Getting products array from MELI API
                const response = yield axios_1.default.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
                const { results } = response.data;
                // Creating an empty array to load products on it
                const products = [];
                // Mapping products array and generate new object with required keys
                results.map((product) => {
                    const { id, title, price, currency_id, available_quantity, thumbnail, condition } = product;
                    const productWithMainAttributes = {
                        id,
                        title,
                        price,
                        currency_id,
                        available_quantity,
                        thumbnail,
                        condition
                    };
                    // Adding product object with filtered keys to new array
                    products.push(productWithMainAttributes);
                });
                // Saving search in cache
                productCache_1.default.set(`${query}`, products);
                res.status(200).json(products);
            }
            catch (error) {
                res.json(error);
            }
        }
        else {
            // Responding with cached products
            res.status(200).json(values);
        }
    })
};
exports.default = productControllers;
