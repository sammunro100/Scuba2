import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  locoName = new BehaviorSubject<string>(null);

  constructor() { }

  get getLocoName(){
    return this.locoName;
  }

  setLocoName(name){
    this.locoName.next(name);
  }
}
