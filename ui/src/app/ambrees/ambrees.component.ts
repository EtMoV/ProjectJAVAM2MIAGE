import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BierresService } from '../services/bierres.service';

@Component({
  selector: 'app-ambrees',
  templateUrl: './ambrees.component.html',
  styleUrls: ['./ambrees.component.css']
})
export class AmbreesComponent implements OnInit {

  private ambreesSubscription: Subscription;
  ambrees = [];
  constructor(private bierresServices: BierresService) { }

  ngOnInit() {
    this.ambreesSubscription = this.bierresServices.ambreeSubject.subscribe(
      (ambrees: any[]) => {
        this.ambrees = ambrees;
      }
    );
    this.bierresServices.getAmbrees();
  }

  ngOnDestroy() {
    this.ambreesSubscription.unsubscribe();
  }
}
