import { Product } from "../models/models";
import Rating from "./Rating";

interface CardProps {
  product: Product;
  caption: string;
  handleFunc: (product:Product)=> void
}

// we have to create interfaces for the props that we are passing to the component
// this is because we are using typescript, and we need to define the type of the props
// this is done by using the React.FC generic type: React.FC<CardProps>!

const Card = ({ product, caption, handleFunc }: CardProps) => {
  return (
    <div className="inline-block bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark: dark:border-gray-700 ">
      <a href="#" className="flex flex-row justify-around">
        <img src={product?.images[0]} className="p-8  h-[300px]" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {" "}
            {product?.title}
          </h5>
        </a>

        <div className="flex justify-center mt-2.5 mb-5">
          <Rating rating={product.rating} />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {" "}
            ${product.price}
          </span>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
            text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
            onClick={()=>handleFunc(product)}
          >
            {caption}
          </button>
        </div>

        <p className="text-sm mt-2 text-gray-50 line-clamp-1 pt-5"> {product.description}</p>
      </div>
    </div>
  );
};

export default Card;
