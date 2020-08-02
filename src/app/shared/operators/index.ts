import { filter, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const takeOne = () => (source: Observable<any>) => source.pipe(
    take(1),
    filter(val => val != null)
);
