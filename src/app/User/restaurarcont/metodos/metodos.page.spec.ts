import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetodosPage } from './metodos.page';

describe('MetodosPage', () => {
  let component: MetodosPage;
  let fixture: ComponentFixture<MetodosPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MetodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
