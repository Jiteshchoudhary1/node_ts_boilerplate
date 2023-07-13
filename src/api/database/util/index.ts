import mongoose from 'mongoose';

export async function dbConnection() {
    // try {
        mongoose.set('debug', true);
        return await mongoose.connect(process.env.DB_URL || 'default');
    // } catch (error: any) {
    //     throw Error(error);
    // }
}

module.exports.close = async () => {
    await mongoose.disconnect();
    console.log('Database disconnected');
};
