import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  title = '';
name =  'Ayman';
artists = ['Barot Bellingham', 'Jonathan Ferrar', 'Hillary Post'];

onClick(myName, myElement) {
  this.name=myName;
  myElement.style.backgroundColor="#FECE4E";
}


addArtist(myArtist) {
  this.artists.push(myArtist);
}

}
