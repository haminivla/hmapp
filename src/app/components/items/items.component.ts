import { Component, Input } from '@angular/core';
import { Item } from '../../item.model';
import { Items } from '../../items.model';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {

  @Input() items: Items;

}
