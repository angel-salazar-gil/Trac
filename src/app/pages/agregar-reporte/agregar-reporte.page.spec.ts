import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarReportePage } from './agregar-reporte.page';

describe('AgregarReportePage', () => {
  let component: AgregarReportePage;
  let fixture: ComponentFixture<AgregarReportePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarReportePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarReportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
