import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import { RoomConsumer, withRoomConsumer } from "../context";
import Loading from "./Loading";

// 2 way
const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  console.log(context);
  if (loading) {
    <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};
export default withRoomConsumer(RoomContainer);
// 1 way
// export default function RoomContainer() {
//   return (
//     <>
//       <RoomConsumer>
//         {(value) => {
//           const { loading, sortedRooms, rooms } = value;
//           if (loading) {
//             <Loading />;
//           }
//           return (
//             <div>
//               Hello from Room Container
//               <RoomFilter />
//               <RoomList />
//             </div>
//           );
//         }}
//       </RoomConsumer>
//     </>
//   );
// }
