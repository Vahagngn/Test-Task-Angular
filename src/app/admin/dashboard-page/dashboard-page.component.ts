import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/services/posts.service"
import {Subscription} from "rxjs";
import { AlertService } from './../../shared/services/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  postArr: Post[] = []
  pSub$: Subscription
  searchStr: string;

  constructor(
    private postService: PostsService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.pSub$ = this.postService.getAll().subscribe((data: Post[]) => {
      this.postArr = data
    })
  }

  removePost(id: string) {
    this.pSub$ = this.postService.remove(id).subscribe(() => {
      this.postArr = this.postArr.filter(post => post.id !== id)
    })
    this.alert.success('You have successfully deleted the article!')
  }

  ngOnDestroy(): void {
    this.pSub$ ? this.pSub$.unsubscribe() : ''
  }

}
