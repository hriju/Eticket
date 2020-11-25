import { Component, OnInit } from '@angular/core';
import {BusService} from '../../services/bus.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-businfo',
  templateUrl: './view-businfo.component.html',
  styleUrls: ['./view-businfo.component.sass']
})
export class ViewBusinfoComponent implements OnInit {
  public busInfo;
  constructor(private busService:BusService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBusInfo(this.route.snapshot.params.id);
  }
  getBusInfo(id:number){
    this.busService.getBus(id).subscribe(
      data=> {
        this.busInfo=data;
      },
      err => console.error(err),
      () => console.log('Bus info loaded')
    );
  }
}
