import React, { useState, useEffect, useRef } from "react";
import ReactStars from "react-rating-stars-component";


function Review(props){
  const [review, setEmail] = useState("");
  const options = [1,2,3,4,5];
  const [myValue, setMyValue] = useState(1);
  

  const thirdExample = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 1,
    color: "black",
    activeColor: "yellow",
    onChange: newValue => {
      setMyValue(newValue)
      console.log(`Example 3: new value is ${newValue}`);
    }
  };

  const handleSubmit= (e)=> {
    e.preventDefault();
    let temp = 'http://localhost:5000/review'
    console.log(myValue)
    let m = temp.concat("/",props.movie)
    const obj = {
      username: localStorage.getItem('username'),
      text: review,
      rating: myValue
    };
    const h = JSON.stringify(obj)

    fetch(m,{
        method: 'PUT',
        headers: {"Content-Type": 'application/json'},
        body: h
    }).then((res => console.log(res)))

  }

  return (
    <div className="row">
      <div className="col">
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
            <h4>Ingrese su Review de la pelicula</h4>
            <textarea
              onChange={(e) => setEmail(e.target.value)}
              value={review}
              className="form-control"
              placeholder="Review"
              autoFocus
            />
          </div>
          <div className="Stars">
          <ReactStars {...thirdExample} />
          </div>
          <br/>
          <button className="btn btn-primary btn-block">
            Send Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Review;