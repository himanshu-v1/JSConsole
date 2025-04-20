import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ButtonServiceService } from '../services/button-service.service';
//import { DOCUMENT } from '@angular/common';
import { appConstants as constr } from '../../constants/app-constants';
import { RaiseService } from '../services/raise.service';
import { ErrorHandlerService } from '../services/error-handler.service';

@Component({
  selector: 'app-html-c',
  templateUrl: './html-c.component.html',
  styleUrls: ['./html-c.component.css','../jsc/jsc.component.css']
})
export class HtmlCComponent implements OnInit {

  consta:any = null;
  outputTxt:string = null;
  inputTxt:string = null;
  @ViewChild("runEl", {static: true, read: ElementRef}) runEl: ElementRef;
  raiseService = null;
  placeholder = "HTML editor!!!" + "\n\n" +
                "Note:" + "\n" +
                "- Use Try/Catch to improve the changes of getting errors." + "\n" +
                "- use alerts as console.log() will not work";
  errorHandle = null;

  constructor(private buttonService: ButtonServiceService, private raiseServiceObj: RaiseService) {
    this.consta = constr;
    this.raiseService = raiseServiceObj;
  }

  ngOnInit() {
    this.buttonService.adjustButton(this.runEl.nativeElement);
    this.raiseService.addDefaultText.subscribe((data) => {
      //console.log(data);
      if(data.id === "html"){
        this.inputTxt = data.text;
      }
      if(data.text === ""){
        this.outputTxt = "";
        $('#output').html("");
      }
    });
  }

  run(){
    this.outputTxt = this.inputTxt;
    $("#output").html(this.outputTxt);
  }

}
