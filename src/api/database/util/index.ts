import mongoose from 'mongoose';

export async function dbConnection() {
    mongoose.set('debug', true);
    return await mongoose.connect(process.env.DB_URL || '');
}

module.exports.close = async () => {
    await mongoose.disconnect();
    console.log('Database disconnected');
};
