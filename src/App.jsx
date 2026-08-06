import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UserContext from "./UserContext";

function App() {
  const user = {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    location: "Chandigarh",
  };

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    console.log(`Cart updated. Total items: ${cartCount}`);
  }, [cartCount]);

  return (
    <UserContext.Provider value={user}>
      <div className="container">
        <h1>QUICK BITE - FOOD ORDERING APP</h1>

        <Navbar cartCount={cartCount} />

        
        <Home
          user={user}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      </div>
    </UserContext.Provider>
  );
}

export default App;