import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-fields',
  templateUrl: './search-fields.component.html',
  styleUrls: ['./search-fields.component.css'],
})
export class SearchFieldsComponent implements OnInit {
  searchForm!: FormGroup;
  faSearch = faSearch;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm(): void {
    this.searchForm = this.formBuilder.group({
      ville: '',
      specialite: '',
    });
  }
}
