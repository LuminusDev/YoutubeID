function googleApiClientReady() {
    var apiKey = 'AIzaSyC7sa5DR9vLDKhnmPmxHZ-lJ60O5M8yeRA';
    var youtubeId;
    $('#input-youtube').keyup(function() {
        var username = $('input[name="channelname"]').val();
        gapi.client.setApiKey(apiKey);
        gapi.client.load('youtube', 'v3', function() {
            var request = gapi.client.youtube.channels.list({
                part: 'id',
                forUsername : username
            });
            request.execute(function(response) {
                if(response.pageInfo.totalResults != 0) {
                    youtubeId = response.result.items[0].id;
                    $('.id').text(youtubeId);
                } else {
                    $('.id').text(" ");
                }
            });
        }); 
    })
    .keyup();
}
