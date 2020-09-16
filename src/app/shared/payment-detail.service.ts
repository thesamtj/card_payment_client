import { Injectable } from '@angular/core';
import { PaymentDetail } from '../model/payment-detail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:64049/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) {}

  postPaymentDetail() {
    return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
  }

  putPaymentDetail() {
    return this.http.put(this.rootURL + '/PaymentDetail/'+this.formData.PMId, this.formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
