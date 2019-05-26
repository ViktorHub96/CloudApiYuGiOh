import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuGiOhCardsComponent } from './yu-gi-oh-cards.component';

describe('YuGiOhCardsComponent', () => {
  let component: YuGiOhCardsComponent;
  let fixture: ComponentFixture<YuGiOhCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuGiOhCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuGiOhCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
