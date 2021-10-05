import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVendehumosComponent } from './card-vendehumos.component';

describe('CardVendehumosComponent', () => {
  let component: CardVendehumosComponent;
  let fixture: ComponentFixture<CardVendehumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVendehumosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVendehumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
