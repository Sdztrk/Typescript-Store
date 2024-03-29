type RatingProps = {
    rating: number;
  };
  
  const Rating = ({ rating }: RatingProps) => {
    const fillStars = Array.from(Array(Math.floor(rating)).keys());
    // the above line will create an array of numbers from 0 to the rating.
    // This works by creating an array of undefined values, then using the keys() method to get the keys of the array, which will be the numbers from 0 to the length of the array
    // for example, if the rating is 3.5, the array will be [0,1,2,3]
  
  
    const unfiledStarts = Array.from(Array(5 - Math.floor(rating)).keys());
    // the above line will create an array of numbers from 0 to 5-rating the same as above, but this time we are subtracting the rating from 5
    // for example, if the rating is 3.5, the array will be [0,1]
  
    return (
      <>
        {fillStars.map((star) => (
          <i key={star} className="bi bi-star-fill text-yellow-300 mr-1"></i>
        ))}
        {unfiledStarts.map((star) => (
          <i
            key={star}
            className="bi bi-star-fill text-gray-200 mr-1 dark:text-gray-600"
          ></i>
        ))}
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold mx-2 px-2.5 py-0.5 rounded dark:bg-blue-200 ">{rating.toFixed(1)}</span>
      </>
    );
  };
  
  export default Rating;
  