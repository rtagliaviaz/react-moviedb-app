import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">Movie Finder</a>
          </div>
        </nav>
      </div>
    )
  }
}
