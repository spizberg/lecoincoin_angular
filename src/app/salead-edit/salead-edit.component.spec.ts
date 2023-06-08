import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleadEditComponent } from './salead-edit.component';

describe('SaleadEditComponent', () => {
  let component: SaleadEditComponent;
  let fixture: ComponentFixture<SaleadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleadEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
