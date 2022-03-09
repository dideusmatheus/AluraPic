import { AbstractControl } from "@angular/forms";

export function  lowerCaseValidator(control: AbstractControl){ // todo validador recebe um AbstractControl, control é sinonimo de interação com o usuario

    //56A- sem erro de validação retorna null, se ouver errro de validação retorna true, feito isso vai para singup.service
    // trim no caso seria o input esta diferente de branco
    if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)){
        return {lowerCase: true};
    }
    return null;
}