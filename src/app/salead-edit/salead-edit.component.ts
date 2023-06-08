import { Component, OnInit } from '@angular/core';

import { SaleAd } from '../models/salead';
import { DataService } from '../services/data.service';
import { CONFIG } from '../config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-salead-edit',
  templateUrl: './salead-edit.component.html',
  styleUrls: ['./salead-edit.component.css']
})
export class SaleadEditComponent implements OnInit {

  salead!: SaleAd;
  img_path = CONFIG.img_path;

  constructor(private dataService: DataService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getSaleAd(id).subscribe({
      next: (res) => {
        if (this.isOwner()) {
          this.salead = res;
        }
        else {
          this.router.navigate(['list']);
        }
      },
      error: (err) => {
        this.router.navigate(['list']);
      }
    });
  }

  isOwner() {
    return this.dataService.isOwner(this.salead.author);
  }

}
