import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrendingDestinataion } from './home-trending-destinataion';

describe('HomeTrendingDestinataion', () => {
  let component: HomeTrendingDestinataion;
  let fixture: ComponentFixture<HomeTrendingDestinataion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTrendingDestinataion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTrendingDestinataion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
