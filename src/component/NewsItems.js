import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let {imageurl,title,description}=this.props;
    return (
      <div>
        <div className="my-3">
        <div className="card" style={{width:"18rem"}}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/detail" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
