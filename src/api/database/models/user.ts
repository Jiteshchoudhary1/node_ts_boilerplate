import mongoose, { Schema, Document } from 'mongoose';
export interface IUser extends Document {
    name: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    name: String,
    email: String,
});

export default mongoose.model<IUser>('user', UserSchema);
