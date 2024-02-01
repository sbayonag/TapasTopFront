import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrophiesComponent } from './user-trophies.component';

describe('UserTrophiesComponent', () => {
  let component: UserTrophiesComponent;
  let fixture: ComponentFixture<UserTrophiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTrophiesComponent]
    });
    fixture = TestBed.createComponent(UserTrophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
