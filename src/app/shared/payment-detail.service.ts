import { Injectable } from '@angular/core';
import { PaymentDetail } from '../model/payment-detail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:64049/api';

  constructor(private http: HttpClient) {}

  postPaymentDetail(formData: PaymentDetail) {
    this.http.post(this.rootURL + 'PaymentDetail', formData);
  }
}
