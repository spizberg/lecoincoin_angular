import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleadListComponent } from './salead-list.component';

describe('SaleadListComponent', () => {
  let component: SaleadListComponent;
  let fixture: ComponentFixture<SaleadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
