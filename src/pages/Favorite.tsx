import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Card from "../components/Card";
import { Product } from "../models/models";
import { removeFavorite } from "../store/ProductsSlice";
import { toast } from "react-toastify";

// here we are creating a type which is a function that takes a product as an argument and returns nothing
type VoidFun = (product: Product) => void;

const Favorite = () => {
  // setup our dispatch function:
  const dispach = useDispatch();

  // setup our useSelector hook for the products and the darkMode:
  const { favorites } = useSelector((state: RootState) => state.products);
  const { darkMode } = useSelector((state: RootState) => state.ui);

  // here we are defining the handleRemove function
  // this function takes a product as an argument and returns nothing
  // this function will be used to remove a product from the favorites
  const handleRemove: VoidFun = (product) => {
    const newData = favorites.filter((item) => item.id !== product.id);
    dispach(removeFavorite(newData));
    toast.success("Product removed...", {
      theme: darkMode ? "dark" : "light",
      position: "top-center",
    });
  };

  return (
    <div className="container mx-auto pt-20 p-5">
      <h1
        className="font-bold text-2xl dark:text-white text-center 
       m-3 text-slate-800
      "
      >
        {" "}
        My Favorites Products
      </h1>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favorites.map((product) => (
          <Card
            key={product.id}
            product={product}
            caption="REMOVE"
            handleFunc={handleRemove}
          />
        ))}

        {favorites.length===0&&(
          <h3 className="font-bold text-center text-2xl text-red-500 mt-52"> No Favorites..</h3>
        )}
      </div>
    </div>
  );
};

export default Favorite;
