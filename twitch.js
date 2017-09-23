var serverURL = 'https://api.twitch.tv/kraken/channels/';
var channel = 'ESL_SC2';
var data;
var result = $('#result');

$.ajax({
  type: 'GET',
  url: serverURL + channel,
  headers : {
    'Client-ID' : 'tyv0uzhai9bnyotbw4wzadsnoljn2h'
  },
  success: function(data) {
    createChannelCard(channel, data.display_name, data.status, data.logo, data.url);
  }
});

function createChannelCard(channel, name, status, logo, url) {
  var html;
  html += ' <div class="row">';
  html += '   <div class="col s12">';
  html += '     <a href="#" target="_blank">';
  html += '       <div class="card teal">';
  html += '         <div class="card-content white-text">';
  html += '           <span class="card-title">' + name + '</span>';
  html += '           <p>' + '</p>';
  html += '         </div>';
  html += '       <div/>';
  html += '     </a>';
  html += '   <div/>';
  html += ' </div>';
  result.html(html);
}
