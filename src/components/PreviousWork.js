import React from 'react'


export default function PreviousWork() {
    return (
        <div class="columns">
      <div class="column">
      <div class="card" id="my-work">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src= './public/assets/notetaker.png' alt="NoteTaker"/>
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
           This Note Taking site lets you take add and remove notes! This was primarily a back-end work assignment. 
            
            <a href="https://salty-beyond-67557.herokuapp.com/" target="_blank">Check out the deployment here!</a>
        
            <a href="https://github.com/jsoh11/NoteTaker.git" target="_blank">Check out the Repo page here!</a>
        
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card" id="my-work">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="./assets/password.png" alt="password"/>
          </figure>
        </div>
        <div class="card-content"> 
          <div class="content">
            This password generator lets you pick a customizable password based on your needs for the password! This was primarily a Javascript assignment.
    
            <a href="https://jsoh11.github.io/Jordan-Password/" target="_blank">Check out the deployment here!</a>
            
            <a href="https://github.com/jsoh11/Jordan-Password.git" target="_blank">Check out the Repo page here!</a>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card" id="my-work">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="./public/assets/vernaculearn.png" alt="vernaculearn"/>
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
             Vernac-U-Learn was a group project that 3 other students and I worked on. It uses 2 differnt API's; one that pulls a random word and one that gives the definition of that word. Give it try by pressing the Vernac-U-Learn button!
            
             <a href="https://zd092718.github.io/vernac-u-learn/" target="_blank">Check out the deployment here!</a>
             
             <a href="https://github.com/Zd092718/vernac-u-learn.git" target="_blank">Check out the Repo page here!</a>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}
