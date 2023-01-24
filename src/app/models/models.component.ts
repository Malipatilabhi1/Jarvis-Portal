import { Component } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {

  Models:any=[{name:'OpenPose',content:'OpenPose represents the first real-time multi-person system to jointly detect human body,hand, and facial key points(in total 130 keypoints) on single images'},
              {name:'YOLO TensorFlow',content:'TensorFlow implementation of `YOLO: Real-Time Object Detection`,with training and an actual support for real-time running on mobile devices.'},
              {name:'pix2pixHD',content:'Synthesizing and manipulating 2048*1024 images with conditional GANs tcwang0509.github.io/pix2pixHD'},
              {name:'OpenPose',content:'OpenPose represents the first real-time multi-person system to jointly detect human body,hand, and facial key points(in total 130 keypoints) on single images'},
              {name:'YOLO TensorFlow ++',content:'TensorFlow implementation of `YOLO: Real-Time Object Detection`,with training and an actual support for real-time running on mobile devices.'},
              {name:'pix2pixHD',content:'Synthesizing and manipulating 2048*1024 images with conditional GANs tcwang0509.github.io/pix2pixHD'},
              {name:'OpenPose',content:'OpenPose represents the first real-time multi-person system to jointly detect human body,hand, and facial key points(in total 130 keypoints) on single images'},
              {name:'YOLO TensorFlow ++',content:'TensorFlow implementation of `YOLO: Real-Time Object Detection`,with training and an actual support for real-time running on mobile devices.'},
              {name:'pix2pixHD',content:'Synthesizing and manipulating 2048*1024 images with conditional GANs tcwang0509.github.io/pix2pixHD'}]


  senddata(data:any){
    
  }
}
