import { AlertService } from './alert.service';
import { Component, Input, OnInit } from '@angular/core';
import { Alert, AlertType } from './alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  //29HH- variavel recebendo a quantidade em segundos para ser viualizada quando for chamada
  @Input() timeout = 3000;
  //29JJ- criando um awway pra guardar o alert que o serviço vai fazendo
  alerts: Alert[] = [];

  //29II- chamar o alertService e fazer a chamada abaixo
  constructor(private alertService: AlertService) {

    this.alertService.getAlert().subscribe(alert => {
      if (!alert) {
        //caso nao tenha nada emitido, recebe um array vazio
        this.alerts = [];
        return;
      } else
        this.alerts.push(alert);
      setTimeout(() => this.removeAlert(alert), this.timeout);
    })

  }

  //29KK- criando o metodo removeAlert, depois vamos criar o template do alert em alert.component.html
  removeAlert(alertToremove: Alert) {
    this.alerts = this.alerts.filter(alert => alert != alertToremove);
  }

  ngOnInit() {
  }

  //29MM- metodo get, depois chama o alert no header.componenet.html
  getAlertClass(alert: Alert) {

    if (!alert) return '';

    switch (alert.alertType) {

      case AlertType.DANGER:
        return 'alert alert-danger'
      case AlertType.INFO:
        return 'alert alert-info'
      case AlertType.SUCCESS:
        return 'alert alert-success'
      case AlertType.WARNING:
        return 'alert alert-warning'

    }
  }

}
