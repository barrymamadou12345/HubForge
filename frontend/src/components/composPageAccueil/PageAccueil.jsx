import React from 'react'
import { Link } from 'react-router-dom'

export const PageAccueil = () => {
  return (
    <div>
      <div className="py-4 flex justify-center bg-gray-200">
        <div className="flex m-auto w-7/12 justify-around">
          <p className="text-2xl italic me-24">Page d'accueil </p>
          <Link className="text-xl italic" to="template1">
            Template1
          </Link>
          <Link className="text-xl italic" to="template2">
            Template2
          </Link>
          <Link className="text-xl italic" to="template3">
            Template3
          </Link>
          <Link className="text-xl italic" to="template4">
            Template4
          </Link>
        </div>
      </div>
    </div>
  );
}
