import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "TestProject"
  // title = 'test-project';
  // // Declared array of months
  // months = ["January", "Feburary", "March", "April", "May", 
  //           "June", "July", "August", "September",
  //           "October", "November", "December"];
  // isAvailable = true;
  // httpData;

  // constructor(private http: Http) { }

  // ngOnInit() 
  // {
  //    this.http.get("http://jsonplaceholder.typicode.com/users?id=2")
  //    .pipe(map((response) => response.json()))
  //    .subscribe((data) => this.displaydata(data));
  // }
 
  // displaydata(data) 
  // {
  //   this.httpData = data;
  //   console.log(data)
  // }

  // changeMonth(event) 
  // {
  //   console.log('Change month from dropdown')
  //   console.log(event)
  // }

  // btnClickFunction(event) 
  // {
  //   // Simple console.log and alart
  //   console.log(event)
  //   this.isAvailable = !this.isAvailable
  // }

  // onSubmitClick(data)
  // {
  //   alert("Entered Email: " + data.email)
  // }
}
