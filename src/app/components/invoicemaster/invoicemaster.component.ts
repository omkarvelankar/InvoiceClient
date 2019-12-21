import {SelectionModel} from '@angular/cdk/collections';
import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoicemaster',
  templateUrl: './invoicemaster.component.html',
  styleUrls: ['./invoicemaster.component.scss']
})
export class InvoicemasterComponent implements OnInit {

 
  ELEMENT_DATA: any=[]=[];
  dataSource = new MatTableDataSource();

  public displayedColumns: string[] = ['item','description','price','qty', 'discount','amount','sgst','cgst','amttax','paymthd', 'issuedate','duedate','paid'];
  @ViewChild(MatPaginator, {static:true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;

  constructor(private invoiceService: InvoiceService) {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    
    }
  
     /**
  * @author Amol Dhamale
  * getAllInvoice() to get the Vender Details.
  */
 getAllInvoice() {
  this.invoiceService.getAllInvoice().subscribe(res => {
    if (!res.error) {
      this.ELEMENT_DATA = res.result;
      console.log(this.ELEMENT_DATA);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }, error => {
    console.log("API error", error);
  });
}

    ngOnInit() {
      this.getAllInvoice(); 
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
  

