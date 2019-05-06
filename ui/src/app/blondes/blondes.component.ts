import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BierresService } from '../services/bierres.service';

@Component({
  selector: 'app-blondes',
  templateUrl: './blondes.component.html',
  styleUrls: ['./blondes.component.css']
})
export class BlondesComponent implements OnInit {

  private blondesSubscription: Subscription;
  blondes = [];
  constructor(private bierresServices: BierresService) { }

  ngOnInit() {
    this.blondesSubscription = this.bierresServices.blondeSubject.subscribe(
      (blondes: any[]) => {
        this.blondes = blondes;
      }
    );
    this.bierresServices.getBlondes();
  }

  ngOnDestroy() {
    this.blondesSubscription.unsubscribe();
  }

}
