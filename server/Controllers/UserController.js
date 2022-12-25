import UserModel from "../Models/UserModel.js";

export const AddTask = async (req, res) => {
  const id = req.params.id;
  const task = req.body.task;
  try {
    const user = await UserModel.findById(id);

    if (!user.Tasks.includes(task)) {
      await user.updateOne({ $push: { Tasks: task } });
      res.status(200).send("task added");
    } else {
      res.status(403).send("task All ready present");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const RemoveTask = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    await user.updateOne({ Tasks: [] });
    res.status(200).send("Task clean");
  } catch (error) {
    res.status(500).json(error);
  }
};
