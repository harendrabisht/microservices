import { Schema, Document, model, Model, Types } from "mongoose";

export interface IProduct extends Document {
    name: string;
    description: string;
    quantity: number;
    price: number;
    discount?: number;
    category: Types.ObjectId;
}


const ProductSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number },
    category: { type: Schema.Types.ObjectId, ref: "Category" }
});

const Products: Model<IProduct> = model('Product', ProductSchema);

export default Products;
