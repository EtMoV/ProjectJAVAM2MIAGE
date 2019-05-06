import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BierresService } from '../services/bierres.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private allBierresSubscription: Subscription;
  allBierres = [];
  constructor(
    private bierresServices: BierresService,

  ) { }

  ngOnInit() {
    this.allBierresSubscription = this.bierresServices.bierreSubject.subscribe(
      (allBierres: any[]) => {
        this.allBierres = allBierres;
      }
    );
    this.bierresServices.getAllBierres();
  }

  ngOnDestroy() {
    this.allBierresSubscription.unsubscribe();
  }

}
