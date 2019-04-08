import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToolBarComponent } from './menu-tool-bar.component';

describe('MenuToolBarComponent', () => {
  let component: MenuToolBarComponent;
  let fixture: ComponentFixture<MenuToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
