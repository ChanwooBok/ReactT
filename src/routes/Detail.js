import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';


function Detail() {
    // const { id } = useParams();
    const {  id, summary } = useParams(); // 2개 이상의 params가져오기. 

    // 이 페이지에서는 영화아이디가 일치하는 한개의 영화만 보여줄것이다.
    const [loading, setLoading] = useState(true);
    const [movie, SetMovie] = useState([]);

    const getMovie = async() => {
      const json = await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      
      SetMovie(json.data.movie);
      setLoading(false);
      console.log(json.data.movie);
    }


    useEffect(() => {
    getMovie();
    }, []);
    return (
        <div>
          {loading ? (
            <h1>loading ...</h1>
          ) : (
            <div>
              <Movie 
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={summary}
                genres={movie.genres}
              />
            </div>
          )}
        </div>
        );
      }
  export default Detail;