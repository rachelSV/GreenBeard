import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauteSectionComponent } from './nouveaute-section.component';

describe('NouveauteSectionComponent', () => {
  let component: NouveauteSectionComponent;
  let fixture: ComponentFixture<NouveauteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveauteSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
