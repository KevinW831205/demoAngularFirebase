import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: AngularFireList<any>;
  // courses: any[];
  // subscription: Subscription;
  courseValue$;
  authorValue$;
  coursesValue$;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses');
    this.coursesValue$ = db.list('/courses').snapshotChanges();
    this.courseValue$ = db.object('/courses/1').valueChanges();
    this.authorValue$ = db.object('/authors/1').valueChanges();

    // this.subscription = db.list('/courses').valueChanges()
    //   .subscribe(courses => {
    //     this.courses = courses;
    //     console.log(this.courses);
    //   });

  }

  add(course: HTMLInputElement) {
    this.courses$.push({
      name: course.value,
      price: 1,
      isLive: false,
      section: [
        { id: 1, name:"section1"},
        { id: 2, name:"section2"},
        { id: 3, name:"section3"},
      ]
    })

    course.value = "";
  }

  updateCourse(course){
    console.log(course);
    console.log(course.key)
    // this.db.object('/courses/'+course.$key).set(course.$value+' updated')

  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
}
