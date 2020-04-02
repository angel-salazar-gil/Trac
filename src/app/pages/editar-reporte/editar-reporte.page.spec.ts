import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarReportePage } from './editar-reporte.page';

describe('EditarReportePage', () => {
  let component: EditarReportePage;
  let fixture: ComponentFixture<EditarReportePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarReportePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarReportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
