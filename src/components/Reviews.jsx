import React, { useState, useEffect, useRef } from "react";
import ReactStars from "react-rating-stars-component";


function Reviews(props){
  const [review, setEmail] = useState("");
  const options = [1,2,3,4,5];
  const [myValue, setMyValue] = useState(1);
  let temp = 'http://localhost:5000/getReview'
  let m = temp.concat("/",props.movie)
  const [reviews, setReviews] = useState([])
  
  useEffect( ()=>{
    fetch(m,{
      method: 'GET',
      headers: {"Content-Type": 'application/json'},
    }).then((res => res.json())).then(n => setReviews(n)).then(console.log(reviews))
  }, [])

  return (
    <div className="row">
    <div className="col">
      <form className="card card-body">
        <div className="form-group">
        {reviews.map(review => (
      <div className='review'>
        <h2>{review.user_id}</h2>
        <p>{review.text}</p></div>
       ))}
        </div>
      </form>
    </div>
  </div>
  );
}

export default Reviews;