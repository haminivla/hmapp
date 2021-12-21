// import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Item } from '../../item.model';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
// export class ItemComponent implements OnInit {
export class ItemComponent {
  
  @Input() item: Item;
  

//  constructor() { }

//  ngOnInit() {}

}