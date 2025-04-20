import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { DOCUMENT } from '@angular/common';
import { appConstants as constr } from '../constants/app-constants';
import { RaiseService } from './services/raise.service';

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
  @ViewChild("menu", {static: true, read: ElementRef}) ele: ElementRef;
  outputTxt:string = null;
  inputTxt:string = null;
  @ViewChild("opts", {static: true, read: ElementRef}) opt: ElementRef;
  @ViewChild("optli", {static: true, read: ElementRef}) optli: ElementRef;
  raiseService = null;
  activeroute = null;
  optionMenuStatus = false;

  constructor(private raiseServiceObj: RaiseService, private activeRoute: Router) {
    this.consta = constr;
    this.title = this.consta.title;
    this.raiseService = raiseServiceObj;
    this.activeRoute = activeRoute;
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
  //onOptionsClick() {
    //var opt = document.getElementById('opts');
    //var optli = $('li');
    if(this.opt.nativeElement.classList.contains('options-b4')){
      this.opt.nativeElement.classList.remove('options-b4');
      this.opt.nativeElement.classList.add('options');
      /*optli.each(function(index){
        this.style.fontSize="12px";
      });*/
      //this.optli.nativeElement.style.fontSize = "12px";
      for(let i of this.opt.nativeElement.children){
        i.style.fontSize="15px";
      }
      this.optionMenuStatus = true;
    }
    else{
      this.opt.nativeElement.classList.remove('options');
      this.opt.nativeElement.classList.add('options-b4');
      /*optli.each(function(index){
        this.style.fontSize="0px";
      });*/
      //this.optli.nativeElement.style.fontSize = "0px";
      this.optionMenuStatus = false;
    }
    e.stopPropagation();
  }

  loadDefaultText() {
      //console.log(this.activeRoute.snapshot._routerState.url.split("/")[1]);
      //const active:string = this.activeRoute.snapshot._routerState.url.split("/")[1];
      const active:string = this.activeRoute.url.split("/")[1];
      //console.log(active);
      const textToSend = (active == "html") ? this.raiseService.defaultHTMLText : this.raiseService.defaultJSText;
      this.raiseService.addDefaultText.next({text: textToSend, id: active});
      this.onOptionsClick(new Event(""));
  }

  save() {
    alert("Coming Soon!");
    this.onOptionsClick(new Event(""));
  }

  clear(){
    //console.log(this.activeRoute.snapshot._routerState.url.split("/")[1]);
    const active:string = this.activeRoute.url.split("/")[1];
    //console.log(this.raiseService.defaultHTMLText);
    this.raiseService.addDefaultText.next({text: "", id: active});
    this.onOptionsClick(new Event(""));
  }

  closeAll(e: Event) {
    if(this.optionMenuStatus)
      this.onOptionsClick(e);
  }

}
