interface SearchProps {
    // this is a function that takes an event and returns nothing
    // react has many types for events, this one is for the input element change event
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Search = ({ handleChange }: SearchProps) => {
    
    return (
      <div className="relative w-6/12 mx-auto mb-5">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className="bi bi-search text-xl text-gray-500 dark:text-gray-400"></i>
        </div>
        <input type="search"  className="
        block outline-none w-full p-4 pl-10 text-sm 
        text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
        dark:bg-slate-700 dark:border-gray-600 dark:text-white
        focus:ring-gray-900 focus:border-gray-900 dark:focus:bg-gray-800 
        "
          placeholder="Search product"
          onChange={handleChange}
        />
  
      </div>
    );
  };
  
  export default Search;
  