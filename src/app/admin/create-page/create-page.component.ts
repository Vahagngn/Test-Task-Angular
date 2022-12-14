import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../shared/interfaces";
import {Subscription} from "rxjs";
import {PostsService} from "../../shared/services/posts.service";
import { AlertService } from './../../shared/services/alert.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit, OnDestroy {

  form: FormGroup
  sub$: Subscription

  constructor(
    private postService: PostsService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date()
    }
    this.sub$ = this.postService.create(post).subscribe(() => {
      this.form.reset()
      this.alert.success('You have successfully added an article!')
    })
  }

  ngOnDestroy() {
    this.sub$ ? this.sub$.unsubscribe() : ''
  }

}
