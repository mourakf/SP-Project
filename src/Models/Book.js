import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    editor: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: false
    },
    genre: {
        type: String,
        required: true
    }

})

const Books = mongoose.model('Book', BookSchema)
await Books.createCollection();
export default Books