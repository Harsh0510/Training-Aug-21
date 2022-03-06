import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
import Rooms from "./Rooms";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    // <RoomContext.Consumer>
    //   {(value) => console.log(value)}
    // </RoomContext.Consumer>

    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => <Rooms key={room.id} room={room} />);
    return (
      <div className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </div>
    );
  }
}
