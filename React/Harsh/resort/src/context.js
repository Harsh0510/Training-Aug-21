import React, { Component, createContext } from "react";
import items from "./data.js";

// contentful
import createClient from "./contentful";
const RoomContext = createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  // get data
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  // get data

  // getData = async () => {
  //   try {
  //     let response = await createClient.getEntries({
  //       content_type: process.env.REACT_APP_API_CONTENT_TYPE,
  //       // order: "sys.createdAt",
  //       order: "fields.price",
  //       // order: "-fields.price", //reverse order
  //     });
  //     const rooms = this.formatData(response.items);
  //     const featuredRooms = rooms.filter((room) => room.featured === true);
  //     const maxPrice = Math.max(...rooms.map((item) => item.price));
  //     const maxSize = Math.max(...rooms.map((item) => item.size));
  //     this.setState({
  //       rooms,
  //       featuredRooms,
  //       sortedRooms: rooms,
  //       loading: false,
  //       price: maxPrice,
  //       maxPrice,
  //       maxSize,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount() {
    // using contentful
    // this.getData();

    // without contentful
    // local data

    const rooms = this.formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured === true);
    const maxPrice = Math.max(...rooms.map((item) => item.price));
    const maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }
  formatData(items) {
    const tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    // all the rooms
    let tempRooms = [...rooms];
    // transform value
    capacity = parseInt(capacity);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    // change state
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// higher order component
function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
export { RoomProvider, RoomContext, RoomConsumer, withRoomConsumer };
