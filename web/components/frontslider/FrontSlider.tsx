'use client';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



  
    const fadeImages = [
        {
          url: 'http://savagevaran.com/wp-content/uploads/2023/09/varan_slide_01.jpg',
          caption: ''
        },
        {
          url: 'http://savagevaran.com/wp-content/uploads/2023/09/varan_slide_02.jpg',
          caption: ''
        },
        {
          url: 'http://savagevaran.com/wp-content/uploads/2023/09/varan_slide_03.jpg',
          caption: ''
        },
       
      ];
      
      const FrontSlider = () => {


        return (
            <div className="slide-container ">
            <Fade>
              {fadeImages.map((fadeImage, index) => (
                <div key={index}>
                  <img style={{ width: '100%' }} src={fadeImage.url} alt="Slider"/>
                  <h2>{fadeImage.caption}</h2>
                </div>
              ))}
            </Fade>
          </div>
          )
        }   
        export default FrontSlider;
        