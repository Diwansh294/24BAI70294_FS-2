import useUser from "../hooks/useUser";

function Navbar({ cartCount }) {
  const user = useUser();

  return (
    <div className="navbar">
      <div>
        <h2>Welcome, {user.name}</h2>
        <p>Location: {user.location}</p>
      </div>

      <h2>Cart: {cartCount} items</h2>

      <hr />
    </div>
  );
}

export default Navbar;