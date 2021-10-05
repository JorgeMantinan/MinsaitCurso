import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVendehumosComponent } from './listado-vendehumos.component';

describe('ListadoVendehumosComponent', () => {
  let component: ListadoVendehumosComponent;
  let fixture: ComponentFixture<ListadoVendehumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoVendehumosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVendehumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
