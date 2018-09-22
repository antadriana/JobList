import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-filters',
  templateUrl: './company-filters.component.html',
  styleUrls: ['./company-filters.component.sass']
})
export class CompanyFiltersComponent implements OnInit {

  positions: Position[];
  selectedPosition: Position;

  schools: School[];
  selectedSchool: School;

  faculties: Faculty[];
  selectedFaculty: Faculty;

  cities: City[];
  selectedCity: City;

  languages: Language[];
  selectedLanguage: Language;

  rangeValues: number[] = [20, 30];

  constructor() {
    this.positions = [
      {name: 'Software developer'},
      {name: 'UI Engeneer'},
      {name: 'Front-end developer'},
      {name: 'Backend developer'},
      {name: 'HR'}
    ];
    this.schools = [
      {name: 'Massachusetts Institute of Technology'},
      {name: 'Stanford University'},
      {name: 'Harvard University'},
      {name: 'University of California, Berkeley'},
      {name: 'Cornell University'}
    ];
    this.faculties = [
      {name: 'Math'},
      {name: 'Biology'},
      {name: 'Physics '},
      {name: 'Chemistry '},
      {name: 'Computer science'}
    ];
    this.languages = [
      {name: 'English'},
      {name: 'Ukrainian'},
      {name: 'Polish '},
      {name: 'German '},
      {name: 'Russian'}
    ];

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

  }

  ngOnInit() {
  }

}
class Position {
  name: string;

}

class Language {
  name: string;

}

class Faculty {
  name: string;

}

class City {
  name: string;
  code: string;

}

class School {
  name: string;

}
