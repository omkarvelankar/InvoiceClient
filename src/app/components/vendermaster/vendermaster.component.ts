import {HttpClient} from '@angular/common/http';
import {SelectionModel} from '@angular/cdk/collections';
import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { InvoiceService } from 'src/app/services/invoice.service';
 
@Component({
  selector: 'app-vendermaster',
  templateUrl: './vendermaster.component.html',
  styleUrls: ['./vendermaster.component.scss']
})
export class VendermasterComponent implements OnInit {

  ELEMENT_DATA: any=[]=[];
  dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['id','vendername','email', 'phno','panno','gstno','address','action'];
  @ViewChild(MatPaginator, {static:true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;

  constructor(private invoiceService: InvoiceService) {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    
    }
  
     /**
  * @author Amol Dhamale
  * getAllVender() to get the Vender Details.
  */
 getAllVender() {
  this.invoiceService.getAllVender().subscribe(res => {
    if (!res.error) {
      this.ELEMENT_DATA = res.result;
      console.log(this.ELEMENT_DATA);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }, error => {
    console.log("API error", error);
  });
}

    ngOnInit() {
      this.getAllVender(); 
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
  
