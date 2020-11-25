import { Component, OnInit } from '@angular/core';
import {BusService} from '../../services/bus.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-businfo',
  templateUrl: './delete-businfo.component.html',
  styleUrls: ['./delete-businfo.component.sass']
})
export class DeleteBusinfoComponent implements OnInit {
 public busInfo;
 constructor(private busService:BusService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.deleteBusId(this.route.snapshot.params.id);
  }

  deleteBusId(id:number) {
      this.busService.deleteBus(id).subscribe(
            data=> {
              this.busInfo=data;
            },
            err => console.error(err),
            () => console.log('Bus info deleted')
          );
    }

}
