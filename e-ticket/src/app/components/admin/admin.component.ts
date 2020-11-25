import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{BusService} from '../../services/bus.service';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  public buses;
  dtOptions: DataTables.Settings = {};
  posts;
  constructor(private busService: BusService) { }

  ngOnInit(): void {
    this.getBuses();
    this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true
        };

        /* this.http.get('http://jsonplaceholder.typicode.com/posts')
          .subscribe(posts => {
            this.posts = posts;
        }); */
  }

  getBuses() {
    this.busService.getBuses().subscribe(
    data => { this.buses = data},
    err => console.error(err),
    ()=>console.log('buses loaded')
    );
  }
}
