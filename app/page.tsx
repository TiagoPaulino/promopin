import { Header } from "./components/header";
import {ProductList}  from "./components/productList";


export default function Home() {
  
  return (
    <div className="flex flex-col pt-10">
      <Header/>
      <ProductList />
    </div>
  );
}
