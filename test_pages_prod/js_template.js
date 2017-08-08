(function () {
    var D = new Date()
        , d = document
        , b = 'body'
        , ce = 'createElement'
        , ac = 'appendChild'
        , st = 'style'
        , ds = 'display'
        , n = 'none'
        , gi = 'getElementById';
    var i = d[ce]('iframe');
    i[st][ds] = n;
    d[gi]("M103889ScriptRootC141665")[ac](i);
    try {
        var iw = i.contentWindow.document;
        iw.open();
        iw.writeln("<ht" + "ml><bo" + "dy></bo" + "dy></ht" + "ml>");
        iw.close();
        var c = iw[b];
    }
    catch (e) {
        var iw = d;
        var c = d[gi]("M103889ScriptRootC141665");
    }
    var dv = iw[ce]('div');
    dv.id = "MG_ID";
    dv[st][ds] = n;
    dv.innerHTML = 141665;
    c[ac](dv);
    var s = iw[ce]('script');
    s.async = 'async';
    s.defer = 'defer';
    s.charset = 'utf-8';
    var loc = document.location;

    // For github use
    // var url = loc.protocol + "//" + loc.host + "/" + loc.pathname.split("/")[1];

    // for local Server use
    var url = loc.protocol + "//" + loc.host;

    s.src = url + "/dist/pas-test.com.141665.js?t=" + D.getYear() + D.getMonth() + D.getDate() + D.getHours();
    c[ac](s);
})();