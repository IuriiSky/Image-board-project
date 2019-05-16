import { Component, OnInit } from '@angular/core';
import { CreatePost, Post} from '../shared/interfaces/post.interface';
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

  boldClicked(){
    this.appendTag(new Tag("b"));
  }

  italicClicked(){
  this.appendTag(new Tag("i"));
}

  underlineClicked(){
  this.appendTag(new Tag("u"));
}

  strikethroughClicked(){
    this.appendTag(new Tag("s"));
  }

  subscriptClicked(){
    this.appendTag(new Tag("sub"));
  }

  superscriptClicked(){
    this.appendTag(new Tag("sup"));
  }

  getCursorPosition(){
    let myTextArea = document.getElementById('area') as HTMLInputElement;
    let index = myTextArea.selectionStart; 
    return index;
  }

  setCursorPosition(position: number){
    let myTextArea = document.getElementById('area') as HTMLInputElement;
    myTextArea.focus();
    myTextArea.setSelectionRange(position, position);
  }
 
  splitString(str: string, index:number){
    return {
      leftSide: str.substring(0, index),
      rigthSide: str.substring(index, str.length)
    };
  }
  
  appendTag(t:Tag){
    let split = this.splitString(this.createNewPost.text, this.getCursorPosition());
    let newStr = split.leftSide + t.getFullTag() + split.rigthSide;
    this.createNewPost.text = newStr;
    setTimeout(() => 
      this.setCursorPosition(split.leftSide.length + t.getLenght()),
      500
    )

  }

  ngOnInit() {
  this.createPost = new FormGroup({
    subject: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),      
  });
};
}

class Tag { 
  constructor(tagValue:string){
    this.tag = tagValue;
  }

  private tag : string;

  openTag(){
    return "[" + this.tag + "]";
  };

  closeTag(){
    return "[/" + this.tag + "]";
  };

  getFullTag(){
    return this.openTag() + this.closeTag();
  };

  getLenght(){
    return this.openTag().length;
  };
};