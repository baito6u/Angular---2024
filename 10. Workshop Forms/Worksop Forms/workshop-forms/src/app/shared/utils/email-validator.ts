import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainStrings = domains.join('|');
  const regExp = new RegExp(`[a-zA-Z0-9._%+-]{6,}@(?:gmail)\.(${domainStrings})`);

  return (control) => {
    const isEmailInvalid = control.value === '' || regExp.test(control.value);
    return isEmailInvalid ? null : { emailValidator: true };
  };
}
