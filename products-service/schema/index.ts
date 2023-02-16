import productQueries from "./product-query";
import productSchema from "./product-schema";

export const resolver = {
    ...productQueries,
};

export const schema = productSchema;
