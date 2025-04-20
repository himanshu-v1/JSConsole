import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
//import { DOCUMENT } from '@angular/common';
import { appConstants as constr } from '../constants/app-constants';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  consta:any = null;
  title:string = null;
  //ele:any = null;
  @ViewChild("menu", {read: ElementRef}) ele: ElementRef;
  outputTxt:string = null;
  inputTxt:string = null;
  @ViewChild("opts", {read: ElementRef}) opt: ElementRef;

  constructor() {
    this.consta = constr;
    this.title = this.consta.title;
  }

  ngOnInit() {
    //this.ele = document.getElementById('menu');
  }

  onMenuClick(e: Event) {
    constr.menuFlag = "true";
    this.consta = constr;
    /*if(this.ele.className.indexOf('open') > -1 && this.consta.menuFlag){
      this.ele.classList.remove('menu-open').add('menu-close');
    }
    else{
      this.ele.classList.remove('menu-close').add('menu-open');
    }*/
    //alert("Open:::"+consta.menuFlag);
    this.ele.nativeElement.classList.remove('menu-close');
    this.ele.nativeElement.classList.add('menu-open');
    e.stopPropagation();
  };

  onOptionsClick(e: Event) {
    //var opt = document.getElementById('opts');
    var optli = $('li');
    if(this.opt.nativeElement.classList.contains('options-b4')){
      this.opt.nativeElement.classList.remove('options-b4');
      this.opt.nativeElement.classList.add('options');
      optli.each(function(index){
        this.style.fontSize="12px";
      });
    }
    else{
      this.opt.nativeElement.classList.remove('options');
      this.opt.nativeElement.classList.add('options-b4');
      optli.each(function(index){
        this.style.fontSize="0px";
      });
    }
  }

}
