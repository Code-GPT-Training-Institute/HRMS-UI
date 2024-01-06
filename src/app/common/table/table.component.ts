import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ManageUserTableHeader } from 'src/app/home/manage-user/manage-user.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
   @Input() 
   myHeader: ManageUserTableHeader[];
   @Input() 
   data: any[];   
   @Output() onRowClickEvent: EventEmitter<any> = new EventEmitter<any>();
   @Output() onDeleteRowClickEvent: EventEmitter<any> = new EventEmitter<any>();
   rowClick(event){
    this.onRowClickEvent.emit(event);
   }
   rowDelete(event){
    this.onDeleteRowClickEvent.emit(event);
   }
}
