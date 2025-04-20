import { Component, OnInit, Inject, ViewChild, ElementRef, Renderer2 } from '@angular/core';
//import { DOCUMENT } from '@angular/common';
import { createCustomElement } from '@angular/elements'
import { ButtonServiceService } from '../services/button-service.service';
import { appConstants as constr } from '../../constants/app-constants';
import { RaiseService } from '../services/raise.service'

@Component({
  selector: 'app-jsc',
  templateUrl: './jsc.component.html',
  styleUrls: ['./jsc.component.css']
})
export class JSCComponent implements OnInit {

  consta:any = null;
  inputTxt:string = null;
  outputTxt:string = null;
  @ViewChild("runEl", {static: true, read: ElementRef}) runEl: ElementRef;
  raiseService = null;

  constructor(private buttonService: ButtonServiceService, private renderer: Renderer2, private raiseServiceObj: RaiseService) {
    this.consta = constr;
    this.raiseService = raiseServiceObj;
  }

  ngOnInit() {
    this.buttonService.adjustButton(this.runEl.nativeElement);
    this.raiseService.addDefaultText.subscribe((data) => {
      if(data.id === "JSC"){
        this.inputTxt = data.text;
      }
      if(data.text === ""){
        this.outputTxt = "";
        $('#output').html("");
      }
    })
  }

  run() {
    var res = null, err = null, errHead = null, errStack = null;
    this.outputTxt = this.inputTxt;
    /*var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = this.outputTxt;
    $('#output').html(script);*/
    try{
      res = eval(this.outputTxt);
    }
    catch(e){
      err = this.renderer.createElement('div');//document.createElement('div');
      err.style.height = "-webkit-fill-available";
      err.style.textShadow = "grey 5px 5px 4px";
      err.style.fontWeight = "bolder";

      errHead = this.renderer.createElement('p'); //document.createElement('p');
      errHead.style.fontSize = "20px";
      errHead.style.color = "red";
      errHead.innerHTML = e.message;
      err.append(errHead);

      /*errStack = this.renderer.createElement('span'); //document.createElement('span');
      errStack.style.fontSize = "10px";
      errStack.style.color = "red";
      errStack.style.display = "inline-table";
      errStack.innerHTML = e.stack;
      err.append(errStack); */

      res = err.outerHTML;
    }
    if(res!=undefined)
      $('#output').html(res);
    else $('#output').html("success..");
  }

}
