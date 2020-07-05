import { filter, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const takeOne = () => (source: Observable<any>) => source.pipe(
    filter(val => val != null),
    take(1)
);