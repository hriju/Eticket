import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

const httpOptions= {
    headers : new HttpHeaders({'content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http:HttpClient) {}
  getBuses(){
      return this.http.get('server/api/v1/bustickets');
    }
   getBus(id:number){
      return this.http.get('server/api/v1/bustickets/' +id);
   }

   deleteBus(id:number){
      return this.http.delete('server/api/v1/bustickets/' +id);
   }
   createBusRegistration(bus){
      let body = JSON.stringify(bus);
      return this.http.post('server/api/v1/bustickets/', body, httpOptions);
   }

}
