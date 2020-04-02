import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerReportePage } from './ver-reporte.page';

describe('VerReportePage', () => {
  let component: VerReportePage;
  let fixture: ComponentFixture<VerReportePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerReportePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerReportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
