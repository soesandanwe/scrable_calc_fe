import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

export enum toastTypes {
  error,
  success,
};

export interface ToastData {
  title: string;
  content: string;
  show?: boolean;
  type?: toastTypes;
  progressWidth: any;
};

@Injectable({
  providedIn: 'root'
})

export class ToastMessageService {
  toasts: any[] = [];

	show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
		this.toasts.push({ textOrTpl, ...options });
	}

	remove(toast:any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
