import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from 'src/app/Rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'Sobicak';

  numberOfRooms: number = 20;

  hideRooms: boolean = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 201,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 300,
      photos:
        'https://cloudstorage.mosaic-collection.com/property/loeipalace/hotel-photos/accommodation/deluxe/deluxe_king-1.jpg',
      checkInTime: new Date('11-Oct-2022'),
      checkOutTime: new Date('13-Oct-2022'),
    },
    {
      roomNumber: 202,
      roomType: 'Twin Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 400,
      photos:
        'https://www.collinsdictionary.com/images/full/twinroom_310855142_1000.jpg?version=4.0.279',
      checkInTime: new Date('12-Oct-2022'),
      checkOutTime: new Date('16-Oct-2022'),
    },
    {
      roomNumber: 701,
      roomType: 'Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 450,
      photos:
        'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
      checkInTime: new Date(),
      checkOutTime: new Date('16-Oct-2022'),
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
