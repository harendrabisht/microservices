import { buildSchema } from "graphql";

const productSchema = buildSchema(`
    type Product {
        productId: ID
        name: String
        decription: String
        category: String
        price: String
    }
    type Query {
        hello: String,
        getProductDetail(id: ID!): Product
        searchProducts: [Product]
    }
`);

export default productSchema;
