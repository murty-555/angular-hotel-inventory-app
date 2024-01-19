import { Component } from '@angular/core';
import { Room, RoomsList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName: string = "Novotel";
  numberOfRooms: number = 10;
  hideRooms: boolean = false;
  selectedRoom = {};
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomsList: RoomsList[] = [
    {
      roomNumber: 101,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, TV, Refrigerator, Washroom, Free Wifi',
      price: 500,
      photos: 'image.jpg',
      checkInTime: new Date('09-Nov-2023'),
      checkOutTime: new Date('20-Nov-2023'),
      rating: 3.456
    },
    {
      roomNumber: 102,
      roomType: 'Ultre Deluxe Room',
      amenities: 'Air Conditioner, TV, Refrigerator, Washroom, Free Wifi',
      price: 1000,
      photos: 'image.jpg',
      checkInTime: new Date('09-Nov-2023'),
      checkOutTime: new Date('20-Nov-2023'),
      rating: 4.2
    },
    {
      roomNumber: 103,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, TV, Refrigerator, Washroom, Free Wifi',
      price: 15000,
      photos: 'image.jpg',
      checkInTime: new Date('09-Nov-2023'),
      checkOutTime: new Date('20-Nov-2023'),
      rating: 4.5
    },
  ]


  toggleRooms(){
    this.hideRooms = !this.hideRooms;
  }

  selectsRoom(room: RoomsList){
    console.log(room)
    this.selectedRoom = room
  }
  addRoom(){
    const room: RoomsList = {
      roomNumber: 104,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, TV, Refrigerator, Washroom, Free Wifi',
      price: 20000,
      photos: 'image.jpg',
      checkInTime: new Date('09-Nov-2023'),
      checkOutTime: new Date('20-Nov-2023'),
      rating: 4.2
    }
    // this.roomsList.push(room)
    this.roomsList = [...this.roomsList, room]
  }
}
