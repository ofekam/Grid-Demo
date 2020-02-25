/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsersComponent } from './users.component';
import { UsersService } from 'src/app/services/users.service';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/User';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [{
        provide: UsersService, useValue: {
          getUsers: () => new BehaviorSubject<User[]>([{
            first_name: 'test',
            last_name: 'test',
            email: 'test',
            gender: 'male',
            id: 1,
            ip_address: 'test'
          }])
        }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create table', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const element = fixture.nativeElement;
    const table = element.querySelector('p-table');
    expect(table).toBeTruthy();
  });
});
