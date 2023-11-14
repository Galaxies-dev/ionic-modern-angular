import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDeferPage } from './home-defer.page';

describe('HomeDeferPage', () => {
  let component: HomeDeferPage;
  let fixture: ComponentFixture<HomeDeferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeDeferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
