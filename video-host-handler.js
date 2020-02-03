function chooseHost(host) {
    console.log(host);
    var thumbnail = document.getElementById('izsubs_thumbnail');
    var video = document.getElementById(host);
    var videoHosts = [
        { name: 'youtube' },
        { name: 'gdrive' },
        { name: 'dailymotion' },
        { name: 'mega' },
        { name: 'okru' },
        { name: 'openload' },
        { name: 'streamango' }
    ];

    for (let hostIndex = 0; hostIndex < videoHosts.length; hostIndex++) {
        const videoHost = videoHosts[hostIndex];

        if (videoHost.name !== host) {

            document.getElementById(videoHost.name).style.display = "none";

            document.getElementById(videoHost.name+'TableCell').classList.remove('selected-host');
            document.getElementById(videoHost.name+'TableCell').classList.add('not-selected-host');

        } else {
            document.getElementById(videoHost.name+'TableCell').classList.add('selected-host');
            document.getElementById(videoHost.name+'TableCell').classList.remove('not-selected-host');
        }


        video.style.display = "block";

    }
}
