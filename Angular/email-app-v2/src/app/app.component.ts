import { Component } from '@angular/core';

class Email {
  email;
  importance;
  subject;
  content;

  constructor (email, importance, subject, content){
    this.email = email;
    this.importance = importance;
    this.subject = subject;
    this.content = content;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  emails = [];
  all_emails = this.createEmailObj();

  createEmailObj(){
    this.emails.push(new Email("test@test.com", true, "sub1", "testcontent1"));
    this.emails.push(new Email("test2@test.com", false, "sub2", "testcontent2"));
    this.emails.push(new Email("test3@test.com", true, "sub3", "testcontent3"));
    this.emails.push(new Email("TEST4@test.com", false, "sub4", "testcontent4"));
    this.emails.push(new Email("TEST5@test.com", true, "sub5", "testcontent5"));
  } 
}
