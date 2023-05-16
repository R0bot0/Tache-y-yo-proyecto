import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurarcontPage } from './restaurarcont.page';

describe('RestaurarcontPage', () => {
  let component: RestaurarcontPage;
  let fixture: ComponentFixture<RestaurarcontPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurarcontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
