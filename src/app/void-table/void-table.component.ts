import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-void-table',
  templateUrl: './void-table.component.html',
  styleUrls: ['./void-table.component.scss'],
})
export class VoidTableComponent implements OnChanges {
  @Input() tableData: any[] = [];
  // columnKey: string[] =[]
  @Input() columnArray: any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Input() showActionButton: boolean = false;

  filteredData: any[] = [];
  searchBox: string = '';
  constructor() {
    // this.columnKey= Object.keys(this.tableData[0  ])
  }

  //search

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredData = this.tableData;
  }
  editRecord(item: any) {
    this.onEdit.emit(item);
  }
  deleteRecord(item: any) {
    this.onDelete.emit(item);
  }

  //ham search
  onSearchChange(searchVal: string) {
    this.filteredData = this.tableData.filter((searchData: any) => {
      const value = Object.values(searchData);
      let flag = false;
      value.forEach((val: any) => {
        if (val.toString().toLowerCase().indexOf(searchVal) > -1) {
          flag = true;
          return;
        }
      });
      if (flag) {
        return searchData;
      }
    });
  }
}
