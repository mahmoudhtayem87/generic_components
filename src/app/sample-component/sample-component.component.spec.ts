import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponentComponent } from './sample-component.component';

describe('SampleComponentComponent', () => {
  let component: SampleComponentComponent;
  let fixture: ComponentFixture<SampleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
