import UserInfo from "./UserInfo";

function FoodMenu({ user, cartCount, setCartCount }) {
  const foods = [
    { id: 1, name: "Pizza", price: 299 },
    { id: 2, name: "Burger", price: 149 },
    { id: 3, name: "Pasta", price: 199 },
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <h2>FOOD MENU</h2>

      {foods.map((food) => (
        <div key={food.id} className="food-item">
          <span>
            {food.name} - ₹{food.price}
          </span>

          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ))}

      {/* Prop Drilling */}
      <UserInfo user={user} />
    </div>
  );
}

export default FoodMenu;