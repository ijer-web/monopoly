import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapSize = 7;

  constructor () {
  }

  ngOnInit () {
  }

  get getMapSizeHorizontal () {
    return new Array(this.mapSize + 4);
  }

  get getMapSizeVertical () {
    return new Array(this.mapSize - 4);
  }

}
