import { useContext } from "react"
import { MovieContext } from "../../context/Movie.Context"
const MovieHero = () => {
    const { movie } = useContext(MovieContext);

    const genres = movie.genres?.map(({ name }) => name).join('')

    return (
        <>
            <div>
                {/*mobile and tab sizes*/}
                <div className="lg:hidden w-full">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="cover poster" className="m-4 rounded" style={{ width: "calc(100% - 2rem)" }} />
                </div>
                <div className="flex flex-col gap-3 lg:hidden">
                    <div className="flex flex-col-reverse gap-3 px-4 my-3">
                        <div className="text-black flex flex-col gap-2 md:px-4">
                            <h4>
                                4k rating
                            </h4>
                            <h4>
                                English , hindi , kanada , tamil , telgu
                            </h4>
                            <h4>
                                {movie.runtime} min | {genres}
                            </h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Rent ₹ 149
                        </button>
                        <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">
                            Buy ₹ 500
                        </button>
                    </div>
                </div>
                <div className="relative hidden w-full lg:block" style={{ height: "30rem" }}>
                    <div className="absolute z-10 w-full h-full" style={{
                        backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 14.95%, rgba(34, 34, 34) 30.3%, rgba(34, 34, 34, 0.90) 38.3%, rgba(34, 34, 34, 0.60) 58.3%, rgba(34, 34, 34, 0.04) 100%)",
                    }} />
                </div>
            </div>
        </>
    )
}
export default MovieHero