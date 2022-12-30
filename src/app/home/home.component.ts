import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  text = "";
  questionPairs:Array<any> = [];
  selectedAnswer = '';
  selectedIndex = 100000000;
  ngOnInit(): void {
  }
  testing(){
    this.questionPairs = [];
    this.selectedAnswer = '';
    let postBody = {
      "para":this.text
    }
    this.http.post("https://blazing-news-api.vercel.app/prepareQuestions",postBody).subscribe((data: any)=>{
      this.questionPairs = data.pairs;
    })
  }
  viewAnswer(index: any){
    // console.log(this.questionPairs[index]);
    // let x: string = this.questionPairs[index][0];
    // console.log(x.replace('__________________',this.questionPairs[index][1]));
    // this.questionPairs[index][0] = x.replace('__________________',this.questionPairs[index][1])
    this.selectedIndex = index;
    this.selectedAnswer = this.questionPairs[index][1];
  }

}
