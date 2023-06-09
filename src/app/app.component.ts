import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SentimentService } from 'src/services/sentiment-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form!: FormGroup;
  data!: [];
  sentiments!: [];

  constructor(private http: HttpClient, private sentimentService: SentimentService) {}
  ngOnInit(){
    this.fetchSentiments();
    this.fetchResults();
    
    this.form = new FormGroup({
      inputField: new FormControl()
    });
  }

  submitForm(): void {
    const dataObj = { inputText: this.form.get('inputField')?.value};
    this.sentimentService.post('results', dataObj).subscribe(
      (result) => {
        this.fetchResults();
        //Faking a response selecting a random option from sentiments options
        const randomIndex = Math.floor(Math.random() * this.sentiments.length);
        console.log(this.sentiments[randomIndex]);

        this.form.controls['inputField'].setValue('');
      },
      (error) => console.error('Error:', error)
    );
  }

  fetchResults(): any {
    this.sentimentService.get('results').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => alert('Error retreiving results please try again later')
    );
  }

  fetchSentiments(): void {
    this.sentimentService.get('sentiments').subscribe(
      (response) => {
        this.sentiments = response;
      },
      (error) => alert('Error retreiving user sentiments please try again later')
    );
  }
}
