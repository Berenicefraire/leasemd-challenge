import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { DataService } from 'src/app/shared/services/data.service';
import { BrowserService } from 'src/app/shared/services/browser.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit, OnDestroy {
  quoteForm: FormGroup;
  distList: any[] = [];
  submitted = false;
  default: string = 'Seleccionar';
  breakpoint: string = '';

  formObs$: Subscription = new Subscription;
  bkObs$: Subscription;

  faExclamationCircle = faExclamationCircle;

  constructor(private fb: FormBuilder, private dataService: DataService, private browser: BrowserService) {
    this.quoteForm = this.fb.group(
      {
        email: ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required]],
        nombreCompleto: ['', [Validators.minLength(6), Validators.required]],
        idDistribuidor: ['', Validators.required],
        paginaAuto: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      });
      this.bkObs$ = this.browser.screenSizeObserver$.subscribe(bk => this.breakpoint = bk);
      // this.quoteForm.controls['idDistribuidor'].setValue('Seleccionar', {onlySelf: true});
  }

  ngOnInit(): void {
    this.getDistribuidores();
  }

  get getData() {
    return this.quoteForm.value;
  }

  getDistribuidores() {
    // res.distribuidores
    this.dataService.getDistList().pipe(take(1)).subscribe(res => this.distList = res.distribuidores);
  }

  sendForm() {
    this.formObs$ = this.dataService.getCotizacion(this.getData).subscribe(res => {
      if(res) {
        this.submitted = true;
      }
    });
  }

  isValid(fieldName: string) {
    return (this.quoteForm.get(fieldName)?.touched || this.submitted) && this.quoteForm.get(fieldName)?.errors;
  }

  ngOnDestroy(): void {
    this.bkObs$.unsubscribe();
    this.formObs$.unsubscribe();
  }

}
