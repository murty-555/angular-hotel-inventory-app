import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Room, RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {
  @Input() roomsList: RoomsList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomsList>();
  selectRoom(room: RoomsList){
    this.selectedRoom.emit(room)
  }
}
