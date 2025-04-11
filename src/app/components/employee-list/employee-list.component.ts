import { Component, OnInit } from '@angular/core';
import {EmployeeService, Employee} from '../../services/employee.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }
}
