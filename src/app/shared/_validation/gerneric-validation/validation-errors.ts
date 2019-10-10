import { FormGroup } from '@angular/forms';

export class ValidationErrors {
    static logValidationErrors(group: FormGroup, formErrors?: any, validationMessages?: any, errorMessages?: any[]): void {
        Object.keys(group.controls).forEach((key: string) => {
            const abstractControl = group.get(key);

            formErrors[key] = '';
            if (
                abstractControl &&
                !abstractControl.valid &&
                (abstractControl.touched || abstractControl.dirty)
            ) {
                const messages = validationMessages[key];

                errorMessages = [];
                for (const errorKey in abstractControl.errors) {
                    if (errorKey) {
                        const errorValue = messages[errorKey];
                        const errorObject = {
                            key: errorKey,
                            value: errorValue,
                            status: true
                        };
                        errorMessages.push(errorObject);

                        formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl.errors === null) {
                errorMessages = [];
            }
            if (abstractControl instanceof FormGroup) {
                this.logValidationErrors(abstractControl);
            }
        }, this);
    }
}

