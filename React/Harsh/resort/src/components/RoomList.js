import React from "react";
import Rooms from "./Rooms";

export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h5>unfortunately no rooms matched your search parameter</h5>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room) => (
          <Rooms key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}
