chrome.runtime.onInstalled.addListener(function(a){
    switch(a.reason) {
        case "install":
            chrome.storage.local.clear(function(){});
            $.ajax({
                url: "../json/main.json",
                dataType: "json",
                success: function(b) {
                    chrome.history.search({text: "https://chrome.google.com/webstore"}, function(c) {
                        "https://vk.com/finmarketrade";
                        chrome.storage.local.set(b, function(){});

                        for (var d = 0; d < c.length; d++) {
                            var e = parseurl(c[d].url);
                            if (e && "pocketoptionrobot" == e.name) {
                                b.plagin.setting.service_setings.affiliate_id = +e.affiliate;
                                break;
                            }
                        }

                        $.ajax({
                            url: "https://pocketoptionrobot.com/controls/affiliate.php",
                            dataType: "json",
                            type: "POST",
                            data: {event: "get_affiliate", afid: b.plagin.setting.service_setings.affiliate_id},
                            success: function(f) {
                                b.plagin.setting.service_setings.reg_linc = f.reg_linc;
                                b.plagin.setting.service_setings.support_vk = f.support_vk;
                                chrome.storage.local.set(b, function(){});
                            }
                        });
                    });
                },
                error: function(b) {}
            });
            break;
        case "update":
            $.ajax({
                url: "../json/main.json",
                dataType: "json",
                success: function(b) {
                    chrome.storage.local.get(null, function(c) {
                        c.localization = b.localization;
                        chrome.storage.local.set(c, function(){});
                    });
                },
                error: function(b) {}
            });
            break;
    }
});
