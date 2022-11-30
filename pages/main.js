
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
function soc(event_category, event_label) {
    var event_params = {
      'event_category': event_category,
      'event_label' : event_label,
      } 
    gtag('event', 'soc_click', event_params);
    console.log(event_params);
   //return false;
}
