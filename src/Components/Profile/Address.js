import React from 'react';

let houseNumber = 19;
let streetName = "Jolaosho";
let stateOfOrigin = "Lagos";

const Address = () => <p>{houseNumber + " " + streetName + " Street," + " " + stateOfOrigin}</p>

export default Address;