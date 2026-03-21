import mongoose from "mongoose"

const configureDB = async () => {
    try{
        await mongoose.connect("mongodb://mongo:GVwzcoQYABscoHBsFQCXsuPBtHhOKAAd@caboose.proxy.rlwy.net:55004")//"mongodb://127.0.0.1:27017/notes-app"
        console.log("Connected to db")
    }catch(error){
        console.log("Error connecting to db", error)
    }
}

export default configureDB
