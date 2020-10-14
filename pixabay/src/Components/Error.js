import React from 'react';

const Error = ({mensaje}) => {
    return ( 

        <p className="my-2 p-4 text-center alert alert-primary">{mensaje}</p>
     );
}
 
export default Error;