import { useDispatch, useSelector } from "react-redux";
// import our action creators:
import { addFavorite, fetchFail, fetchStart, getProducts } from "../store/ProductsSlice";
import axios from "axios";
import { useEffect } from "react";
import { RootState } from "../store";
import {toast} from 'react-toastify'
import Card from "../components/Card";
// import the Product type:
import { Product } from "../models/models";
import {useState} from 'react' 
import Search from "../components/Search";

const Home = () => {
  // this will be a string
  const [search, setSearch] = useState<string>('')
  const dispach = useDispatch();
  const { loading, error, productsList, favorites } = useSelector(
    (state: RootState) => state.products
  );

  const {darkMode} = useSelector((state:RootState)=> state.ui)

  const fetchProducts = async () => {
    dispach(fetchStart());
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/search?q=${search}`);

      dispach(getProducts(data.products));
    } catch (error) {
      console.log(error);
      dispach(fetchFail());
    }
  };

  console.log(productsList);

  useEffect(() => {
    fetchProducts();
  }, [search]);


  const handleAdd = (product: Product)=>{
      if(favorites.filter(item=> item.id === product.id).length ===0){
        // ADD TO FAV
        dispach(addFavorite(product))
        toast.success('Product added to Favorites!', {theme: darkMode?'dark': 'light', position:'top-center'})
      }else{
        toast.warning('Already added to Favorites!', {theme: darkMode?'dark': 'light', position:'top-center'})
      }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
  }
  return (
    <div className="container mx-auto pt-20 p-5">
      <Search handleChange={handleChange}/>
      {loading && (
        <div className="mt-52">
          <p className="text-center text-red-600"> Loading ....</p>
        </div>
      )}
      {error && (
        <div className="mt-52">
          <p className="text-center text-red-600"> Something Went wrong</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsList.map((product) => (
          <Card key={product.id} product={product} caption="ADD" handleFunc ={handleAdd}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
