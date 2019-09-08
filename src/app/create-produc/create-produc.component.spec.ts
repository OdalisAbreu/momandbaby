import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProducComponent } from './create-produc.component';

describe('CreateProducComponent', () => {
  let component: CreateProducComponent;
  let fixture: ComponentFixture<CreateProducComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProducComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
