// import { useState } from "react";
// import { IoIosEye, IoIosEyeOff, IoMdClose } from "react-icons/io";
// import { SiTicktick } from "react-icons/si";
// import { useDispatch, useSelector } from "react-redux";
// import { closeModal } from "../../store/slices/modalSlice";

// export default function SignupForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const isOpen = useSelector((state) => state.modal.isOpen);
//   const dispatch = useDispatch();

//   return (
//     <div
//       className={`fixed z-50 inset-0 ${
//         isOpen ? "block" : "hidden"
//       } overflow-y-auto`}
//     >
//       <div className="flex  min-h-full  md:items-center justify-center md:p-4">
//         <div className="relative w-full  transform overflow-hidden md:rounded-2xl bg-white md:shadow-lg transition-all flex flex-col md:flex-row md:h-[600px] max-w-screen-lg">
//           <button
//             className="absolute left-0 flex md:left-auto md:right-0 items-center top-0 md:m-6 m-2 p-4 z-30 text-white"
//             onClick={() => dispatch(closeModal())}
//           >
//             <IoMdClose size={30} />
//           </button>

//           {/* Login Section */}
//           <div className=" md:w-1/2 flex flex-col items-center justify-center flex-1 md:py-0 py-12">
//             <div className="md:w-1/2 flex flex-col items-center justify-center flex-1 md:py-0 py-12">
//               <div className="flex flex-col md:h-[370px] pt-10 md:pt-0 w-80 relative">
//                 <h2 className="text-2xl font-semibold text-center mb-8">
//                   Login
//                 </h2>
//                 <form className="flex flex-col justify-between flex-1">
//                   <div className="mb-6">
//                     <div className="mb-4">
//                       <label className="mb-2 block text-sm font-semibold">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         className=" focus:outline-none focus:ring-customGreen focus:border-2 focus:border-customGreen mb-2 h-12 w-full rounded-full border px-5 bg-white text-lg "
//                         placeholder="name@example.com"
//                         autoComplete="email"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="mb-2 block text-sm font-semibold">
//                         Password
//                       </label>
//                       <div className="relative">
//                         <input
//                           type={showPassword ? "text" : "password"}
//                           name="password"
//                           className=" focus:outline-none focus:ring-customGreen focus:border-2 focus:border-customGreen mb-2 h-12 w-full rounded-full border px-5 bg-white text-base "
//                           placeholder="••••••••"
//                           autoComplete="current-password"
//                         />
//                         <button
//                           type="button"
//                           className="absolute top-1/2 right-3 pb-10 transform -translate-y-1/4 text-gray-600"
//                           onClick={() => setShowPassword((prev) => !prev)}
//                         >
//                           {showPassword ? (
//                             <IoIosEyeOff size={25} />
//                           ) : (
//                             <IoIosEye size={25} />
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       type="button"
//                       className="text-xs uppercase tracking-wider underline mx-auto hover:text-customGreen transition-all duration-300 ease-in-out"
//                     >
//                       Forgot your password?
//                     </button>
//                   </div>
//                   <button
//                     className="flex justify-center items-center rounded-full bg-customGreen text-white text-lg h-12 px-7 w-full hover:bg-green-700 transition-all duration-300 ease-in-out"
//                     type="submit"
//                     disabled
//                   >
//                     Log in
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* Signup Section */}
//           <div className="relative md:w-1/2 text-white flex flex-col items-center justify-center flex-1 md:py-0 py-12 0">
//             <div className="absolute inset-0 bg-black bg-opacity-100 flex justify-center items-center">
//               <img
//                 alt="login background"
//                 loading="lazy"
//                 width="512"
//                 height="600"
//                 className="object-cover h-full w-full opacity-60"
//                 src="https://plus.unsplash.com/premium_photo-1683121938935-118d0a16a469?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFydHxlbnwwfHwwfHx8MA%3D%3D"
//               />
//             </div>
//             <div className="flex flex-col w-72 md:h-[370px] justify-between items-center z-30">
//               <h2 className="text-2xl font-semibold text-center mb-6">
//                 Create your account
//               </h2>
//               <ul className="space-y-6 mb-8 text-sm">
//                 <li className="flex items-center">
//                   <span className="h-5 w-5 flex items-center text-customGreen justify-center rounded-full bg-white mr-4">
//                     <SiTicktick />
//                   </span>
//                   Save time when booking
//                 </li>
//                 <li className="flex items-center">
//                   <span className="h-5 w-5 flex items-center text-customGreen justify-center rounded-full bg-white mr-4">
//                     <SiTicktick />
//                   </span>
//                   Save your favourites easily
//                 </li>
//                 <li className="flex items-center">
//                   <span className="h-5 w-5 flex items-center justify-center rounded-full text-customGreen bg-white mr-4">
//                     <SiTicktick />
//                   </span>
//                   View your reservations and history
//                 </li>
//               </ul>
//               <button
//                 className="flex justify-center items-center rounded-full border border-none bg-white text-gray-800 text-lg h-12 px-7 w-full hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out "
//                 onClick={() => dispatch(closeModal())}
//               >
//                 Create my account
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
