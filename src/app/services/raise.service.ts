import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaiseService {

  defaultHTMLText: string = "<!DOCTYPE html>"+"\n"+
                            "<html>"+"\n"+
                            "<body>"+"\n"+
                            "<p>Click the button to display an alert box.</p>"+"\n"+
                            "<button onclick=\"myFunction()\">Try it</button>"+"\n"+
                            "<script>function myFunction() {"+"\n"+
                            "   alert(\"Hello! I am an alert box!\");"+"\n"+
                            "}"+"\n"+
                            "</script>"+"\n"+
                            "</body>"+"\n"+
                            "</html>";

  defaultJSText: string = "1+1";

  addDefaultText = new Subject<{text: string, id: string}>();

  constructor() { }
}
