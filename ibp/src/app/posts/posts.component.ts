import { Component, OnInit } from '@angular/core';
import { CreatePost, Post,} from '../shared/interfaces/post.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})

export class PostsComponent implements OnInit {

  createPost: FormGroup;

  showCreateForm: boolean = true;

  toggleCreatePost(){
    this.showCreateForm = false;
  }
    
  public today: Date = new Date();

  public posts: Post[];

  private boardIndex: string = 'b';

  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) {
                this.route.params.subscribe((params: Params) => {
                  if (params["board_index"]) {
                    this.boardIndex = params["board_index"];
                    console.log(this.boardIndex);
                  }
                });

      setInterval(() => {
        this.today = new Date();
      }, 1);
  };

  public createNewPost: CreatePost = {
    board_index: this.boardIndex,
    subject: '',
    text: '',
    file: null,
  };

  handleFileInput(files: FileList) {
    this.createNewPost.file = files.item(0);
}

  addPost() {
    this.postService.createNewPost(this.createNewPost, this.boardIndex)
  .subscribe(post => {
    console.log(post);
      this.createNewPost.subject = '';
      this.createNewPost.text = '';
      // this.createNewPost.file = ;
    this.showCreateForm = true;
  });
  }

  ngOnInit() {
  this.createPost = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required]),
    subject: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),      
  });
};
}