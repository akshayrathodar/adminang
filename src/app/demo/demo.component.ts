import { Component, OnInit } from '@angular/core';



declare const $: any;
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { 
    console.log($);
  }

  ngOnInit(): void {
  }



}
