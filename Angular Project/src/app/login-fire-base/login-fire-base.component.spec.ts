import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFireBaseComponent } from './login-fire-base.component';

describe('LoginFireBaseComponent', () => {
  let component: LoginFireBaseComponent;
  let fixture: ComponentFixture<LoginFireBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFireBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFireBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
