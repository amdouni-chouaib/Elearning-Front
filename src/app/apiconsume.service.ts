import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiconsumeService {
  constructor(private http:HttpClient) { }

  data:any
  id:any


  private userRoleSubject = new BehaviorSubject<string | null>(null);
  userRole$ = this.userRoleSubject.asObservable();


  updateUserRole(role: any) {
    this.userRoleSubject.next(role);
  }

  private token = new BehaviorSubject<string | null>(null);
  usertoken$ = this.token.asObservable();


  updateUsertoken(token: any) {
    this.token.next(token);
  }

  signin(user: any):Observable<any> {
   return  this.http.post<any>('https://elearning-backend-vcso.onrender.com/login', user);
  }
 
  signup(user:any):Observable<any>{
    return this.http.post<any>("https://elearning-backend-vcso.onrender.com/signup", user);
  }

  uploadFile(user:any):Observable<any>{
    return this.http.post<any>("https://elearning-backend-vcso.onrender.com/uploads", user);
  }

  getAllUser():Observable<any>{
    return this.http.get<any>("https://elearning-backend-vcso.onrender.com/getall");
  }
  createtraining(data:any):Observable<any>{
    return this.http.post<any>("https://elearning-backend-vcso.onrender.com/createtraining", data);
  }
  createtrainings(data:any):Observable<any>{
    return this.http.post<any>("https://elearning-backend-vcso.onrender.com/formationss", data);
  }
  createuser(data:any):Observable<any>{
    return this.http.post<any>("https://elearning-backend-vcso.onrender.com/createuser", data);
  }
  getAlltraining():Observable<any>{
    return this.http.get<any>("https://elearning-backend-vcso.onrender.com/getalltrainings");
  }
  



  getoneuser(id:any):Observable<any>{
    return this.http.get<any>("https://elearning-backend-vcso.onrender.com/"+id);
  }
  updateoneuser(id:any,data:any):Observable<any>{
    return this.http.put<any>("https://elearning-backend-vcso.onrender.com/"+id,data);
  }


  getallteacher():Observable<any>{
    return this.http.get("https://elearning-backend-vcso.onrender.com/getteacher")
  }

  
  deleteoneuser(id:any):Observable<any>{
    return this.http.delete("https://elearning-backend-vcso.onrender.com/"+id)
  }
  deleteonetraining(id:any):Observable<any>{
    return this.http.delete("https://elearning-backend-vcso.onrender.com/training/"+id)
  }
  getonetraining(id:any):Observable<any>{
    return this.http.get("https://elearning-backend-vcso.onrender.com/training/"+id)
  }
  updateonetraining(id:any,data:any):Observable<any>{
    return this.http.put("https://elearning-backend-vcso.onrender.com/training/"+id,data)
  }

  createcomment(data:any):Observable<any>{
    return this.http.post("https://elearning-backend-vcso.onrender.com/comments/new",data)
  }
  updateFormation(id:any,data:any):Observable<any>{
    return this.http.put("https://elearning-backend-vcso.onrender.com/formation/"+id,data)
  }
  postQuizQuestions(questions: any):Observable<any> {
    return this.http.post<any>("https://elearning-backend-vcso.onrender.com/quiz", questions);
  }
  updateuserF(id:any,formations:any):Observable<any> {
    return this.http.put<any>("https://elearning-backend-vcso.onrender.com/traininguser/"+id,{formations});
  }
  
  getcomment(id:any):Observable<any>{
    return this.http.get("https://elearning-backend-vcso.onrender.com/comments/formation/"+id+"/comments")
  }
  getcourses(id:any):Observable<any>{
    return this.http.get("https://elearning-backend-vcso.onrender.com/users/"+id+"/pdf-formations")
  }
  getquiz(id:any):Observable<any>{
    return this.http.get("https://elearning-backend-vcso.onrender.com/formations/"+id+"/quizzes")
  }

  



}
