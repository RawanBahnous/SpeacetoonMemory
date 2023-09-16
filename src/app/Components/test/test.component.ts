import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { IQuestions } from 'src/Models/iquestions';
import { QuestionsService } from 'src/Services/questions.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
  ]
})
export class TestComponent implements OnInit{

  questionsLst:IQuestions[]=[];
  currentQiestion = 0;
  points = 0;
  counter =60;
  correctAnswers=0;
  constructor(private serv:QuestionsService){}
  ngOnInit(): void {
    this.questionsLst = this.serv.getAllQuestions();
    console.log(this.questionsLst);
  }
  testpopUp = false;

  openTest(){
    this.testpopUp = true;
    this.startCounter();

  }

  showScoreModal = true;
  len = this.questionsLst.length;
  // next and prev question
  next(){
    this.currentQiestion ++;
    if (this.currentQiestion === this.questionsLst.length -1) {
console.log("aloo");
this.testpopUp = true;
      this.showScoreModal = false;
    }
  }
  prev(){
    this.currentQiestion --;
  }

  answer(currQ: any, selectedAnswer: string) {
    const correctAnswer = this.questionsLst[currQ - 1].correct;
    console.log("Selected Answer:", selectedAnswer);
    console.log("Correct Answer:", correctAnswer);
    if (selectedAnswer === correctAnswer) {
      this.correctAnswers++;
      this.points++;
    }else{
      this.correctAnswers--;
      this.points -=1;
    }

    console.log("Points:", this.points);
    console.log("Correct Answers:", this.correctAnswers);

    this.next();
  }

  intervals:any;
  startCounter()
{
  this.intervals = interval(1000).subscribe(
    val =>{
this.counter --;
if (this.counter ===0) {
  this.currentQiestion ++;
  this.counter = 60;
  this.points -=1;
}});
setTimeout(() => {
this.intervals.unsubscribe();
}, 600000);

}


}
