import OrdersComponent from "../../../components/OrdersComponent";

const Orders = () => {
  return (
    <div className="p-10 ">
      {/* To Add product */}
      <div className="flex gap-6 justify-start items-start ">
        <h1 className="text-[#E83C00] text-2xl font-semibold">Orders</h1>
      </div>
      {/* Todo Get Order */}
      <OrdersComponent />
    </div>
  );
};

export default Orders;
