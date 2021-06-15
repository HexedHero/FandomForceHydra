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

            // Check if we are already using the Hydra theme
            if (url.search.includes("useskin=hydra"))
            {

                return;

            }

            // Make new URL
            const redirectUrl = url + "?useskin=hydra";

            // Redirect
            chrome.tabs.update(info.tabId,
            {

                url: redirectUrl

            });

        }

    );

})();