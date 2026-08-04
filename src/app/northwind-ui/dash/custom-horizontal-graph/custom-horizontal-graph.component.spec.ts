import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHorizontalGraphComponent } from './custom-horizontal-graph.component';

describe('CustomHorizontalGraphComponent', () => {
  let component: CustomHorizontalGraphComponent;
  let fixture: ComponentFixture<CustomHorizontalGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomHorizontalGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHorizontalGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
