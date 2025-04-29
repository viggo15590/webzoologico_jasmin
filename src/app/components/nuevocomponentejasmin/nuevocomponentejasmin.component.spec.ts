import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevocomponentejasminComponent } from './nuevocomponentejasmin.component';

describe('NuevocomponentejasminComponent', () => {
  let component: NuevocomponentejasminComponent;
  let fixture: ComponentFixture<NuevocomponentejasminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevocomponentejasminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevocomponentejasminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
