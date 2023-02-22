import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit{
  ngOnInit(): void {
    
  }

  Searchvalue:string='';
  Searchdata:string='name';

  Models:any=[{name:'OpenPose',content:'OpenPose represents the first real-time multi-person system to jointly detect human body,hand, and facial key points(in total 130 keypoints) on single images'},
              {name:'YOLO TensorFlow',content:'TensorFlow implementation of `YOLO: Real-Time Object Detection`,with training and an actual support for real-time running on mobile devices.'},
              {name:'pix2pixHD',content:'Synthesizing and manipulating 2048*1024 images with conditional GANs tcwang0509.github.io/pix2pixHD'},
              {name:'OpenPose',content:'OpenPose represents the first real-time multi-person system to jointly detect human body,hand, and facial key points(in total 130 keypoints) on single images'},
              {name:'YOLO TensorFlow ++',content:'TensorFlow implementation of `YOLO: Real-Time Object Detection`,with training and an actual support for real-time running on mobile devices.'},
              {name:'pix2pixHD',content:'Synthesizing and manipulating 2048*1024 images with conditional GANs tcwang0509.github.io/pix2pixHD'},
              {name:'OpenPose',content:'OpenPose represents the first real-time multi-person system to jointly detect human body,hand, and facial key points(in total 130 keypoints) on single images'},
              {name:'YOLO TensorFlow ++',content:'TensorFlow implementation of `YOLO: Real-Time Object Detection`,with training and an actual support for real-time running on mobile devices.'},
              {name:'pix2pixHD',content:'Synthesizing and manipulating 2048*1024 images with conditional GANs tcwang0509.github.io/pix2pixHD'}]
 
  Framework:any=[{name:'Other'},{name:'TensorFlow'},{name:'Caffe'},{name:'Caffe2'},{name:'PyTorch'},{name:'MXNet'},{name:'Kesar'},{name:'Chainer'},{name:'JAX'}]
Frameworks:any=['Other','Caffe','Caffe2','PyTorch','MXNet','Kesar']
  Categories:any=[{name:'Computer Vision'},{name:'Natural Language Processing'},{name:'Generative Models'},{name:'Reinforcement Learning'},{name:'Unsupervised Learning'},{name:'Audio and Speech'},{name:'Graph'},{name:'Self-Supervised Learning'},{name:'Health and Bioscience'}]

  senddata(data:any){
    this.Searchvalue=data;
  }

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Modules :',
    useBom: true,
    noDownload: false,
    headers: ["name","content"]
  };



  downloadCSV(data:any){  
    debugger
    // new  AngularCsv(data, "Models",this.csvOptions);
  }
}
