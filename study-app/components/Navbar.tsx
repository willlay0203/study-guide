import React, {useState, useEffect} from 'react'

type Props = {

}

const Navbar: React.FC<Props> =  ({
}) => {
  return (
   <>
    <ul className="flex bg-gray-700">
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="/library">Library</a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="/music">Music</a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">home</a>
      </li>
    </ul>
   </>
      
  );
};

export default Navbar;
