import model from "../models/ordersModel.js";
const addOrder = async (req, res) => {
  const { client } = req.body;
  const { type, trademark, model, issue } = req.body.device;
  const newOrder = new model({
    client: client,
    device: {
      type,
      trademark,
      model,
      issue,
    },
  });
  newOrder.save();
  return res.status(201).json({ message: "Ok" });
};
const getOrders = async (req, res) => {
  const orders = await model.find();
  return orders.length > 0 ? res.status(200).json(orders) : res.status(204);
};
const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { client, device } = req.body;
  await model.findByIdAndUpdate(id, { client, device });
  res.status(200).json({ message: "Order updated" });
};
const getOrderById = async (req, res) => {
  const order = await model.findById(req.params.id);
  return res.status(200).json(order);
};
const deleteOrder = async (req, res) => {
  await model.findByIdAndDelete(req.params.id);
  return res.status(204).json({ message: "Deleted" });
};

export default { addOrder, getOrderById, getOrders, updateOrder, deleteOrder };
