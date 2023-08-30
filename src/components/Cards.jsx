import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from '../context/Firebase';
  


function Cards(props) {
  const firebase =  useFirebase()  
const [url , setUrl] = useState(null)
useEffect(()=>{
  firebase.getImageURL(props.imageURL).then((url)=> setUrl(url))
},[firebase , props.imageURL])
  return (
    <div className="col-md-4 mb-4 col-sm-12" style={{cursor:'pointer'}}>
    <Card style={{ width: '18rem' }} className='ms-5'>
      <Card.Img variant="top" src={url} style={{width:'auto' }} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.isbn} and the Price is {props.price}
        </Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
Cards.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Cards;