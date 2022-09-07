import { Subject } from 'rxjs'

export class SubjectManager {
  // a variables asincronas ponerles el $
  subject$ = new Subject();

  getSubject() {
    return this.subject$.asObservable();
  }

  setSubject(value) {
    // para enviar la info
    this.subject$.next(value)
  }

}