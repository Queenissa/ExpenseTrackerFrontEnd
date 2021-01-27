import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingUpdateComponent } from './clothing-update.component';

describe('ClothingUpdateComponent', () => {
  let component: ClothingUpdateComponent;
  let fixture: ComponentFixture<ClothingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
