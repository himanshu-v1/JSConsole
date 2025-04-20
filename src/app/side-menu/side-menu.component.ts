import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { appConstants as constr } from '../../constants/app-constants';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Input()
  tag:any;

  constructor() { }

  ngOnInit() { }
  /*@Output()
  closeButtonClicked: EventEmitter<string> = new EventEmitter<string>();*/

  closeClick(e: Event) {
    //console.log(this.tag);
    constr.menuFlag = null;
    this.tag.ele.nativeElement.classList.remove("menu-open");
    this.tag.ele.nativeElement.classList.add("menu-close");
    //alert("Close:::"+consta.menuFlag+consta.title);
    e.stopPropagation();
  }

}
