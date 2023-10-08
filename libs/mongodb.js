import mongoose from 'mongoose';

const connectMongoDb = async() =>{

    try {

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected MongoDB");
        
    } catch (error) {
        console.error(error);
    }

}

export default connectMongoDb;