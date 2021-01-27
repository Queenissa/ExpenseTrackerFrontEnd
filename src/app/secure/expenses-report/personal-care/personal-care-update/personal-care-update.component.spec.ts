import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCareUpdateComponent } from './personal-care-update.component';

describe('PersonalCareUpdateComponent', () => {
  let component: PersonalCareUpdateComponent;
  let fixture: ComponentFixture<PersonalCareUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCareUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCareUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
