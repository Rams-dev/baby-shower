import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'baby-shower';
  soundUrl = 'assets/audio.mpeg';
  bottonVol:boolean = true
  private executed: boolean = false;
  audio:any
  pararMusica:boolean = false

  constructor(){

  }


  ngOnInit(): void {
    this.audio = new Audio(this.soundUrl)

    setTimeout(() => {
      this.bottonVol = false
    }, 6500);

    
  }

  reproducir(){
    
    if(this.pararMusica){
      this.audio.pause()
    }else{
      this.audio.play()
    }

    this.pararMusica = !this.pararMusica

  }

}
