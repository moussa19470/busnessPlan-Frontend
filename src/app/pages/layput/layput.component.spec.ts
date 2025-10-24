import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayputComponent } from './layput.component';

describe('LayputComponent', () => {
  let component: LayputComponent;
  let fixture: ComponentFixture<LayputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
