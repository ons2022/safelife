import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageUsersPage } from './manage-users.page';

describe('ManageUsersPage', () => {
  let component: ManageUsersPage;
  let fixture: ComponentFixture<ManageUsersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
