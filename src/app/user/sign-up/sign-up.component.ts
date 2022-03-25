import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/acount/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent implements OnInit {

  constructor(public service: AccountService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit(){
    console.log('submit');
    this.service.register().subscribe(
      (res: any) => {
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success("New user created!','Registration successful.")

        }else{
          res.errors.forEach((element: { code: any; description: string | undefined; }) => {
            switch(element.code){
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.');
                break;
              default:
                  this.toastr.error(element.description,"Registration failed.");
                  break;
            }
          });
        }
      },
      (err:any) =>{
        this.toastr.success("New user created!','Registration successful.")
        console.log(err);
      }
    )
  }
}
