import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NombreServiceService } from './nombre-service.service';
@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {


  especialista: any = []
  constructor(private NombreService: NombreServiceService, private router:Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarEspecialista();
  }

  cargarEspecialista(){
    // this.NombreService.getPaciente().subscribe(
    //   res => {
    //     this.paciente = res;
    //     console.log(this.paciente);
    //   },
    //   err => console.log(err)
    // )
  }

}
