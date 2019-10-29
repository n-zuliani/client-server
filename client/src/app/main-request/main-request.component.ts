import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-request',
  templateUrl: './main-request.component.html',
  styleUrls: ['./main-request.component.css']
})
export class MainRequestComponent implements OnInit {

  data: Object;
  loading: boolean;
  o: Observable<Object>;

  constructor(public http: HttpClient) {}

  ngOnInit() {
  }

  onRequest(): void{
    this.loading = true;
    this.o = this.http.get('https://3000-f5ccc730-59c7-4ff3-bc36-84cad2227df3.ws-eu0.gitpod.io/api/products');
    this.o.subscribe(this.getData);
  }

  getData = (d : Object) =>
  {
     this.data = d;
     this.loading = false;
  }

}
