import { Injectable } from '@angular/core';
import {COURSES} from './mock-courses';
import {Course} from './course';
import { Observable, of} from 'rxjs';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses(): Observable<Course[]>{
    return of (COURSES);
  }
  constructor(private messagesService: MessagesService) { }
}
