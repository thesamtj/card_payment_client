import { Injectable } from '@angular/core';
import { PaymentDetail } from '../model/payment-detail';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail;

  constructor() { }
}
