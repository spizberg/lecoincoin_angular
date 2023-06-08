import { Component, OnInit } from '@angular/core';

import { SaleAd } from '../models/salead';
import { DataService } from '../services/data.service';
import { CONFIG } from '../config';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-salead-list',
  templateUrl: './salead-list.component.html',
  styleUrls: ['./salead-list.component.css']
})
export class SaleadListComponent implements OnInit {

  list_saleads?: SaleAd[];
  used_saleads?: SaleAd[];
  displayed_saleads?: SaleAd[];
  use_specific_saleads = false;
  saleads_per_page = 6;
  show_direction_links = true;
  show_boundary_links = false;

  img_path = CONFIG.img_path;

  id = sessionStorage.getItem(CONFIG.id);

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    
    this.dataService.getSaleAds().subscribe({
      next: (res) => {
        this.list_saleads = res;
        this.used_saleads = res;
        this.displayed_saleads = res.slice(0, this.saleads_per_page);
      },
    })
  }

  getDisplayToImage(illustrations: string[]) {
    // Return path of first illustration ofr given SaleAds
    return (illustrations.length) ? this.img_path + illustrations[0] : '../../assets/images/no_image.svg';
  }

  getUserSaleads() {
    // Get list of SaleAds for an user
    this.use_specific_saleads = true;
    this.used_saleads = this.list_saleads?.filter(salead => salead.author.toString() == this.id);
    this.displayed_saleads = this.used_saleads?.slice(0, this.saleads_per_page);
  }

  getSaleads() {
    // Get SaleAds for all users 
    this.use_specific_saleads = false;
    this.used_saleads = this.list_saleads;
    this.displayed_saleads = this.used_saleads?.slice(0, this.saleads_per_page);
  }

  pageChanged(event: PageChangedEvent) {
    // Update SaleAds list according pagination
    let startItem = (event.page - 1) * event.itemsPerPage;
    let endItem = event.page * event.itemsPerPage;
    this.displayed_saleads = this.used_saleads?.slice(startItem, endItem);
  }

  getSaleAdsTotal() {
    // Get number of SaleAds for pagination
    return (this.used_saleads) ? this.used_saleads.length : 0;
  }

}
