import { Component, OnInit } from '@angular/core';
import { Ipost } from '../shared/models/interface';
import { posts } from '../shared/const/posts';

@Component({
  selector: 'app-postcards',
  templateUrl: './postcards.component.html',
  styleUrls: ['./postcards.component.scss']
})
export class PostcardsComponent implements OnInit {
[x: string]: any;
public postarray:Array<Ipost>=[]
  constructor() { }

  ngOnInit(): void {
    //call api;
    this.postarray=posts;
  }

}
