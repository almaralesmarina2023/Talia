import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHeroeComponent } from './listado-heroe.component';

describe('ListadoHeroeComponent', () => {
  let component: ListadoHeroeComponent;
  let fixture: ComponentFixture<ListadoHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoHeroeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
