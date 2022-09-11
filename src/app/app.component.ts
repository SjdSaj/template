import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Template-Form';

  user = { email : '' , pswd : ''};

  submit(data:any){
    alert('working');
    console.log(data.form.status);
  }
}
