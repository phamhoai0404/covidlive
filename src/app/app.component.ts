import { DataCovid } from './model/data.model';
import { Component } from '@angular/core';
import { ServiceHttpService } from './service/service-http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'covidlive';

    public dataAll :  DataCovid [] = [];
    public dataLast1 =new DataCovid();
    public dataLast2 = new DataCovid();
    public numberActive = 0;
    public numberDeath = 0;
    

    public hoa = 0;

    constructor(private service: ServiceHttpService){}

    ngOnInit(): void {
        console.log("Đã vào ngOnit");
       
       this.getData();
    }
    getData(){
        this.service.getDataCurrent().subscribe(
            data =>{
                console.log(data);
                this.dataAll = data;
                console.log(this.dataAll);
                this.dataLast1 = this.dataAll[this.dataAll.length -1];
                this.dataLast2 = this.dataAll[this.dataAll.length -2];
                this.numberActive = this.dataLast1.Active - this.dataLast2.Active;
                this.numberDeath = this.dataLast1.Deaths - this.dataLast2.Deaths;
            }

        )
    }


}
