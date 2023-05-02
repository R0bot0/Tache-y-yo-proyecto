import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevacontPage } from './nuevacont.page';

describe('NuevacontPage', () => {
  let component: NuevacontPage;
  let fixture: ComponentFixture<NuevacontPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(NuevacontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
