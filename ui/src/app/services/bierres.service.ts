import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BierresService {

  private baseUrl = "http://localhost:9090";

  bierreSubject = new Subject<any[]>();
  blondeSubject = new Subject<any[]>();
  bruneSubject = new Subject<any[]>();
  ambreeSubject = new Subject<any[]>();

  allbierres = [];
  blondes = [];
  brunes = [];
  ambrees = [];

  constructor(private http: HttpClient) { }

  emitAllBierresSubject() {
    this.bierreSubject.next(this.allbierres);
  }
  emitBlondesSubject() {
    this.blondeSubject.next(this.blondes);
  }
  emitBrunesSubject() {
    this.bruneSubject.next(this.brunes);
  }
  emitAmbreesSubject() {
    this.ambreeSubject.next(this.ambrees);
  }

  getAllBierres() {
    return this.http.get(this.baseUrl + "/Bierres").subscribe((response: any[]) => {
      this.allbierres = response;
      this.emitAllBierresSubject();
    });

  }

  getBlondes() {
    return this.http.get(this.baseUrl + "/Bierres/blonde").subscribe((response: any[]) => {
      this.blondes = response;
      this.emitBlondesSubject();
    });
  }

  getBrunes() {
    return this.http.get(this.baseUrl + "/Bierres/brune").subscribe((response: any[]) => {
      this.brunes = response;
      this.emitBrunesSubject();
    });
  }

  getAmbrees() {
    return this.http.get(this.baseUrl + "/Bierres/ambree").subscribe((response: any[]) => {
      this.ambrees = response;
      this.emitAmbreesSubject();
    });
  }
}
