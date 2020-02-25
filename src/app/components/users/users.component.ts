import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
z
  users$: Observable<User[]>;
  cols = [
    { field: 'first_name', header: 'First' },
    { field: 'last_name', header: 'Last' },
    { field: 'email', header: 'Email' },
    { field: 'gender', header: 'Gender' },
    { field: 'ip_address', header: 'IP' }
];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers().pipe(take(1));
  }


}
