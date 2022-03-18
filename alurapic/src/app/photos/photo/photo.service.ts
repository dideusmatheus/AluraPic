import { map, catchError } from 'rxjs/operators';
import { PhotoComment } from './photo-comment';
import { Photo } from './photo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`${API}/${userName}/photos`)
    //return this.http.get<Photo[]>(API + '/' + userName + '/photos');
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(API + '/' + userName + '/photos', { params: params });
  }

  //6FF- fazendo o metodo upload, depois volte para photo-form.component.ts
  upload(description: string, allowComments: OnBeforeUnloadEventHandler, file: File) {

    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(`${API}/photos/upload`, formData,
    //2AAA- MOSTRANDO A BARRA DE UPLOAD DA IMAGEM
    //2AAA- passa mais um parametro, dpeois vá para photo-form.component.ts
      {
        observe: 'events',
        reportProgress: true
      });
  }

  //21AA- criando metodo para achar o id, voltei para photo.details.componenet.ts
  findById(photoId: number) {
    return this.http.get<Photo>(`${API}/photos/${photoId}`);
  }

  //22BB- criando o metodo get, depois volte para photo-details.component.ts
  getComments(photoId: number) {
    return this.http.get<PhotoComment[]>(`${API}/photos/${photoId}/comments`);
  }

  //24AA- criando o metodo addComment, depois volte para photo-comments.component.ts
  addComment(photoId: number, commentText: string) {
    return this.http.post(`${API}/photos/${photoId}/comments`, { commentText: commentText });
  }

  //27BB- criando o metodo delete, depois volte para photos-details.component.ts
  removePhoto(photoId: number) {
    return this.http.delete(`${API}/photos/${photoId}`);
  }

  //34AA- criando o metodo like, para ter acesso ao codigo de status, ao cabeçalho temos que usar o observe: 'responde' , depois vá para photo-details.compoenent.ts
  like(photoId: number) {
    return this.http.post(`${API}/photos/${photoId}/like`, {}, { observe: 'response' })
      .pipe(map(res => true))
      .pipe(catchError(err => {
        return err.status == '304' ? of(false) : throwError(() => err);
      }));
  }

}


