import { ValidatorFn, AbstractControl } from "@angular/forms";

export function websiteValidator(): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } | null => {
      const valid = /^(www\.)\S+\.(com|ge)$/i.test(control.value);
      return valid ? null : { invalidWebsite: true };
    };

  }