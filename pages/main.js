
// homepage navigation
function navigation(event_category, event_label) {
      var event_params = {
        'event_category': event_category,
        'event_label' : event_label,
        } 
      gtag('event', 'nav_click', event_params);
      console.log(event_params);
     //return false;
  }
//////////////////////////////////////////////////

// homepage social
function social_media(event_category, event_label) {
    var event_params = {
      'event_category': event_category,
      'event_label' : event_label,
      } 
    gtag('event', 'soc_click', event_params);
    console.log(event_params);
   //return false;
}

// contact form
function form(event_category, event_label) {
    var event_params = {
      'event_category': event_category,
      'event_label' : event_label,
      } 
    gtag('event', 'form_submmited', event_params);
    console.log(event_params);
   //return false;
}

// contact us
function contact_us(event_category, event_label) {
    var event_params = {
      'event_category': event_category,
      'event_label' : event_label,
      } 
    gtag('event', 'contact_us_clicked', event_params);
    console.log(event_params);
   //return false;
}
