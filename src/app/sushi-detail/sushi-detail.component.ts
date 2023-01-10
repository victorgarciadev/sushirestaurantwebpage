import { Component, OnInit } from '@angular/core';
import { Sushi } from '../sushi';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SushiService } from '../sushi.service';

@Component({
  selector: 'app-sushi-detail',
  templateUrl: './sushi-detail.component.html',
  styleUrls: ['./sushi-detail.component.css']
})
export class SushiDetailComponent implements OnInit {
sushi: Sushi | undefined;

  constructor(
    private route: ActivatedRoute,
    private sushiService: SushiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSushi();
  }

  getSushi(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sushiService.getSushis(id).subscribe(sushi => this.sushi = sushi);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.sushi) {
      this.sushiService.updateSushi(this.sushi)
        .subscribe(() => this.goBack());
    }
  }

}
