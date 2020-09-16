import { Injectable } from '@angular/core';
import { PaymentDetail } from '../model/payment-detail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail;

  constructor(private http:HttpClient) { }


}
