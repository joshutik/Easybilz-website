// import { useState } from "react";
// import "./RegPayment.css";
// import topPattern from "../assets/upPattern.png";
// import bottomPattern from "../assets/Patterns.png";
// import logo from "../assets/Logo.png";
// // import { TailSpin } from "react-loader-spinner";

// const RegPayment = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setIsDragging(false);
//     const file = event.dataTransfer.files[0];
//     setSelectedFile(file);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (selectedFile) {
//       console.log("File selected:", selectedFile);
//     } else {
//       console.log("No file selected");
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <form>
//         <div className="row align-items-center min-vh-100 register-bg position-relative">
//           <div className="container-fluid col-md-6 col-sm-12">
//             <div className="container text-light mt-5">
//               <div className="position-absolute top-0 bottom-0 mt-4 ms-auto ms-lg-5">
//                 <a className="" href="#">
//                   <img
//                     src={logo}
//                     alt="EasyBilz"
//                     width="170"
//                     height="100"
//                     className="img-fluid"
//                   />
//                 </a>
//               </div>
//               <p className="fs-3 px-4 pt-5 mt-5">
//                 Freedom starts with financial security. Grow yours today.
//               </p>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-6 col-sm-12 px-0">
//             <div className="tp-pathern">
//               <img src={topPattern} alt="top pattern" className="img-fluid" />
//             </div>
//             <div className="container my-5">
//               <a href="#" className="ms-5 text-decoration-none">
//               <i className="bi bi-chevron-left"></i> Go back
//               </a>
//             </div>
//             <h2 className="fw-bold text-center">Register</h2>
//             <div className="w-75 mx-auto">
//               <div className="row">
//                 <div className="col-lg-12 col-md-12 col-sm-12">
//                   <div className="container fs-5">
//                     <div className="card payment-card text-light px-4 ">
//                       <p className="text-center mt-3">
//                         kindly pay <span className="fee">#2,000 NGN</span> to
//                         the account number below and upload the reciept below:
//                       </p>
//                       <hr className="hori-line" />
//                       <div className="card-body">
//                         <p>
//                           Bank: <span className="pay-card">Stailing Bank</span>
//                           <br />
//                           Account Number:{" "}
//                           <span className="pay-card">0098737021</span>
//                           <br />
//                           Account Name:{" "}
//                           <span className="pay-card">
//                             Easybillz Co-operative Society Limited
//                           </span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-lg-12 col-md-12 col-sm-12">
//                   <div className="container-fluid fs-5 mt-5 ">
//                     <form onSubmit={handleSubmit} className="card rounded-5 upload-card py-5 file-upload-form">
//                       <div
//                         className={`file-upload-container ${
//                           isDragging ? "dragging" : ""
//                         }`}
//                         onDragOver={handleDragOver}
//                         onDragLeave={handleDragLeave}
//                         onDrop={handleDrop}
//                       >
//                         <input
//                           type="file"
//                           id="file-upload"
//                           onChange={handleFileChange}
//                           className="file-input"
//                         />
//                         <label htmlFor="file-upload" className="file-label px-3 py-2">
//                           <span role="img" aria-label="paperclip">
//                           <i className="bi bi-paperclip"></i>
//                           </span>{" "}
//                           Upload receipt
//                         </label>
//                         <span className="drag-text">or drag and drop here</span>
//                       </div>
                      
//                     </form>
//                   </div>
//                 </div>

//                 <div className="container my-5 text-center">
//                   <button
//                     type="submit" 
//                     className="submit-button bg btn btn-primary border-0 login-btn rounded-5 px-5 fw-bold register-btn"
//                   >
//                     All good? Register
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="partarn position-absolute bottom-0 start-50 translate-middle-x">
//             <img
//               src={bottomPattern}
//               alt="bottom pattern"
//               className="img-fluid"
//             />
//           </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegPayment;


import { useState } from 'react';
import './RegPayment.css';
import logo from "../assets/Logo.png";
import topPattern from "../assets/upPattern.png";
import bottomPattern from "../assets/Patterns.png";

const RegPayment = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log("File selected:", selectedFile);
      // onNext();
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center min-vh-100 register-bg position-relative">
          <div className="container-fluid col-md-6 col-sm-12">
            <div className="container text-light mt-5">
              <div className="position-absolute top-0 bottom-0 mt-4 ms-auto ms-lg-5">
                <a className="" href="#">
                  <img
                    src={logo}
                    alt="EasyBilz"
                    width="170"
                    height="100"
                    className="img-fluid"
                  />
                </a>
              </div>
              <p className="fs-3 px-4 pt-5 mt-5">
                Freedom starts with financial security. Grow yours today.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-0">
            <div className="tp-pattern">
              <img src={topPattern} alt="top pattern" className="img-fluid" />
            </div>
            <div className="container my-5">
              <a href="#" className="ms-5 text-decoration-none">
              <i className="bi bi-chevron-left"></i> Go back
              </a>
            </div>
            <h2 className="fw-bold text-center">Register</h2>
            <div className="w-75 mx-auto">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="container fs-5">
                    <div className="card payment-card text-light px-4 ">
                      <p className="text-center mt-3">
                        kindly pay <span className="fee">#2,000 NGN</span> to
                        the account number below and upload the reciept below:
                      </p>
                      <hr className="hori-line" />
                      <div className="card-body">
                        <p>
                          Bank: <span className="pay-card">Stailing Bank</span>
                          <br />
                          Account Number:{" "}
                          <span className="pay-card">0098737021</span>
                          <br />
                          Account Name:{" "}
                          <span className="pay-card">
                            Easybillz Co-operative Society Limited
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="container-fluid fs-5 mt-5 ">
                    <form onSubmit={handleSubmit} className="card rounded-5 upload-card py-5 file-upload-form">
                      <div
                        className={`file-upload-container ${
                          isDragging ? "dragging" : ""
                        }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                      >
                        <input
                          type="file"
                          id="file-upload"
                          onChange={handleFileChange}
                          className="file-input"
                        />
                        <label htmlFor="file-upload" className="file-label px-3 py-2">
                          <span role="img" aria-label="paperclip">
                          <i className="bi bi-paperclip"></i>
                          </span>{" "}
                          {selectedFile ? selectedFile.name : "Upload reciept"}
                        </label>
                      </div>
                      <div className="container mt-5">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 rounded-5 fs-4"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bt-pattern">
              <img
                src={bottomPattern}
                alt="bottom pattern"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegPayment;