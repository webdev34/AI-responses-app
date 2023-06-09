import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SentimentService } from 'src/services/sentiment-service.service';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.css']
})
export class ResultsDisplayComponent implements OnInit {
  selectedSentiment: any | undefined;

  @Input() results : any | undefined;
  @Output() currentSentiment = new EventEmitter<Object>();

  constructor(private http: HttpClient, private sentimentService: SentimentService) {}

  ngOnInit(): void {}

  selectSentiment(thisSentiment: any): void {
    this.selectedSentiment = thisSentiment;
    this.currentSentiment.emit(thisSentiment);
  }
}
