import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeTransform',
})
export class TimeTransformPipe implements PipeTransform {
  transform(value: string | null): string | null {
    if (!value) return 'Date not specified';

    const now = new Date();
    const date = new Date(value);
    const localDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );

    const diffInSeconds = Math.floor(
      (now.getTime() - localDate.getTime()) / 1000
    );

    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hours ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  }
}
