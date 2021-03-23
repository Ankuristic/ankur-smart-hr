// // import Chat_line from "./chat_line";
// // // import Chat_content from "./chat_content";
// // import React, { useState, useEffect } from "react";
// // // import Chat_content from "./chat_content";
// // import ChatDataService from "../../../services/data_services/chat.data_service";

// // const Chats = () => {
// //   const [chatData, setChatData] = useState([]);

// //   useEffect(() => {
// //     let db = ChatDataService.getAll();
// //     db.on("value", (snapshot) => {
// //       const arr = [];
// //       snapshot.forEach(function (childSnapshot) {
// //         let childData = childSnapshot.val();
// //         childData.Id = childSnapshot.key;
// //         arr.push(childData);
// //       });
// //       setChatData(arr);
// //     });
// //   }, []);

// //   return (
// //     <div className="chats">
// //       {chatData.map((item) => (
// //         <chat_content data={item} isLeft={false} />
// //       ))}
// //       {/* <Chat_content></Chat_content> */}
// //       <Chat_line date="8th october" />
// //     </div>
// //   );
// // };

// export default Chats;
