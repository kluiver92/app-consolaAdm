import { Component } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  student: Student = {
    name: '',
    lastName: '',
    courseId: false
  };
  submitted = false;

  constructor(private studentService: StudentService) {}

  saveTutorial(): void {
    const data = {
      title: this.student.name,
      description: this.student.lastName
    };

    this.studentService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.student = {
      name: '',
      lastName: '',
      courseId: ''
    };
  }
}
