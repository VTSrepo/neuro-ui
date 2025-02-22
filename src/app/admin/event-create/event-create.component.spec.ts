import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCreateComponent } from './event-create.component';

describe('ProfileCreateComponent', () => {
  let component: ProfileCreateComponent;
  let fixture: ComponentFixture<ProfileCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCreateComponent]
    });
    fixture = TestBed.createComponent(ProfileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
