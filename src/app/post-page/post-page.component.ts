import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {Post} from "../shared/interfaces";
import {PostsService} from "../shared/services/posts.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit, OnDestroy {

  post$: Observable<Post>

  constructor(private route: ActivatedRoute,
              private postService: PostsService) {
  }

  ngOnInit(): void {
    this.post$ = this.route.params.pipe(
      switchMap( (params: Params) => {
        return this.postService.getById(params['id'])
      })
    )
  }

  ngOnDestroy(): void {
  }

}
