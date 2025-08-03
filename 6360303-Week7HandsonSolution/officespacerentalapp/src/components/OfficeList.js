import React from 'react';

const OfficeList = () => {
  const office = {
    name: 'DBS',
    rent: 50000,
    address: 'Chennai',
 image: process.env.PUBLIC_URL + '/office.jpg'
  }

  const offices = [
    { name: 'Symmetric', rent: 75000, address: 'Hinjewadi, Pune' },
    { name: 'Chubb', rent: 59000, address: 'MG Road, Bengaluru' },
    { name: 'SmartCube', rent: 82000, address: 'Cyber City, Gurgaon' },
    { name: 'DeskZone', rent: 45000, address: 'Salt Lake, Kolkata' },
  ];

  const heading = <h1>Office Space, at affordable range </h1>;

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      {heading}

     <img
  src={office.image}
  alt="Office"
  width="500"
  height="300"
  style={{ borderRadius: '8px', marginBottom: '20px' }}
/>
    <h2>{office.name}</h2>
      <p><strong>Address:</strong> {office.address}</p>
      <p>
        <strong>Rent:</strong>{" "}
        <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
          ₹{office.rent}
        </span>
      </p>

      <hr />

      <h3>More Office Spaces:</h3>
      <ul>
        {offices.map((item, index) => (
          <li key={index}>
            <h4>{item.name}</h4>
            <p><strong>Address:</strong> {item.address}</p>
            <p>
              <strong>Rent:</strong>{" "}
              <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
                ₹{item.rent}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default OfficeList;
