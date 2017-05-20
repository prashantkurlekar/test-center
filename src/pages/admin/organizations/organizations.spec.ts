import { TestBed, ComponentFixture } from '@angular/core/testing';
import { OrganizationsPage } from './organizations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OrganizationService } from '../../../services/organization/organization.service';

describe('Page.Admin.Organizations', () => {

  let component: OrganizationsPage;
  let fixture: ComponentFixture<OrganizationsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        OrganizationService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be initialize', () => {
    expect(component).toBeTruthy();
  });

  it('should have title defined', () => {
    const titleHTMLElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;

    expect(titleHTMLElement.innerText).toBe('Organizations');
  });

});
