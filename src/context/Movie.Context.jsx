import { useState  , useContext, createContext } from "react";


export const MovieContext = createContext();

const MovieProvider = ({ children }) => {

    const[movie,setMovie] = useState({
        id:0,
        orignal_title:"",
        overview:"",
        backdrop_path:"",
        poster_path:"",
    });

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const rentMovie = () => {
        setIsOpen(true);
        setPrice(149);
    }

    const buyMovie = () => {
        setIsOpen(true);
        setPrice(599);
    }

return <MovieContext.Provider value={{movie,setMovie,isOpen,setIsOpen,price,setPrice,rentMovie,buyMovie}}>{children}</MovieContext.Provider>
};
export default MovieProvider;