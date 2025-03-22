import { Header } from "./components/header";
import {ProductList}  from "./components/productList";


export default function Home() {
  
  return (
    <div className="flex flex-col items-center pt-10 gap-5">
      <Header/>
      <ProductList />
    </div>
  );
}
