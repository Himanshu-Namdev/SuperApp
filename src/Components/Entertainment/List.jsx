import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const List = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };

    fetchMovies();
  }, []);

  return (
    <div className=" flex justify-center pl-[250px] ">
      <div className="">
        <p className="text-white text-2xl ml-2" style={{ overflowY: "hidden" }}>
          {genre}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 ml-2">
          {movies.map((movie, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="w-full cursor-pointer transform transition-transform"
            >
              <img
                src={movie?.primaryImage?.url}
                alt={movie?.title}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "20vh",
                  borderRadius: "12px",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
