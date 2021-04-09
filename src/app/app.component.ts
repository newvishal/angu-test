import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Agust', 'Sep', 'Oct','Nov', 'Dec','cum', 'bug', 'var'];
  dataSource = ELEMENT_DATA;
}

/* Static data */ 

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  Jan: string;
  Feb: string;
  March: string;
  April: string;
  May: string;
  June: string;
  July: string;
  Agust: string;
  Sep: string;
  Oct: string;
  Nov: string;
  Dec: string;
  cum:string;
  bug:string;
  var:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj',cum:'kjlk', bug:'gjhgjh',var:'jjhkjhj' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj', cum:'kjlk',bug:'gjhgjh',var:'jjhkjhj' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj', cum:'kjlk',bug:'gjhgjh',var:'jjhkjhj' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj', cum:'kjlk',bug:'gjhgjh',var:'jjhkjhj' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj',cum:'kjlk', bug:'gjhgjh',var:'jjhkjhj' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj',cum:'kjlk', bug:'gjhgjh',var:'jjhkjhj' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj',cum:'kjlk', bug:'gjhgjh',var:'jjhkjhj' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj',cum:'kjlk', bug:'gjhgjh',var:'jjhkjhj' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj',cum:'kjlk', bug:'gjhgjh',var:'jjhkjhj' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj',cum:'kjlk', bug:'gjhgjh',var:'jjhkjhj' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj',cum:'kjlk', bug:'gjhgjh',var:'jjhkjhj' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, Jan: 'H',Feb:'djdj',March:'djlkjd',April:'djfdkfjk',May:'dffg',June:'kfldkl',July:'jfkg',Agust:'kfjgkdgj',Sep:'jfkghj',Oct:'fgkfjgkfl',Nov:'jkjlkfjg',Dec:'kfjgklj',cum:'kjlk', bug:'gjhgjh',var:'jjhkjhj' },
];