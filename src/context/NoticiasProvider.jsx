import axios from "axios";
import { createContext, useState, useEffect } from "react";

const NoticiasContext = createContext();
const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [ noticias, setNoticias ] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ch&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const { data } = await axios.get(url);
      setNoticias(data.articles);
    };
    consultarAPI();
  }, [categoria]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};
export { NoticiasProvider };
export default NoticiasContext;
