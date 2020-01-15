import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  // courses: any[];
  // subscription: Subscription;
  course$;
  author$;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();

    // this.subscription = db.list('/courses').valueChanges()
    //   .subscribe(courses => {
    //     this.courses = courses;
    //     console.log(this.courses);
    //   });
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
}
