import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  ngOnInit() {
  }

  constructor() { }
  info={
    nom:"Amine",
    mail:"a-ek@hotmail.fr",
    tel:"0626137069"
  }
  comments = [];
  comment={date:null, message:''};
  newComment=false;

addComment(){
  if(this.comment.message !=''){
    this.comment.date = new Date();
    this.comments.push({date:this.comment.date, message:this.comment.message});
    this.comment.message='';
  }
}

}
