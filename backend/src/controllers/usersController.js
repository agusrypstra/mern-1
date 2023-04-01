import model from "../models/usersModel.js";
const addUser = async (req, res) => {
  const { username, name, email, password } = req.body;
  const newUser = new model({
    username,
    name,
    email,
    password,
  });
  await newUser.save();
  return res.status(200).json({ message: "User added" });
};
const getUsers = async (req, res) => {
  const users = await model.find();
  return res.status(200).json(users);
};
const getUser = async (req, res) => {
  const id = req.params.id;
  const users = await model.findById(id);
  return res.status(200).json(users);
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { username, name, email, password } = req.body;
  await model.findByIdAndUpdate(id, { username, name, email, password });
  return res.status(200).json({ message: "User updated" });
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  await model.findByIdAndDelete(id);
  return res.status(204).json({ message: "User deleted" });
};
export default { addUser, getUsers, deleteUser, getUser, updateUser };