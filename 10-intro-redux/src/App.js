import CreateCustomer from "./featuers/customer/CreateCustomer";
import Customer from "./featuers/customer/Customer";
import AccountOperations from "./featuers/account/AccountOperations";
import BalanceDisplay from "./featuers/account/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const customer = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customer === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;



// import { useState } from "react";

// const products = [
//   { id: 1, name: "iPhone 15", price: 800, category: "phone" },
//   { id: 2, name: "Samsung S24", price: 750, category: "phone" },
//   { id: 3, name: "AirPods Pro", price: 250, category: "accessories" },
//   { id: 4, name: "Apple Watch", price: 400, category: "accessories" },
// ];

// function ProductList({ products, onSelect }) {
//   console.log("ProductList rendered");

//   return (
//     <div>
//       {products.map((product) => (
//         <ProductItem
//           key={product.id}
//           product={product}
//           onSelect={onSelect}
//         />
//       ))}
//     </div>
//   );
// }

// function ProductItem({ product, onSelect }) {
//   console.log("ProductItem rendered:", product.name);

//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>${product.price}</p>

//       <button onClick={() => onSelect(product)}>
//         Select
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [search, setSearch] = useState("");

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleSelect = (product) => {
//     console.log("Selected:", product.name);
//   };

//   return (
//     <div>
//       <h1>Products</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Count: {count}
//       </button>

//       <input
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search..."
//       />

//       <ProductList
//         products={filteredProducts}
//         onSelect={handleSelect}
//       />
//     </div>
//   );
// }