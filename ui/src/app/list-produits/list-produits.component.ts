import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  @Input()
  bierres: any[];

  constructor() {}

  ngOnInit() {}


}
