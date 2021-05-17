import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayPostComponent } from './play-post.component';

describe('PlayPostComponent', () => {
  let component: PlayPostComponent;
  let fixture: ComponentFixture<PlayPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
