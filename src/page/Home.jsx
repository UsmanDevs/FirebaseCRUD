import { useFirebase } from '../context/Firebase';
import CardGroup from 'react-bootstrap/CardGroup';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards';

function Home() {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);
  useEffect(() => {
    firebase.getList().then(books => {
      setBooks(books.docs);
    });
  }, [firebase]);
  
  return (
    <div className='mt-5 container'>
    <CardGroup >
      {books.map(item => (
        <Cards className='ms-5' key={item.id} {...item.data()}/>
      ))}
      </CardGroup>
    </div>
  );
}

export default Home;
