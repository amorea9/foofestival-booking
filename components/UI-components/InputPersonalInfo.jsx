// import React from "react";
// import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

// import { useRef } from "react";

// // TICKETINFO - personal info form for each person's ticket
// // check which type is being requested and return based on this

// // OR
// //create AccordionItem * regTickets
// //create AccordionItem * vipTickets

// // NPM INSTALL ACCORDION?
// //DON'T USE THIS COMPONENT, OLD STUFF!
// //DON'T USE THIS COMPONENT, OLD STUFF!
// //DON'T USE THIS COMPONENT, OLD STUFF!
// //DON'T USE THIS COMPONENT, OLD STUFF!
// //DON'T USE THIS COMPONENT, OLD STUFF!
// //DON'T USE THIS COMPONENT, OLD STUFF!

// function InputPersonalInfo(props) {

//   function onChange(event) {
//     console.log(event.target.name, "was changed to: ", event.target.value);
//   }

//   return (
//     <Accordion allowZeroExpanded>
//       <AccordionItem>
//         <AccordionItemHeading>
//           <AccordionItemButton>
//             <h2>Person #</h2>
//             <h3>Regular ticket</h3>

//   const regAccordions = [];
//   const vipAccordions = [];
//   let regTotal = props.orderInfo.regTickets;
//   let vipTotal = props.orderInfo.vipTickets;

//   //regular tickets
//   for (let index = 0; index < regTotal; index++) {
//     regAccordions.push(
//       <AccordionItem key={index}>
//         <AccordionItemHeading>
//           <AccordionItemButton>
//             {/* insert name from firstName input */}
//             <h3 className="white">Person {index + 1}</h3>
//             <div className="dropdown">
//               <h3>Regular ticket</h3>
//               <h4 className="dropdown-arrow">‹</h4>
//             </div>
//           </AccordionItemButton>
//         </AccordionItemHeading>

//         <AccordionItemPanel>
//           <div className="accordion-field">
//             <label>
//               First name
//               <input type="text" name="firstName" placeholder="John" onBlur={onChange} />
//             </label>
//             <label>
//               Last name
//               <input type="text" name="lastName" placeholder="Applebaum" onBlur={onChange} />
//             </label>
//             <label>
//               Phone Number
//               <input type="text" name="telephone" placeholder="** ** ** **" onBlur={onChange} />
//             </label>
//             <label>
//               Date of Birth
//               <input type="date" name="birthDate" onBlur={onChange} />
//             </label>
//             {/* NPM INSTALL SOMETHING FOR PHONE AND BIRTH DATE? */}
//           </div>
//         </AccordionItemPanel>
//       </AccordionItem>
//     );
//   }

//   //vip tickets
//   for (let index = 0; index < vipTotal; index++) {
//     console.log("vipTotal: ", vipTotal);
//     console.log("index: ", index);
//     vipAccordions.push(
//       <AccordionItem key={index}>
//         <AccordionItemHeading>
//           <AccordionItemButton>
//             {/* insert name from firstName input */}
//             <h3 className="white">Person {index + 1}</h3>
//             <div className="dropdown">
//               <h3>Regular ticket</h3>
//               <h4 className="dropdown-arrow">‹</h4>
//             </div>

//           </AccordionItemButton>
//         </AccordionItemHeading>

//         <AccordionItemPanel>
//           <div className="accordion-field">
//             <label>
//               First name
//               <input type="text" name="firstName" placeholder="John" onBlur={onChange} />
//             </label>
//             <label>
//               Last name
//               <input type="text" name="lastName" placeholder="Applebaum" onBlur={onChange} />
//             </label>
//             <label>
//               Phone Number
//               <input type="text" name="telephone" placeholder="** ** ** **" onBlur={onChange} />
//             </label>
//             <label>
//               Date of Birth
//               <input type="date" name="birthDate" onBlur={onChange} />
//             </label>
//             {/* NPM INSTALL SOMETHING FOR PHONE AND BIRTH DATE? */}
//           </div>
//         </AccordionItemPanel>
//       </AccordionItem>
//     );
//   }

//   function onChange(event) {
//     console.log(event.target.name, "was changed to: ", event.target.value);
//   }

//   return (
//     <Accordion allowZeroExpanded>
//       {vipAccordions}
//       {regAccordions}
//     </Accordion>
//   );
// }

// export default InputPersonalInfo;
