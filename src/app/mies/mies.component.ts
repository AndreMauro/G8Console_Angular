import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-mies',
  templateUrl: './mies.component.html',
  styleUrls: ['./mies.component.css']
})
export class MiesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {  }

  getLogs() {
    console.log("HELLOW");
  }

}
