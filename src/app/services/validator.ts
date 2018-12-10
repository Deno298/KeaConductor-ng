import { AbstractControl } from '@angular/forms';

export function emailValidator(control: AbstractControl): {[key: string]: boolean} | null {

        const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (control.value !== undefined && regEx.test(control.value)) {
            return null;
        }
        return {'email not correct': true};
}
