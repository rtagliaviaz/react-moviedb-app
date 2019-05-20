import React from 'react';
import MovieInfo from './MovieInfo';

const Movie = props => {
  return (
    <div className="col-sm-12  col-md-6 col-lg-4 my-4">
      <div className="card" style={{width: '18rem'}}>
      { props.image == null ? <img src="http://www.ipresas.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
         style={{height: '400px', width: '100%'}} className="card-img-top" alt="..." /> 
         : <img src={`http://image.tmdb.org/t/p/w185${props.image}`}
         style={{height: '400px', width: '100%'}} className="card-img-top" alt="..." />}
          
        
        <div className="card-body">
          <h5 className="card-title">
          { props.title.length < 20 ? `${props.title}` : `${props.title.substring(0, 16)}...`}
          </h5>
          <p className="card-text">
          { props.overview.length < 50 ? `${props.overview}` : `${props.overview.substring(0, 55)}...`}
          </p>
          
          <MovieInfo {...props}/>
          

        </div>
      </div>
    </div>
  );

    
}

export default Movie;