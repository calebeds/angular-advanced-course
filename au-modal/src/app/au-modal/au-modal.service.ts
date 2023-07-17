import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class AuModalService {
  private subject = new Subject();
  close$: Observable<unknown> = this.subject.asObservable();
  constructor() {}
  close() {
    this.subject.next();
  }
}
