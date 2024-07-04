// import React from "react";
// import "../index.css";

// const Loader: React.FC = () => {
//   return (
//     <div className="flex justify-center items-center h-full">
//       <div className=" mt-40 loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 ">
//         <p className="text-gray-700 text-lg">Loading, please wait...</p>
//         <p className="text-gray-500">We are getting things ready for you.</p>
//       </div>
//     </div>
//   );
// };

// export default Loader;
import React from "react";
import { useTranslation } from "react-i18next";
import "../index.css";

const Loader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center h-full">
      <div className="mt-40 text-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <p className="text-gray-700 text-lg">{t('loadingMessage.heading')}</p>
        <p className="text-gray-500">{t('loadingMessage.subheading')}</p>
      </div>
    </div>
  );
};

export default Loader;
