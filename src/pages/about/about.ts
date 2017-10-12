import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
/*import { VideoPlayer ,VideoOptions } from '@ionic-native/video-player';*/
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions,CaptureVideoOptions } from '@ionic-native/media-capture';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  videoFileName:any;
  constructor(public navCtrl: NavController,private mediaCapture: MediaCapture,private streamingMedia: StreamingMedia/*,private videoPlayer : VideoPlayer*/) {

  }
  public playVideo(){

  let options: CaptureVideoOptions = { limit: 1, duration: 10  };
  this.videoFileName= this.mediaCapture.captureVideo(options)
  .then(
      (data: MediaFile[]) => console.log(data),
      (err: CaptureError) => console.error(err)
    );
  console.log(this.videoFileName)

}
/*
  public playVideo(){
    this.videoOpts = {volume : 1.0};
    this.videoPlayer.play('https://www.google.com/url?hl=es&q=https://ia800201.us.archive.org/22/items/ksnn_compilation_master_the_internet/ksnn_compilation_master_the_internet_512kb.mp4&source=gmail&ust=1507664995468000&usg=AFQjCNFXEt7l-0lSwGDzNoGUE_vS2OqbFw').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });
}*/
public stopPlayingVideo(){
  let options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming') },
    orientation: 'landscape'
  };

  this.streamingMedia.playVideo('https://ia800201.us.archive.org/22/items/ksnn_compilation_master_the_internet/ksnn_compilation_master_the_internet_512kb.mp4', options);


}
}
