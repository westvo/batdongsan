import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.all().subscribe((res: any) => {
      console.log(res);
    });
  }

}
