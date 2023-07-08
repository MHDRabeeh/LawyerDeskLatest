// import React, { useState } from "react";
// import { Stack, Switch } from "@chakra-ui/react";
// import user from "../assets/user.png";
// import bell from "../assets/bell.svg";
// import dark from "../assets/dark.svg";
// import privacy from "../assets/privacy.svg";
// import languag from "../assets/languag.svg";
// import logout from "../assets/logout.svg";
// import delet from "../assets/delet.svg";
// import history1 from "../assets/history1.svg";
// import security from "../assets/Security.svg";
// import legal from "../assets/legal.svg";
// import seeting from "../assets/seetings.svg";
// import { Image } from "@chakra-ui/react";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
// } from "@chakra-ui/react";

// const Settings = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className="relative">
//       <p onClick={toggleDropdown}>Settings</p>

//       <Drawer
//         isOpen={isOpen}
//         onClose={toggleDropdown}
//         placement="right"
//         size="md"
//       >
//         <DrawerOverlay>
//           <DrawerContent bg="white" maxW="25%">
//             <DrawerCloseButton />
//             <DrawerHeader
//               style={{
//                 fontFamily: "Open Sans",
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 paddingTop: "50px",
//                 fontSize: "20px",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <Image
//                 src={seeting}
//                 alt="Image"
//                 boxSize="60px"
//                 mr="10px"
//                 borderRadius="50%"
//               />
//               Settings
//             </DrawerHeader>

//             <DrawerBody style={{ textAlign: "center", alignItems: "center" }}>
//               <div className="p-4" style={{ display: "flex" }}>
//                 <img
//                   src={user}
//                   alt="Image 1"
//                   style={{
//                     marginRight: "15px",
//                     height: "60px",
//                     width: "60px",
//                     borderRadius: "60px",
//                   }}
//                 />
//                 <span
//                   style={{
//                     color: "black",
//                     paddingTop: "10px",
//                     fontFamily: "Open Sans",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   JOSEPH COTCHETT<br></br>
//                   joseph@lawyerdesk.in
//                 </span>
//               </div>
//               <div className="p-4" style={{ display: "flex" }}>
//                 <img
//                   src={privacy}
//                   alt="Image 1"
//                   style={{
//                     marginRight: "20px",
//                     height: "18px",
//                     width: "18px",
//                     borderRadius: "60px",
//                   }}
//                 />
//                 <span
//                   style={{
//                     color: "black",
//                     paddingTop: "0px",
//                     fontFamily: "Open Sans",
//                     fontWeight: "550",
//                   }}
//                 >
//                   Change Password
//                 </span>
//               </div>
//               <div className="p-4" style={{ display: "flex" }}>
//                 <img
//                   src={security}
//                   alt="Image 1"
//                   style={{
//                     marginRight: "20px",
//                     height: "22px",
//                     width: "22px",
//                     borderRadius: "60px",
//                   }}
//                 />
//                 <span
//                   style={{
//                     color: "black",
//                     paddingTop: "0px",
//                     fontFamily: "Open Sans",
//                     fontWeight: "550",
//                   }}
//                 >
//                   Privacy and Security
//                 </span>
//               </div>
//               <div className="p-4" style={{ display: "flex" }}>
//                 <img
//                   src={legal}
//                   alt="Image 1"
//                   style={{
//                     marginRight: "20px",
//                     height: "20px",
//                     width: "20px",
//                     borderRadius: "60px",
//                   }}
//                 />
//                 <span
//                   style={{
//                     color: "black",
//                     paddingTop: "0px",
//                     fontFamily: "Open Sans",
//                     fontWeight: "550",
//                   }}
//                 >
//                   Legal Preference
//                 </span>
//               </div>
//               <div className="p-4" style={{ display: "flex" }}>
//                 <img
//                   src={history1}
//                   alt="Image 1"
//                   style={{
//                     marginRight: "20px",
//                     height: "18px",
//                     width: "18px",
//                     borderRadius: "60px",
//                   }}
//                 />
//                 <span
//                   style={{
//                     color: "black",
//                     paddingTop: "0px",
//                     fontFamily: "Open Sans",
//                     fontWeight: "550",
//                   }}
//                 >
//                   History
//                 </span>
//               </div>
//               <div className="p-4" style={{ display: "flex" }}>
//                 <img
//                   src={delet}
//                   alt="Image 1"
//                   style={{
//                     marginRight: "20px",
//                     height: "18px",
//                     width: "18px",
//                     borderRadius: "60px",
//                   }}
//                 />
//                 <span
//                   style={{
//                     color: "red",
//                     paddingTop: "0px",
//                     fontFamily: "Open Sans",
//                     fontWeight: "550",
//                   }}
//                 >
//                   Delete Account
//                 </span>
//               </div>
//               <div className="p-4" style={{ display: "flex" }}>
//                 <img
//                   src={logout}
//                   alt="Image 1"
//                   style={{
//                     marginRight: "20px",
//                     height: "18px",
//                     width: "18px",
//                     borderRadius: "60px",
//                   }}
//                 />
//                 <span
//                   style={{
//                     color: "red",
//                     paddingTop: "0px",
//                     fontFamily: "Open Sans",
//                     fontWeight: "550",
//                   }}
//                 >
//                   Log Out
//                 </span>
//               </div>
//             </DrawerBody>
//           </DrawerContent>
//         </DrawerOverlay>
//       </Drawer>
//     </div>
//   );
// };

// export default Settings;
