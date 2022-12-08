import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IdataOrder } from '../models/idata-order';
import { OrderService } from '../services/order.service';
import {Sort,MatSort} from '@angular/material/sort'
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-taborder',
  templateUrl: './taborder.component.html',
  styleUrls: ['./taborder.component.css']
})

  


export class TaborderComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position','date' ,'time','reservationNum','reservationName', 
  'fullNameContact', 'institution','activityDayType','numberOfGroups','numberOfVisitors',
'paymentStatus','paymentButton','didGroupArrive','divisionRouter','cancel'];
data:IdataOrder[] = []
dataSource = new MatTableDataSource(this.data);
totalPriceAfterDiscountAll:number=0
numberOfVisitorsAll:number=0
numberOfGroupsAll:number=0
// displayColumn: string[] = [];
 
  constructor(private orderService:OrderService) { 
    this.orderService.getOrder().subscribe((res:IdataOrder[])=>{
      this.data=res  
      this.dataSource.data=this.data   
      console.log(this.data)
      this.data.forEach(elem=>{
        this.totalPriceAfterDiscountAll += elem.totalPriceAfterDiscount
this.numberOfVisitorsAll+=elem.numberOfVisitors
this.numberOfGroupsAll+=elem.numberOfGroups
      })

    })
  }
  @ViewChild(MatSort) sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange() {
    
    //   this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    // } else {
    //   this._liveAnnouncer.announce('Sorting cleared');
    // }
  }

  ngOnInit(): void {
   // this.displayColumn=["תאריך"]
    
  }

  sortData(){}


}
