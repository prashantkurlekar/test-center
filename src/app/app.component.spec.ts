import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TestCenterApp } from './app.component';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../test-config/mocks-ionic';
import { IonicStorageModule } from '@ionic/storage';

describe('MyApp Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestCenterApp],
      imports: [
        IonicModule.forRoot(TestCenterApp),
        IonicStorageModule.forRoot(),
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock },
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCenterApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof TestCenterApp).toBe(true);
  });

  it('should have two pages', () => {
    expect(component.pages.length).toBe(3);
  });

});
