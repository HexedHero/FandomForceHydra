(function ()
{

    chrome.webNavigation.onBeforeNavigate.addListener(

        function (info)
        {

            const url = new URL(info.url);

            // Check if fandom
            if (!url.hostname.includes("fandom.com"))
            {

                return;

            }

            var usingQuery = false;

            // Check if we are already using the Hydra theme
            if (url.search.includes("useskin=hydra"))
            {

                return;

            }

            // Check if we already have ? in the url
            if (url.search.includes("?"))
            {

                usingQuery = true;

            }

            // Make new URL
            const redirectUrl = url + (usingQuery ? "&" : "?") + "useskin=hydra";

            // Redirect
            chrome.tabs.update(info.tabId,
            {

                url: redirectUrl

            });

        }

    );

})();
