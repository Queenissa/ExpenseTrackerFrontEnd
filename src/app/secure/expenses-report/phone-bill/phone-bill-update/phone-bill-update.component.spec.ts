import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBillUpdateComponent } from './phone-bill-update.component';

describe('PhoneBillUpdateComponent', () => {
  let component: PhoneBillUpdateComponent;
  let fixture: ComponentFixture<PhoneBillUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneBillUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBillUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
