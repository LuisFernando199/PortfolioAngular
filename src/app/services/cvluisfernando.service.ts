import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvluisfernandoService {

  attitudes: any[] = [];
  education: any[] = [];
  experience: any[] = [];
 
  constructor(private http: HttpClient) { 
   this.CargarActtitudes(); 
   this.CargarEducation();
   this.CargarExperience(); 
  }

  private CargarActtitudes(){
      this.http.get('https://personal-portfolio-luis-default-rtdb.europe-west1.firebasedatabase.app/Attitudes.json')
      .subscribe((resp: any) => {
        this.attitudes = resp;
        console.log(resp);
      });
  }

  private CargarEducation(){
    this.http.get('https://personal-portfolio-luis-default-rtdb.europe-west1.firebasedatabase.app/Education.json')
    .subscribe((resp: any) => {
      this.education = resp;
      console.log(resp);
    });
}

private CargarExperience(){
  this.http.get('https://personal-portfolio-luis-default-rtdb.europe-west1.firebasedatabase.app/Experience.json')
  .subscribe((resp: any) => {
    this.experience = resp;
    console.log(resp);
  });
}


}
