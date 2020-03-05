import { Component, OnInit } from '@angular/core';
import {Course} from '../course';
import {COURSES} from '../mock-courses';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  selectedCourse: Course;
  courses: Course[];

  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
    this.getCourse();
  }

  onSelect(course: Course):void{
    this.selectedCourse = course;
  }

  getCourse(): void{
    this.CourseService.getCourses().subscribe(courses => this.courses=courses);
  }
}
