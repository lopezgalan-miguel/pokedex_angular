import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokescreenComponent } from './pokescreen.component';

describe('PokescreenComponent', () => {
  let component: PokescreenComponent;
  let fixture: ComponentFixture<PokescreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokescreenComponent]
    });
    fixture = TestBed.createComponent(PokescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
