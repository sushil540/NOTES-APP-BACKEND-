
import Note from "../models/Note.js";

const noteCtlrs = {}

noteCtlrs.create = async (req, res) => {
    const { date, title, content } = req.body;
    try {
      const note = await Note.create({ userId: req.user.id, date, title, content });
      res.status(201).json(note);
    } catch (err) {
      res.status(400).json({ message: "Failed to create note" });
    }
}

noteCtlrs.getAll = async (req, res) => {
    try {
      const notes = await Note.find({ userId: req.user.id, isDelete:false }).select("-userId");
      res.json(notes);
    } catch (err) {
      res.status(400).json({ message: "Failed to fetch notes" });
    }
}

noteCtlrs.update = async (req, res) => {
    const { id } = req.query
    const { date, title, content } = req.body;
    try {
      const note = await Note.findOneAndUpdate(
        { _id: id, userId: req.user.id },
        { date, title, content },
        { new: true }
      );
      res.json(note);
    } catch (err) {
      res.status(400).json({ message: "Failed to update note" });
    }
}

noteCtlrs.delete =  async (req, res) => {
    try {
      const { id } = req.query
      await Note.findOneAndUpdate(
      { _id: id, userId: req.user.id, isDelete:false },
      { $set:{ isDelete:true}},
      {new:true});
      res.json({ msg: "Note deleted" });
    } catch (err) {
      res.status(400).json({ message: "Failed to delete note" });
    }
}
  
export default noteCtlrs
