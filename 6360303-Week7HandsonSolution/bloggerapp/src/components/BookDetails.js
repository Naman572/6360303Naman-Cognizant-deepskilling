import React from 'react';
const books = [
  { id: 1, title: "Deep Dive into Angular 11", price:800 },
  { id: 2, title: "Master React", price:670 },
  { id: 3, title: "Mongo Essentials", price:900 }
];
const BookDetails = () => {
  return (
    <div>
       <h2 style={{ textAlign: 'center' }}>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3 style={{ margin: 0 }}>{book.title}</h3>
            <p style={{ margin: 0 }}>{book.price}</p>
            <br></br>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
