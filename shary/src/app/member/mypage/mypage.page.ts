import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.page.html',
  styleUrls: ['./mypage.page.scss'],
})
export class MypagePage implements OnInit {

  user: any;

  constructor(private userService: UserService,private imageService: ImageService,private authService:AuthService) { }

  ngOnInit() {
    this.getUserProfile();
    this.imageService.images=[];
    this.imageService.profile='http://172.30.1.15:5000/api/images/'+this.authService.user.id;

  }

  getUserProfile(){
    this.userService.getProfile().subscribe(data => {
      console.log('mypage data : ', data);
      this.user = data;
    })
  }
  uploadprofile(){
    this.imageService.selectProfile().then(()=>{
    });
  }

}
