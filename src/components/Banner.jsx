import { useEffect,useState } from "react"
import axios from "axios"
import api from "../Apis/api"
//default baseUrl
const Base_Url = 'https://api.themoviedb.org/3'
const Base_ImgUrl = 'https://image.tmdb.org/t/p/original/'

const Banner = () => {
  const[movie,setMovies] = useState([])
  useEffect(()=>{
    //fetching the moviedata
    const Fetchdata = async()=>{
      try {
        const response = await axios.get(`${Base_Url}${api.fetchTopratedMovies}`)
        console.log(response);
        //for reandom banners
        setMovies(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
      } catch (error) {
        console.error(error);
      }
    }
    //calling the fetchData function
    Fetchdata()
    return ()=>{}
  },[])
  let trimString = function(string,len){
    return string?.length>len?
    string.substring(0,len-1)+'...':string;
  };
  return (
    <section className="container-fluid" id="info-container">
      <img  src={`${Base_ImgUrl}${movie?.backdrop_path}`} alt=""  className="banner"/>
      <div className="info">
        <div className="title">
        <h2 className="text-white  fw-bold">{movie?.title || movie?.original_title}</h2>
        </div>
        <p className="fs-5">{trimString(movie?.overview,200)}</p>
        <div className="d-grid d-md-block " id="btn-grid">
          <button className="mx-2 px-5 py-2 fs-5" type="button"><i className="fa-solid fa-play"></i>Play</button>
          <button className="px-5 py-2 fs-5 text-white" style={{background:'rgba(37, 37, 37, .61)'}} type="button"><i className="fa-solid fa-circle-info"></i>More Info</button>
        </div>
      </div>
    </section>
  )
}

export default Banner