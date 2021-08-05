/**
 * @file
 * Contains JS function
 */

(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.jsMarvel = {
    attach: function (context, settings) {
      const marvel = {
        render:()=> {
            //16e3989e2d7adb2554a496884568ff7c0c5e9d254c5a9d87454f1bd2831f3ea73d4e67088
            const urlAPI = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=c5a9d87454f1bd2831f3ea73d4e67088&hash=60dea1827b14cb8bc5b78848cd58e84a';
            const container = document.querySelector('#marvel-row');
            let contentHTML = '';
    
            fetch(urlAPI)
            .then(res => res.json())
            .then((json)=>{
                for(const hero of json.data.results){
                    let urlHero = hero.urls[0].url;
                    contentHTML += 
                    `
                      <div class="col-lg-6 text-align-center mb-4">
                          <div class="card" style="18rem;">
                            <img class="card-img-top" style="height: 358px; object-fit: cover;" src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.title}" class="img-thumbnail">
                            <div class="card-body">
                              <h6 class="card-title Title">${hero.title}</h6>
                              <a class="btn btn-primary" style="background: #137C6D; border: none;" href="${urlHero}" target="_blank">
                                More Information 
                              </a>
                            </div>
                          </div>
                      </div>
                    `;
                }
                container.innerHTML = contentHTML;
            })
        }
    };
    marvel.render();
    }
  };
})(jQuery, Drupal, drupalSettings);
