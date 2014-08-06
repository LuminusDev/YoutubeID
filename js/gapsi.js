function googleApiClientReady() {
    var apiKey = 'AIzaSyC7TEDKyP3dt3-TfyT4DtAu_835R6_Pdd8';
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
