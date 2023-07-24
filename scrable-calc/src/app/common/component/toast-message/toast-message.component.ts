import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastMessageService } from '../../service/toast-message.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss'],
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' }
})
export class ToastMessageComponent implements OnInit {


  constructor(public toastService: ToastMessageService) {
  }

  ngOnInit() {}

  isTemplate(toast:any) {
		return toast.textOrTpl instanceof TemplateRef;
	}

}


