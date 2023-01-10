import { Component, OnInit } from '@angular/core';
import { Sushi } from '../sushi';
import { SushiService } from '../sushi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sushi: Sushi[] = [];

  constructor(private sushiService: SushiService) { }

  ngOnInit(): void {
    this.getSushi();
  }
  
  getSushi(): void{
    this.sushiService.getSushi().subscribe(sushi => this.sushi = sushi);
  }

}
