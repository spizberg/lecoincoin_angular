import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleadDetailComponent } from './salead-detail.component';

describe('SaleadDetailComponent', () => {
  let component: SaleadDetailComponent;
  let fixture: ComponentFixture<SaleadDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleadDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
