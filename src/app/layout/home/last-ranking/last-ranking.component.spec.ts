import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRankingComponent } from './last-ranking.component';

describe('LastRankingComponent', () => {
  let component: LastRankingComponent;
  let fixture: ComponentFixture<LastRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
