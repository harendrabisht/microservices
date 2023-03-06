import mongoose from "mongoose";
import Category, { ICategory } from "../../database/models/category.model";

export const createCategory = async (payload: ICategory) => {
    const categorySchema = new Category({
        ...payload
    });
    try {
        const result = await categorySchema.save();
        return result;
    } catch (e) {
        throw new Error(JSON.stringify(e));
    }
}
