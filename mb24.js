//
// Mb24.fi Javascript koodi. 
// Author: Atte Oksanen / Mixerboy24
// Website: mixerboy24.fi 
// 

// LocalghostFI Seurantakoodi

  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://analytiikka.localghost.fi/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '8']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
  console.log('DEBUG: Analytiikka: OK')

// Discord kutsukoodi

var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

getJSON('https://discord.com/api/guilds/513349939829669901/widget.json',
function(err, data) {
  if (err !== null) {
    console.log('Something went wrong: ' + err);
  }
  var text = `<a class="linkit linkit1" href="${data.instant_invite}">Miksaaja City</a>`

            document.getElementById("discord").innerHTML = text;
 console.log('DEBUG: Discord Invite: ' + data.instant_invite)
});

