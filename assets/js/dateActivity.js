$(document).ready(function () {
    const PAT = "YOUR_PAT"; 
    const githubUsername = "ramanprasaddev"; 

    function dateActivity() {
        

        fetchGitHubActivity();
    }

    function fetchGitHubActivity() {
        const apiUrl = `https://api.github.com/users/${ramanprasaddev}/events?access_token=${PAT}`;

        $.ajax({
            url: apiUrl,
            dataType: "json",
            success: function (data) {
                
                const activitySummary = generateActivitySummary(data);
                $("#dateActivity").html(activitySummary);
            }
        });
    }

    function generateActivitySummary(data) {
       
        return activitySummary; 
    }


});
