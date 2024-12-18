import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {
 
  albumForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire avec validation
    this.albumForm = this.fb.group({
      title: ['', Validators.required],  // Validation : obligatoire
      description: ['', [Validators.required, Validators.minLength(10)]], // Obligatoire et min 10 caractères
    });
  }

  ngOnInit(): void {
  }

 
 
 
  onSubmit() {
    if (this.albumForm.valid) {
      console.log(this.albumForm.value);  // Log ou soumettre les données
    }
  }


  

}
