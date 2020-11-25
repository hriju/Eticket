import { Component, OnInit } from '@angular/core';
import{BusService} from '../../services/bus.service';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  models:string[] = [
  "ENA",
  "SHAYMOLI",
  "UNIQUE"
  ];
  busform:FormGroup;
  validMessage:string="";

  constructor(private busService:BusService) { }

  ngOnInit(): void {
  this.busform = new FormGroup({
    busname: new FormControl('', Validators.required),
    fromlocation: new FormControl('', Validators.required),
    tolocation: new FormControl('', Validators.required),
    busnumber: new FormControl('', Validators.required),
    totalseat: new FormControl('', Validators.required),
    departureTime: new FormControl('', Validators.required),
    arrivalTime: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });
  }

  submitRegistration(){

    if(this.busform.valid){
      this.validMessage = "Bus ticket has been inserted successfully.";
      this.busService.createBusRegistration(this.busform.value).subscribe(
        data => {
          this.busform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage="Please complete all fields before submitting.";
    }
  }

}
