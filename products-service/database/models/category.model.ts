import { Model, model, Schema, Document } from 'mongoose';

export interface ICategory extends Document {
    name: string;
    description?: string;
}

const CategorySchema = new Schema<ICategory>({
    name: { type: String, required: true },
    description: String
});

const Category: Model<ICategory> = model('Category', CategorySchema);

export default Category;
