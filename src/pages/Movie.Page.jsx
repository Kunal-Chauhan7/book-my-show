import React, { useEffect, useState , useContext } from 'react'
import MovieLayoutHoc from '../layout/Movie.layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { MovieContext } from '../context/Movie.Context';
import Slider from 'react-slick';
import {FaCcVisa} from 'react-icons/fa'
import {FaCcApplePay} from 'react-icons/fa'
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import MovieHero from '../components/MovieHero/MovieHero.Component';

const MoviePage = () => {


  const {id} = useParams();
  
  const{movie,setMovie} = useContext(MovieContext);

  const [cast , setCast] = useState([]);
  const[similarMovies,setSimilarMovies] = useState([]);
  const[recommendedMovies , setRecommendedMovies] = useState([]);

  useEffect(()=>{
    const request = async()=>{
      const getCast = await axios.get(`movie/${id}/credits?api_key=7dbd84284e8f5b0288084cb828f125ed&language=en-US&page=1`);
      setCast(getCast.data.cast);
    };

    request();
  },[id]);

  useEffect(()=>{
    const requestSimilarMovies = async()=>{
      const getSimilarMovies = await axios.get(`/movie/${id}/similar?api_key=7dbd84284e8f5b0288084cb828f125ed&language=en-US&page=1`);
      setSimilarMovies(getSimilarMovies.data.results);
    };

    requestSimilarMovies();
  },[id]);

  useEffect(()=>{
    const requestRecommndedMovies = async()=>{
      const getRecommendedMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=7dbd84284e8f5b0288084cb828f125ed&language=en-US&page=1`);
      setRecommendedMovies(getRecommendedMovies.data.results);
    };

    requestRecommndedMovies();
  },[id]);

  useEffect(()=>{
    const requestMovie = async()=>{
      const getMovieData = await axios.get(`/movie/${id}?api_key=7dbd84284e8f5b0288084cb828f125ed`);
      setMovie(getMovieData.data)
    }
    requestMovie()
  },[id])

  const settingCast = {};

  const settings = {};
  


  return (
    <>
      <MovieHero/>
      <div className='my-12 container px-4 lg-ml-20'>
        <div className='flex flex-col items-start gap-3 '>
          <h1 className='text-gray-800 font-bold text-2xl'>
            About the movie 
          </h1>
          <p>
            {movie.overview}
          </p>
        </div>
        <div className='my-8'>
          <hr />
        </div>
        <div className='my-8'>
          <h2 className='text-gray-800 font-bold text-2xl mb-3'>
            Applicable Offers
          </h2>
          <div className='flex flex-col gap-3 lg:flex-row lg:w-2/4'>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md w-full'>
              <div className='w-8 h-8'>
                <FaCcVisa className='w-full h-full'/>
              </div>
              <div className='flex flex-col items-startw'>
                <h3 className='text-gray-700 font-bold text-xl'>
                  Visa Stream Offer
                </h3>
                <p className='text-gray-600'>Get 50% off up to INR 150 on all Rupay card on BookMyShow Stream</p>
              </div>
            </div>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md w-full'>
              <div className='w-8 h-8'>
                <FaCcApplePay className='w-full h-full'/>
              </div>
              <div className='flex flex-col items-startw'>
                <h3 className='text-gray-700 font-bold text-xl'>
                  Film Pass
                </h3>
                <p className='text-gray-600'>Get 50% off up to INR 150 on all Rupay card on BookMyShow Stream</p>
              </div>
            </div>
          </div>
        </div>
        <div className='my-8'>
          <hr />
        </div>

        {/*{Cast Slider}*/}

        <div className='my-8'>
          <hr />
        </div>

        {/*Recomened movie Slider*/}
        <div>
          <PosterSlider
          config={settings}
          title="recommendedMovies"
          posters={recommendedMovies}
          isDark={false}
          />
        </div>
        <div className='my-8'>
          <hr />
        </div>
      </div>
    </>
  )
}
export default MovieLayoutHoc (MoviePage);