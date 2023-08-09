import { AddButton, RemoveButton } from "./Buttons";

const CartItem = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>Item Name</div>
      <div>Item Price</div>
      <AddButton />
      <div>Item Number</div>
      <RemoveButton />
    </div>
  );
};

export default CartItem;
