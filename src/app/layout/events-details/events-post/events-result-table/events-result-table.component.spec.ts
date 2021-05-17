import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsResultTableComponent } from './events-result-table.component';

describe('EventsResultTabkeComponent', () => {
  let component: EventsResultTableComponent;
  let fixture: ComponentFixture<EventsResultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsResultTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
