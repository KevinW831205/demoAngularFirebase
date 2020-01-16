import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: AngularFireList<any[]>;
  // courses: any[];
  // subscription: Subscription;
  courseValue$;
  authorValue$;


  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses');
    this.courseValue$ = db.object('/courses/1').valueChanges();
    this.authorValue$ = db.object('/authors/1').valueChanges();

    // this.subscription = db.list('/courses').valueChanges()
    //   .subscribe(courses => {
    //     this.courses = courses;
    //     console.log(this.courses);
    //   });

  }

  add(course:HTMLInputElement){
    this.courses$.push([course.value])

    course.value = "";
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
}
