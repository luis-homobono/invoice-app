import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;

  constructor() {}

  getInvoice(): Invoice {
    const total = this.computeTotal();
    return { ...this.invoice, total };
  }

  removeItem(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter((item) => item.id != id);
    const total = this.computeTotal();
    return { ...this.invoice, total };
  }

  computeTotal(): number {
    // let total = 0;
    // this.invoice.items.forEach((item) => {
    //   total += item.total();
    // });
    // return total;
    return this.invoice.items.reduce(
      (accum, item) => accum + item.price * item.quantity,
      0,
    );
  }
}
