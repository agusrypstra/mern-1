const createOrder = async ({title,description,}) => {
  console.log(params);
};
const getOrders = () => {
  return "GET Orders";
};
const editOrder = () => {
  return "PUT Order";
};
const getOrderById = () => {
  return "GET Order by id";
};
const deleteOrder = () => {
  return "DELETE Order by id";
};

export default { createOrder, getOrderById, getOrders, editOrder, deleteOrder };
