import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { CONFIG } from '../config'
import { Router } from '@angular/router';

@Component({
  selector: 'app-salead-add',
  templateUrl: './salead-add.component.html',
  styleUrls: ['./salead-add.component.css']
})
export class SaleadAddComponent {

  saleadForm = this.formBuilder.group({
    title: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    illustrations: ['']
  });

  illustrations: File[] = [];

  constructor(private formBuilder: FormBuilder, private dataService: DataService,
              private router: Router) { }

  onSubmit() {
    let body_request = this.createFormData();
    this.dataService.addSaleAd(body_request).subscribe({
      next: (res) => {
        this.router.navigate([`/show/${res}`]);
      },
      error: (err) => console.log(err)
    });
  }

  createFormData(): FormData {
    let body = new FormData();
    body.append('title', this.saleadForm.value.title!);
    body.append('description', this.saleadForm.value.description!);
    body.append('price', this.saleadForm.value.price!)
    body.append('author', sessionStorage.getItem(CONFIG.id)!)
    for(let illustration of this.illustrations){
      body.append('illustrations_files', illustration, illustration.name);
    }
    return body;
  }

  onFilesChange(event: any) {
    if (event.target.files.length > 0) {
      this.illustrations = event.target.files;
    }
  }  

}
