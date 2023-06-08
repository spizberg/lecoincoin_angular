import { Component, OnInit } from '@angular/core';

import { SaleAd } from '../models/salead';
import { DataService } from '../services/data.service';
import { CONFIG } from '../config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-salead-detail',
  templateUrl: './salead-detail.component.html',
  styleUrls: ['./salead-detail.component.css']
})
export class SaleadDetailComponent implements OnInit {

  salead!: SaleAd;
  img_path = CONFIG.img_path;

  constructor(private dataService: DataService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getSaleAd(id).subscribe({
      next: (res) => {
        this.salead = res;
      },
      error: (err) => {
        this.router.navigate(['list']);
      }
    });
  }

  isOwner() {
    return this.dataService.isOwner(this.salead.author);
  }

  deleteSaleAd() {
    this.dataService.deleteSaleAd(this.salead.id).subscribe({
      next: (res) => this.router.navigate(['list']),
      error: (err) => window.alert('Erreur lors de la suppression')
    });
  }

}
