import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarcontPage } from './cambiarcont.page';

describe('CambiarcontPage', () => {
  let component: CambiarcontPage;
  let fixture: ComponentFixture<CambiarcontPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(CambiarcontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
