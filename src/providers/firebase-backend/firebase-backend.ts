import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Test } from '../../models';

@Injectable()
export class FirebaseBackend {

  public fireAuth: any;
  public userProfiles: any;
  public organizations: any;
  public tests: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfiles = firebase.database().ref(`/userProfiles`);
  }

  // --------------- Authentication

  public login(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  // TODO: Replace with user object
  public signup(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        this.userProfiles.child(newUser.uid).set({ email: email });
      });
  }

  public resetPassword(email: string): firebase.Promise<any> {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  public logoutUser(): firebase.Promise<any> {
    return this.fireAuth.signOut();
  }

  // --------------- Tests

  private getReferenceToTests(organization: string): void {
    this.tests = firebase.database().ref(`/${organization}/tests`);
  }

  public getTests(organization: string): firebase.database.Reference {
    console.log(`FirebaseBackend.getTests`);
    if (!this.tests) this.getReferenceToTests(organization);
    console.log(this.tests);
    return this.tests;
  }

  public saveTest(organization: string, test: Test): firebase.Promise<any> {
    console.log(`FirebaseBackend.saveTest`);
    if (!this.tests) this.getReferenceToTests(organization);
    return this.tests.push(test);
  }

}