import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails = [
    {
      id:1,
      foodName:"Street Photography",
      foodDetails:"Street Photos",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1667256059621-9583d2010b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:2,
      foodName:"Fashion Photography",
      foodDetails:"Fashion Photography",
      foodPrice:369,
      foodImg:"https://images.unsplash.com/photo-1670616440058-927ed245e905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:3,
      foodName:"Birthday Photography",
      foodDetails:"Birthday Photography",
      foodPrice:149,
      foodImg:"https://media.istockphoto.com/id/1303552906/photo/portrait-of-a-african-american-girl-celebrating-birthday-at-home.jpg?s=612x612&w=0&k=20&c=ddY728b4O7wAhVBp_BvgjOwQ40T81YbKmErMKkvo-YU="
    },
    {
      id:4,
      foodName:"Nature Photography",
      foodDetails:"Nature Photography",
      foodPrice:140,
      foodImg:"https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM="
    },
    {
      id:5,
      foodName:"Food Photography",
      foodDetails:"Food Photography",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Event Photography",
      foodDetails:"Event Photography",
      foodPrice:219,
      foodImg:"https://media.istockphoto.com/id/621711304/photo/shooting-a-wedding-with-a-vintage-camera.jpg?s=612x612&w=0&k=20&c=3QTNrLa-nWaIN-GOi3lzDsCCJTQHcRim45K_h8cBGDU="
    }
  ]




}
