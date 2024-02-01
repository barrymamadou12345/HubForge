import React from 'react'
import { Link } from 'react-router-dom'

export const PageAccueil = () => {
  return (
    <div>
      <div className="py-8 flex justify-center bg-gray-200">
        <div className="flex m-auto w-7/12 justify-around">
          <p className="text-2xl italic">Page d'accueil </p>
          <Link className="text-2xl italic" to="templates1">
            Templates 1
          </Link>
          <Link className="text-2xl italic" to="templates">
            Templates 2
          </Link>
        </div>
      </div>
    </div>
  );
}
