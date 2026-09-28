import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingComponent } from "../loading/loading.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [LoadingComponent,CommonModule],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  @Input() service: any;
  @Input() data: any;
  @Input() rowCount = 0;
  @Output() dataChange = new EventEmitter();

  loading = false;
  page = 1;
  pageCount = 1;
  recordCount = 0;
  query = '';

  
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    (this.service.getAll(this.query, this.page, this.rowCount) as Observable<any>).subscribe(res => {
      this.recordCount = res.recordCount;
      this.pageCount = Math.ceil(res.recordCount / this.rowCount);
      this.dataChange.emit(res.data);
      this.loading = false;
    });

    
  }

  goToPage(pageNo: number) {
    if (pageNo > 0 && pageNo <= this.pageCount) {
      this.page = pageNo;
      this.load();
    }
  }

  searchChange(event: Event) {
    this.page = 1;
    const value = (event.target as HTMLInputElement).value;
    this.query = value;
    this.load();
  }
}
