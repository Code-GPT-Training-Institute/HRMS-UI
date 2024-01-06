import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNavBarComponent } from './auth-nav-bar.component';

describe('AuthNavBarComponent', () => {
  let component: AuthNavBarComponent;
  let fixture: ComponentFixture<AuthNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthNavBarComponent]
    });
    fixture = TestBed.createComponent(AuthNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
