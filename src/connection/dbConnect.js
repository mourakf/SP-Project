import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/SP-Books')

let db = mongoose.connection

export default db