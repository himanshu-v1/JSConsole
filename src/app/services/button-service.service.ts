import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonServiceService {

  constructor() { }

  adjustButton(elemen: any){
    //var elemen = document.getElementById('run');
    let cw = window.innerWidth;
    let ch = window.innerHeight;
    elemen.style.marginLeft = (cw-elemen.clientWidth)/2 + "px";
  }
}
