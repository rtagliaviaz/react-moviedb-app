import React from 'react'

const SearchForm = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 offset-sm-4">
          <form onSubmit={props.getMovie} style={{ marginBottom: "2rem" }}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="movieName"
                placeholder="Movie Name"
              />
              <button className="btn btn-dark my-2">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;