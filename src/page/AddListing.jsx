import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";

const AddListing = () => {

    const firebase = useFirebase()

    const [name , setName] = useState('')
    const [isbn , setIsbn] = useState('')
    const [price , setPrice] = useState('')
    const [coverPic , setCoverPic] = useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await firebase.handleCreateNewListing(name , isbn , price , coverPic)
    }
  return (
    <>
      <Form className="container card mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3"  controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ISBN</Form.Label>
          <Form.Control type="text" placeholder="Enter ISBN Number" value={isbn} onChange={(e)=> setIsbn(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-bold">Price of Book</Form.Label>
          <Form.Control type="text" placeholder="Enter Price" value={price} onChange={(e)=> setPrice(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-bold">Choose your File </Form.Label>
          <Form.Control type="file" placeholder="Enter file"  onChange={(e)=> setCoverPic(e.target.files[0])}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddListing;
