"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var productSchema = (0, graphql_1.buildSchema)("\n    type Product {\n        productId: ID\n        name: String\n        decription: String\n        category: String\n        price: String\n    }\n    type Query {\n        hello: String,\n        getProductDetail(id: ID!): Product\n        searchProducts: [Product]\n    }\n");
exports.default = productSchema;
// searchProducts(searchkey: String): [Prouduct]
//         getProductDetail(id: !Id): Product
