import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { InvoiceService } from 'src/app/services/invoice.service';

export interface PeriodicElement {
  id: number;
  name: string;
  dateOfBirth: Date;
  address: string;
}


@Component({
  selector: 'app-vendermaster',
  templateUrl: './vendermaster.component.html',
  styleUrls: ['./vendermaster.component.scss']
})
export class VendermasterComponent implements AfterViewInit {

  ELEMENT_DATA: any=[]=[];
  dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'name','dateOfBirth', 'address','action'];

  @ViewChild(MatPaginator, {static:true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;

  constructor(private invoiceService: InvoiceService) {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    }
  
    ngOnInit() {
      this.ELEMENT_DATA = this.invoiceService.getAdmissionDetails();
      this.dataSource=this.ELEMENT_DATA;
     
    }
  
    ngAfterViewInit(){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    public redirectToDetails = (id: string) => {
      
    }
   
    public redirectToUpdate = (id: string) => {
      
    }
   
    public redirectToDelete = (id: string) => {
      
    }
  
  }
  
