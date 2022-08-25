import {AbstractControl} from '@angular/forms';

export function checkBirthDay(control: AbstractControl) {
  const birthDay = new Date(control.value);
  if (dateDiff(birthDay, new Date()) < 1096 || dateDiff(birthDay, new Date()) > 36503) {
    return {checkAge: true};
  }
  return null;
}

function parseDate(str: string) {
  let dmy = str.split('-');
  return new Date(Number(dmy[0]), Number(dmy[1]) - 1, Number(dmy[2]));
}

function dateDiff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
