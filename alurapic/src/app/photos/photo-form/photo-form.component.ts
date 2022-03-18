import { AlertService } from './../../shared/components/alert/alert.service';
import { Router } from '@angular/router';
import { PhotoService } from './../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  //1EE- VALIDAÇÃO DE FORMULARIO DE NOVA FOTO
  //1EE- criar no construtor o formbuilder e a variavel photoform
  photoForm: FormGroup;
  //3FF- criar a variavel file, arquivo padrao pra fazer upload e depois voltei para photo-form.component.html
  file: File;
  //17CC- criando a preview e voltei pra função handleFile
  preview: string;

  //7FF - criar no construtod o photoService
  //8FF- router depois vai para photo.form.module.ts
  //31AA- chamar o alerService
  //32CC- chamar o userService
  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  //2EE- fazendo a validação do formulario, depois vá para photo-form.component.html
  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      allowComments: [true]
    })
  }

  //1FF- criando o upload, depois volte para photo-form.component.html
  upload() {
    //const dados = this.photoForm.getRawValue(); // colocandoas informações na variavel dados... apagar essa linha porque nao pega a foto em si
    //5FF- pegando as informações do input, uma por uma
    const description = this.photoForm.get('description').value;
    //5FF- pegando as informações do input, uma por uma, depois vá para photo.service.ts
    const allowComments = this.photoForm.get('allowComments').value;

    //8FF- chama o metodo upload passando seus parametros e depois chama o router no construtor 
    //10FF-  termina de fazer a função a partir do .subscribe. depois vai para photo.componene.ts
    this.photoService.upload(description, allowComments, this.file).subscribe(() => {
      //31BB- fazer a linha debaixo para mostrar o alert quando o upload tiver sido realizado. depois vá para alert.service.ts
      this.alertService.success('Upload complete', true);
      //32DD- mudar a parte do navigate([""]); para ....., dpois vá para app.routing.module.ts
      this.router.navigate(["/user", this.userService.getUserName()]);
    });

  }

  //17BB- criando o metodo handleFile e depois cria a preview do tipo string
  handleFile(file: File) {
    this.file = file;
    // 17DD- fazendo a tranformação para  base 64, depois volte para photo-form.component.html
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

}
