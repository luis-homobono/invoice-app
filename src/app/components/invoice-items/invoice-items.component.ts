import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'invoice-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './invoice-items.component.html',
})
export class InvoiceItemsComponent {
  @Input() items!: Item[];
}
