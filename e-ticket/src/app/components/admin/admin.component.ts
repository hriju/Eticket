import { Component, OnInit } from '@angular/core';
import{BusService} from '../../services/bus.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  public buses;
  constructor(private busService: BusService) { }

  ngOnInit(): void {
    this.getBuses();
  }

  getBuses() {
    this.busService.getBuses().subscribe(
    data => { this.buses = data},
    err => console.error(err),
    ()=>console.log('buses loaded')
    );
  }
}
