import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-mentee',
  templateUrl: './mentee.component.html',
  styleUrls: ['./mentee.component.css']
})
export class MenteeComponent implements OnInit {

  username: string;
  user: User;

  constructor(private auth: AuthService) {

    this.username = this.auth.retrieve_username();

    this.auth.check_role_from_username(this.username)
    .subscribe(res => {
      this.user = res;
    },
    console.error
  );


   }

   get_role(){}

  ngOnInit() {


  }

}
