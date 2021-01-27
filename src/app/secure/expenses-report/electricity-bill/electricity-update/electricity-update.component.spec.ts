import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityUpdateComponent } from './electricity-update.component';

describe('ElectricityUpdateComponent', () => {
  let component: ElectricityUpdateComponent;
  let fixture: ComponentFixture<ElectricityUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
