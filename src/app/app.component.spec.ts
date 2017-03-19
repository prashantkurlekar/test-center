import { TestBed, async } from '@angular/core/testing';
import { TestCenterApp } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Platform } from 'ionic-angular';

describe('AppComponent: TestCenterApp', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestCenterApp,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        Platform,
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TestCenterApp);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(TestCenterApp);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(TestCenterApp);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
