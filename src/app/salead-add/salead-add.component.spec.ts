import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleadAddComponent } from './salead-add.component';

describe('SaleadAddComponent', () => {
  let component: SaleadAddComponent;
  let fixture: ComponentFixture<SaleadAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleadAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
