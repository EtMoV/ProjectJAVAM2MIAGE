import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BierresService } from '../services/bierres.service';

@Component({
  selector: 'app-brunes',
  templateUrl: './brunes.component.html',
  styleUrls: ['./brunes.component.css']
})
export class BrunesComponent implements OnInit {

  private brunesSubscription: Subscription;
  brunes = [];
  constructor(private bierresServices: BierresService) { }

  ngOnInit() {
    this.brunesSubscription = this.bierresServices.bruneSubject.subscribe(
      (brunes: any[]) => {
        this.brunes = brunes;
      }
    );
    this.bierresServices.getBrunes();
  }

  ngOnDestroy() {
    this.brunesSubscription.unsubscribe();
  }

}
