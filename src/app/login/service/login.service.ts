import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  data;
  constructor(private base: BaseService) { }

  // getLoginData(url: string): Observable<any> {
  //   this.base.getResults(url).subscribe(data => {
  //       console.log(data);
  //       this.data = data;
  //     });
  //     console.log(this.data);
  //     return this.data;
  // }

}
