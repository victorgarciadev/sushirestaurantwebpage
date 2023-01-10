import { Component, OnInit } from '@angular/core';
import { Sushi } from '../sushi';
import { SushiService } from '../sushi.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-sushi',
  templateUrl: './sushi.component.html',
  styleUrls: ['./sushi.component.css']
})
export class SushiComponent implements OnInit {

  constructor(private sushiService: SushiService) { }

  ngOnInit(): void {
    this.getSushi();
  }

  sushi: Sushi[] = [];
  
  getSushi(): void {
    this.sushiService.getSushi().subscribe(sushi => this.sushi = sushi);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.sushiService.addSushi({ name } as Sushi)
      .subscribe(sushi => {
        this.sushi.push(sushi);
      });
  }

  delete(sushi: Sushi): void {
    this.sushi = this.sushi.filter(h => h !== sushi);
    this.sushiService.deleteSushi(sushi.id).subscribe();
  }
}
