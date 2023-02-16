"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productQueries = {
    hello: function () { return "hello"; },
    searchProducts: function () {
        return [{
                productId: '412214212',
                name: 'Apple',
                decription: 'Apple',
                category: 'fruits',
                price: '23.2',
            }];
    },
    getProductDetail: function (_a, context) {
        var id = _a.id;
        console.log(id);
        return {
            productId: '412214212',
            name: 'Apple',
            decription: 'Apple',
            category: 'fruits',
            price: '23.2',
        };
    }
};
exports.default = productQueries;
