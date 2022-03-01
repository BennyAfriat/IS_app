import { Schema } from 'mongoose';
import mongoose from 'mongoose';

// Document interface
interface Purchase {
    userId: string;
    userName: string;
    price: number;
}

// Schema
export const purchaseSchema = new Schema<Purchase>({
    userId: {  type: String, required: true },
    userName: { type: String, required: true },
    price: { type: Number, required: true }
  
}, {
    timestamps: { createdAt: true, updatedAt: false }
  });

export const PurchaseModel = mongoose.model('PurchaseModel', purchaseSchema, 'test' );