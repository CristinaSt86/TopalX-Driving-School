import React from "react";
import fiatDrive from '../images/FiatDrive.png';
import '../index.css';

const Team = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-16 mt-16">
        Profesioniștii Care Fac Diferența
      </h2>
      <section className="bg-white pt-8 mb-10 shadow-2xl">
        <div ref={ref} className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Manager */}
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <div className="mb-3">
                {/* Placeholder for image */}
                <div className="bg-gray-300 h-40 w-40 mx-auto rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-center">Manager</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            {/* Instructor 1 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <div className="mb-3">
                {/* Placeholder for image */}
                <div className="bg-gray-300 h-40 w-40 mx-auto rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-center">
                Instructor 1
              </h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            {/* Instructor 2 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <div className="mb-3">
                {/* Placeholder for image */}
                <div className="bg-gray-300 h-40 w-40 mx-auto rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-center">
                Instructor 2
              </h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            {/* Instructor 3 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <div className="mb-3">
                {/* Placeholder for image */}
                <div className="bg-gray-300 h-40 w-40 mx-auto rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-center">
                Instructor 3
              </h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            {/* Secretary */}
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <div className="mb-3">
                {/* Placeholder for image */}
                <div className="bg-gray-300 h-40 w-40 mx-auto rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-center">Secretar</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-56 overflow-hidden ">
          <div className="absolute bottom-2  left-0 w-80 h-auto animate-drive">
            <img src={fiatDrive} alt="Car" />
          </div>
        </div>
      </section>
    </>
  );
});

export default Team;
