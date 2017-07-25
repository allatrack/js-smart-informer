/*marketgid.comV3*/
if (!this.MarketGidJSON) {
    MarketGidJSON = function () {
        function f(n) {return n < 10 ? '0' + n : n;}

        Date.prototype.toJSON = function () {return this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z';};
        var m = {'\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\'};

        function stringify(value, whitelist) {
            var a, i, k, l, r = /["\\\x00-\x1f\x7f-\x9f]/g, v;
            switch (typeof value) {
                case'string':
                    return r.test(value) ? '"' + value.replace(r, function (a) {
                        var c = m[a];
                        if (c) {
                            return c;
                        }
                        c = a.charCodeAt();
                        return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
                    }) + '"' : '"' + value + '"';
                case'number':
                    return isFinite(value) ? String(value) : 'null';
                case'boolean':
                case'null':
                    return String(value);
                case'object':
                    if (!value) {
                        return 'null';
                    }
                    if (typeof value.toJSON === 'function') {
                        return stringify(value.toJSON());
                    }
                    a = [];
                    if (typeof value.length === 'number' && !(value.propertyIsEnumerable('length'))) {
                        l = value.length;
                        for (i = 0; i < l; i += 1) {
                            a.push(stringify(value[i], whitelist) || 'null');
                        }
                        return '[' + a.join(',') + ']';
                    }
                    if (whitelist) {
                        l = whitelist.length;
                        for (i = 0; i < l; i += 1) {
                            k = whitelist[i];
                            if (typeof k === 'string') {
                                v = stringify(value[k], whitelist);
                                if (v) {
                                    a.push(stringify(k) + ':' + v);
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (typeof k === 'string') {
                                v = stringify(value[k], whitelist);
                                if (v) {
                                    a.push(stringify(k) + ':' + v);
                                }
                            }
                        }
                    }
                    return '{' + a.join(',') + '}';
            }
        }

        return {
            stringify: stringify, parse: function (text, filter) {
                var j;

                function walk(k, v) {
                    var i, n;
                    if (v && typeof v === 'object') {
                        for (i in v) {
                            if (Object.prototype.hasOwnProperty.apply(v, [i])) {
                                n = walk(i, v[i]);
                                if (n !== undefined) {
                                    v[i] = n;
                                }
                            }
                        }
                    }
                    return filter(k, v);
                }

                if (/^[\],:{}\s]*$/.test(text.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                    j = eval('(' + text + ')');
                    return typeof filter === 'function' ? walk('', j) : j;
                }
                throw new SyntaxError('parseJSON');
            }
        };
    }();
}
MarketGidBaseBlockC141665 = function (root_id, DR, fallback, containerId) {
    var self = this;
    this.DR = DR;
    this.root = this.DR.document.getElementById(root_id);
    this.containerId = containerId;
    this.FS = fallback;
    this.page = 1;
    this.iteration = 1;
    this.adlink = '';
    this.template = '';
    this.id = 141665;
    this.tickerShow = 0;
    this.ND = [];
    this.AG = {};
    this.RE = {};
    this.PP = [];
    this.TK = [];
    this.HW = [];
    this.TP = "";
    this.AK = "";
    this.BG = 0;
    this.VV = {};
    this.PK = "";
    this.ZL = "";
    this.crashStep = 0;
    this.loadedDefault = false;
    this.teaserHashes = {};
    this.ML = {};
    this.json = [];
    this.servicerData = {};
    this.fakeMode = 0;
    this.requestParams = {};
    this.GY = "mgid.com";
    self.templateText = '<div class="mgbox"> <!--advertPrefix--> {foreach} {if this.iteration != 1}</div>{/if}<div class="mgline"> <div class="image-with-text"> <div class="mcimg"> <a {$target} {$href} ><div class="image-container"><img class="mcimg" {$src}></div></a> </div> <div class="text-elements"> <div class="text_on_hover"> <div class="mctitle"><a {$target} {$href}>{$title}</a></div> <div class="mcdomain"><a {$target} {$href}>{$source}</a></div> </div></div> </div> {/foreach} </div></div>';
    self.styles = ' @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 400; src: local(\'Open Sans\'), local(\'OpenSans\'), url(//fonts.gstatic.com/s/opensans/v10/K88pR3goAWT7BTt32Z01m1tXRa8TVwTICgirnJhmVJw.woff2) format(\'woff2\'); unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 400; src: local(\'Open Sans\'), local(\'OpenSans\'), url(//fonts.gstatic.com/s/opensans/v10/RjgO7rYTmqiVp7vzi-Q5UVtXRa8TVwTICgirnJhmVJw.woff2) format(\'woff2\'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 400; src: local(\'Open Sans\'), local(\'OpenSans\'), url(//fonts.gstatic.com/s/opensans/v10/u-WUoqrET9fUeobQW7jkRVtXRa8TVwTICgirnJhmVJw.woff2) format(\'woff2\'); unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 400; src: local(\'Open Sans\'), local(\'OpenSans\'), url(//fonts.gstatic.com/s/opensans/v10/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2) format(\'woff2\'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 700; src: local(\'Open Sans Bold\'), local(\'OpenSans-Bold\'), url(//fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzCUUniRZcd_wq8DYmIfsw2A.woff2) format(\'woff2\'); unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 700; src: local(\'Open Sans Bold\'), local(\'OpenSans-Bold\'), url(//fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzOXREeHhJi4GEUJI9ob_ak4.woff2) format(\'woff2\'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 700; src: local(\'Open Sans Bold\'), local(\'OpenSans-Bold\'), url(//fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzBUOjZSKWg4xBWp_C_qQx0o.woff2) format(\'woff2\'); unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; } @font-face { font-family: \'Open Sans\'; font-style: normal; font-weight: 700; src: local(\'Open Sans Bold\'), local(\'OpenSans-Bold\'), url(//fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzOgdm0LZdjqr5-oayXSOefg.woff2) format(\'woff2\'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; } .mgresponsive { display: inherit; } .mgbox { padding: 0 !important; position: relative !important; text-align: center; vertical-align: top !important; margin: 0 auto; border-style: solid; border-width: 1px; border-color: #c0c3c4; background-color: ; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; line-height: 100% !important; transition: none !important; } .mgbox { width: 100%; max-width: 100%; min-width: 280px !important; border:0px !important; } .mgheader { max-width: 100% !important; border:none; margin: auto; } .mgheader div{ opacity:0 !important; } div.mcimg { padding: 0px; text-align: center; } div.mcimg { float: left; margin-right: 10px; max-width: 170px; } img.mcimg { border-style: solid; border-color: #ffffff; border-width: 0px; width: 100% !important; height: auto !important; max-width: 160px; max-height: 90px; box-sizing: border-box; } .mctitle { text-align: left; } .mctitle a { font-weight: 500; font-size: 18.2px; font-style: normal; text-decoration: none; color: #000; font-family: museo_sans500,serif; } .mcdesc { display: none; text-align: center; } .mcdesc a { font-weight: normal; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #666666; font-family: \'Open Sans\', sans-serif; } .mcdomain { display: block; text-align: left; } .mcdomain a { font-weight: 300; font-size: 14.4px; line-height: 20px; font-style: normal; text-decoration: none; color: #666; font-family: museo_sans500,serif; display: block; overflow: hidden; } .mgline { background: none repeat scroll 0 0; background-color: ; cursor: pointer; display: inline-block; _overflow: hidden; *zoom: 1; *display: inline; padding: 10px !important; border-style: none none solid none; border-color: #c0c3c4; border-width: 1px; width: 49%; max-width: 49%; box-sizing: border-box; margin: 1px 0.5%; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; word-wrap: break-word; } .mgline:last-child { border: none !important; } .mgline { vertical-align: top; } img.mcimg { display: block; } .mgline[max-width~="120px"] .mcdesc { display: none !important; } @supports not (flex-wrap: wrap) { .mgbox { display: block !important; } .mgline { display: inline-block !important; } } .text-elements a { text-decoration: none; } div.mcprice { text-align: center; } div.mcprice span { font-weight: bold; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #ffffff; font-family: \'Open Sans\', sans-serif; } div.mgbuybox, div.mgarrowbox { display: false; } div.mgbuybox, div.mgarrowbox, div.mcprice { display: none; } span.mcpriceold { text-decoration: line-through !important; } .mgpopular { background-color: rgba(255, 0, 0, 0.2) !important; border-color: rgba(255, 90, 0, 0.3) !important; } img.mcimg { opacity: 1 !important; } .mgline { position: relative; } .mgline .fake { visibility: hidden; position: relative; padding-top: 4px; } .mgline:hover .mctitle a { color: #000; text-decoration: none !important; } .mgline:hover .mcpriceold + .mcprice, .mgline:hover .mcpriceold { visibility: hidden; } .mgline:hover .mcdiscount { display: block; position: absolute; left: 0px; right: 0px; top: 5px; } .mgarrowbox { position: relative; background: #3f3f3f; width: 55%; height: 22px; margin: 0px; border-color: transparent; border-left-color: #3f3f3f; display: inline-block; font-family: \'Open Sans\', sans-serif; } .mgarrowbox:after { left: 100%; top: 50%; content: " "; height: 0px; width: 0px; position: absolute; pointer-events: none; margin-top: -11px; border: solid 11px; border-color: inherit; } .mgbuybox { width: 40%; display: inline-block; text-align: right; font-weight: bold; font-family: \'Open Sans\', sans-serif; font-size: 12px; color: #666666; text-decoration: underline; } .mctitle { margin-top: 2px; line-height: 1 !important; } .mctitle a { line-height: 110% !important; } .mcdesc { margin-top: 0; margin-bottom: 2px; } .mcdesc a { line-height: 1.5 !important; } div.mcprice { margin-top: 5px; line-height: 12 px !important; } div.mgbuybox, div.mgarrowbox { display: none; } .mgtobottom { position: absolute; bottom: 0px; width: 100%; text-align: left; } .mgline .mgtobottom, .mgline .fake { display: none; } .mghead { font-size: 15px !important; font-style: italic; padding-top: 5px !important; font-weight: 300 !important; line-height: 15px; text-decoration: none; color: #a8a8a8 !important; font-family: museo_sans500,serif; text-transform: uppercase; } .mcpriceold { float: left; padding-left: 5px; } .mcdiscount { display: none; } .mcdomain { display: block; overflow: hidden; } .mcdomain a { padding: 0px; display: block; padding-top: 5px; padding-bottom: 2px; overflow: hidden; } div.mcprice, div.mcriceold { font-weight: bold; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #ffffff; font-family: \'Open Sans\', sans-serif; } div.mcpriceold { text-decoration: line-through !important; } .mgline[max-width~="120px"] .mgarrowbox, .mgline[max-width~="120px"] .mgbuybox { display: none !important; } .image-with-text { min-height: 1px; } .mgline:nth-child(5) { border: none !important; } .mgline:nth-child(6) { border: none !important; } @media (max-width: 480px) { .mgline { width: 99% !important; margin: 0.5% !important; max-width: 99% !important; } div.mcimg { max-width: 120px !important; } .mgbox { border: 0px !important; } .mgline:nth-child(6) { display: none !important; } .mctitle a { font-size: 15.2px !important; color: #000 !important; } .mcdomain { padding: 0px !important; margin-left: 130px !important; } .mcdomain a { font-size: 12.4px !important; line-height: 13px !important; } .mghead { font-size: 18px !important; padding-top: 4px !important; font-style: italic; } }';
    self.webProtocol = "http:";
    self.clickTracking = "";
    self.SP = '';
    self.funcBlocks = {};
    self.ML = {};
    self.loadedPopularTeaser = false;
    self.deviceType = "desktop";
    self.hrefAttr = "href";
    self.TJ = ["wages"];
    this.TG = function (str, limit) {
        if (str.length <= limit) return str;
        var word = new Array();
        word = str.split(" ");
        var ret = word[0] + ' ';
        var test;
        for (i = 1; i < word.length; i++) {
            test = ret + word[i];
            if (test.length > limit) return ret + '...'; else ret += word[i] + ' ';
        }
        return str;
    };
    this.UE = function (str, limit) {
        var word = new Array();
        var i;
        var ret = '';
        word = str.split(" ");
        for (i = 0; i < word.length; i++) {
            if (word[i].length > limit && word[i].search(/&\w+;/) < 0) ret += word[i].substr(0, limit) + ' ' + word[i].substr(limit) + ' '; else ret += word[i] + ' ';
        }
        return ret;
    };
    this.QF = function (title) {
        title = this.TG(title, 90);
        return title;
    };
    this.LG = function (desc) {
        desc = this.TG(desc, 75);
        return desc;
    };
    this.isArray = function (o) { return Object.prototype.toString.call(o) === '[object Array]'; };
    self.fixGetElementsByClassNameHandler = function (el) {
        if (el.getElementsByClassName == undefined) {
            el.getElementsByClassName = function (cl) {
                var retnode = [];
                var myclass = new RegExp('\\b' + cl + '\\b');
                var elem = this.getElementsByTagName('*');
                for (var i = 0; i < elem.length; i++) {
                    var classes = elem[i].className;
                    if (myclass.test(classes)) retnode.push(elem[i]);
                }
                return retnode;
            };
        }
    };
    this.DW = function () {
        if (!self.FS) {
            if (self.DR.document.getElementById("MarketGidPreloadC" + this.containerId)) {
                this.DR.document.getElementById("MarketGidPreloadC" + this.containerId).style.display = 'none';
            } else if (self.DR.document.getElementById("M103889PreloadC" + this.containerId)) {
                self.DR.document.getElementById("M103889PreloadC" + this.containerId).style.display = 'none';
            }
        } else if (self.FS && this.BG == 0) {
            self.root.innerHTML = "";
        }
    };
    this.MarketGidLoadNews = function (json, servicerData) {
        this.DW();
        if (typeof servicerData != 'undefined') {
            self.servicerData = servicerData;
            if (typeof servicerData.dt != 'undefined') {
                self.deviceType = servicerData.dt;
            }
        }
        if (self.fakeMode == 0) {
            for (var i = 0; i < self.PP.length; i++) {
                self[self.PP[i]]();
            }
        }
        if (this.isArray(json)) {
            if (json.length == 0) {
                return;
            }
            var template = self["templateFunc"](self, json);
            self.json = json;
            if (this.root && template) {
                if (typeof self.parseAdvertLink == 'function') {
                    template = self.parseAdvertLink(template);
                }
                if (this.FS && this.BG == 0) {
                    this.root.innerHTML = ""
                }
                this.root.innerHTML += this.PK + template + this.ZL;
            }
        } else {
            if (this.root && this.BG == 0) {
                this.root.innerHTML = '';
                return;
            }
        }
        this.AG["page"] = this.page;
        this.AG['time'] = (new Date()).getTime();
        this.setCookie();
        var hrefs = this.root.getElementsByTagName("a");
        for (var i = 0; i < hrefs.length; i++) {
            hrefs[i].rel = "nofollow";
        }
        this.TS(self.styles);
        this.BG++;
        if (self.fakeMode == 0) {
            for (var i = 0; i < self.TK.length; i++) {
                self[self.TK[i]]();
            }
        } else {
            if (typeof(self.responsiveInit) == "function") {
                self.responsiveInit();
            }
        }
    };
    this.XB = function () {
        var d = this.DR.document, w = this.DR, dE = 'documentElement', cH = 'clientHeight', cW = 'clientWidth', iH = 'innerHeight', iW = 'innerWidth', sH = 'scrollHeight', sW = 'scrollWidth', oH = 'offsetHeight', oW = 'offsetWidth', oL = 'offsetLeft', oT = 'offsetTop', sT = 'scrollTop', sL = 'scrollLeft';
        if (w[iW]) {
            return {"c": w[iH], "s": w.pageYOffset};
        } else if (d[dE] && d[dE][cW]) {
            return {"c": d[dE][cH], "s": d[dE][sT]};
        } else if (d.body[cW]) {
            return {"c": d.body[cH], "s": d.body[sT]};
        }
        return 0;
    };
    this.crashWorker = function () {
        if (MarketGidInfC141665.template == '' && !MarketGidInfC141665.loadedDefault) {
            MarketGidInfC141665.crashStep = 1;
            MarketGidInfC141665.MarketGidRedirectComposite([]);
        }
    };
    this.renderItem = function (n, callbackText, type) {
        if (self.isArray(n)) {
            var p = self.MK(n, type);
            if (!(p.id in self.VV) && p.id != '') {
                if (typeof p.hash !== 'undefined' && typeof p.id !== 'undefined') {
                    self.teaserHashes[p.id] = p.hash;
                }
                self.VV[p.id] = 1;
                var addClasses = [];
                if (!self.loadedPopularTeaser && typeof(p.other.adc) != 'undefined' && ( p.other.adc.toString().indexOf('mrsadca') >= 0 || p.other.adc.toString().indexOf('mrsadcp') >= 0 )) {
                    addClasses.push('mgpopular');
                    self.loadedPopularTeaser = true;
                }
                addClasses.push('teaser-' + p.id);
                if ('l' in p.other && null != p.other.l.match(/[\?|&]u=/)) {
                    addClasses.push('dsp');
                }
                if ('type' in p.other) {
                    addClasses.push('type-' + p.other.type);
                }
                var vars = [[/\{\*.*?\*\}/, ''], [/\{\$href\}/g, self.hrefAttr + '="' + self.PB(p.hash) + '" data-hash="' + p.hash + '"'], [/\{\$pmc_item\}/, self.id], [/\{\$target\}/g, (typeof p.other.type !== 'undefined' && p.other.type == 'i') ? 'target="_self"' : 'target="_blank"'], [/(class\=\"[^+]?)(mgline)([^+]?\")/, '$1$2 ' + addClasses.join(' ') + '$3'], [/\{\$source\}/g, p.source], [/\{\$src\}/g, 'width="370" height="200"' + ' data-i="' + p.id + '" src="' + p.other["i"] + '"'], [/\{\$title\}/g, self.QF(p.title)], [/\{\$desc\}/g, self.LG(p.desc)], [/\{\$iteration\}/g, self.iteration], [/\$iteration/g, self.iteration], [/this\.iteration/g, self.iteration], [/\{\$price\}/g, p.price], [/\{\$priceold\}/g, p.priceold], [/\{\$discount\}/g, p.discount], [/\{if \$price\}/g, "{if '' != p.price.replace(new RegExp('[^0-9.]'), '')}"], [/\{if !\$price\}/g, "{if '' == p.price.replace(new RegExp('[^0-9.]'), '')}"], [/\{if \$priceold\}/g, "{if '' != p.priceold.replace(new RegExp('[^0-9.]'), '')}"], [/\{if \$price != " "\}/g, "{if p.price != ' '}"], [/\{if \$price == " "\}/g, "{if p.price == ' '}"], [/\$priceold/g, p.priceold], [/\$price/g, p.price], [/\{if \$rep\}/g, "{if p.isReplic}"]];
                for (var i = 0; i < vars.length; i++) {
                    callbackText = callbackText.replace(vars[i][0], vars[i][1]);
                }
                while (true) {
                    var x = callbackText;
                    var r = /\{if ([^\}]*?)\}(((?!\{(?:\/)?if).)*)\{\/if\}/g;
                    callbackText = callbackText.replace(r, function (str, p1, p2) {
                        if (eval(p1)) {
                            return p2;
                        } else {
                            return "";
                        }
                    });
                    if (x == callbackText) break;
                }
                this.iteration++;
                return callbackText;
            } else {
                self.VV[p.id]++;
                return "";
            }
        }
    };
    this.generateTemplate = function (templateText) {
        self["templateText"] = templateText;
        self["templateFunc"] = function (inf, json) {
            var parts = /(.*)?\{foreach\}(.*)?\{\/foreach\}(.*)?/.exec(self["templateText"]);
            if (!parts) {
                return;
            }
            var template = typeof(parts[1]) != 'undefined' ? parts[1] : '';
            for (var i = 0; i < json.length; i++) {
                template += inf.renderItem(json[i], parts[2], 'goods');
            }
            template += typeof(parts[3]) != 'undefined' ? parts[3] : '';
            return template;
        };
        return true;
    };
    this.init = function () {
        if (this.root) {
            this.getCookie();
            var cookiePage = parseInt(this.AG["page"]);
            this.ND = this.root.getElementsByTagName('a');
            var pageOffset = (this.DR['MarketGidPageOffset'] ? parseInt(this.DR['MarketGidPageOffset']) : 0);
            self.addEvent(self.root, 'click', self.hangNiceLinkListener);
            self.addEvent(self.root, "\x63\x6f\x6e\x74\x65\x78\x74menu", self.hangNiceLinkListener);
            self.addEvent(self.root, 'mouseup', self.hangNiceLinkListener);
            self.addEvent(self.root, 'touchstart', self.hangNiceLinkListener);
            var tmpType = this.AG["mg_type"] ? this.AG["mg_type"] : this.HK;
            var pagesCountNews = parseInt('');
            var pagesCountGoods = parseInt('20');
            var pagesCount = (tmpType == 'news') ? pagesCountNews : pagesCountGoods;
            if (cookiePage != null && cookiePage < pagesCount && cookiePage > 0) {
                this.page = cookiePage + 1;
            } else if (cookiePage > (pagesCount - 1) || cookiePage < 1) {
                this.page = 1 + pageOffset;
            }
            if ((new Date()).getTime() - (this.AG['time'] != undefined ? this.AG['time'] : 0) >= 6e5) {
                this.page = 1 + pageOffset;
            }
            if (!this.page) this.page = 1;
            this.pageUnlim = this.page - 1;
            this.AG["page"] = this.page;
            this.setCookie();
            if (!this.DR.document.cookie) {
                var dt = new Date();
                this.page = dt.getSeconds() % pagesCount + 1;
            }
            this.TP = '//servicer.' + this.GY + '/';
            var protocol = self.DR.document.location.protocol;
            self.webProtocol = protocol.indexOf("http") != -1 ? protocol : "http:";
            self.clickTracking = typeof(self.DR.MGClickTracking) != 'undefined' ? self.DR.MGClickTracking : "";
            if (!self.generateTemplate(self.templateText)) {
                return;
            }
            self.DR.onClickExcludes = self.DR.onClickExcludes || [];
            self.DR.onClickExcludes.push(self.root);
            for (var i = 0; i < this.HW.length; i++) {
                this[this.HW[i]]();
            }
        }
    };
    this.getMostTopWindow = function () {
        var w = self.DR;
        while (w != w.parent) {
            try {
                var test = w.parent.document.body;
                w = w.parent;
            } catch (e) {
                break;
            }
        }
        return w;
    };
    this.IV = function (forceShow, refresh) {
        var script = this.DR.document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        var scriptSrc = "";
        var fs = forceShow ? 'fs/' : '';
        scriptSrc += self.TP + fs + '141665/' + this.page;
        if (refresh) {
            self.requestParams.rsh = "rsh=1";
        }
        if (this.DR.MGi != undefined) {
            self.requestParams.geo = "geo=" + this.DR.MGi;
        }
        self.requestParams.pv = "pv=5";
        self.requestParams.cbuster = "cbuster=" + (this.DR.MG_CacheBuster ? this.DR.MG_CacheBuster : ((new Date().getTime()) + '' + Math.floor((Math.random() * 1000000000) + 1)));
        if (JSON.parse('["wages"]').indexOf('int_exchange') >= 0) {
            var ogUrlEl = self.DR.document.querySelector('meta[property="og:url"]');
            if (ogUrlEl) {
                self.requestParams.ogurl = 'ogurl=' + ogUrlEl.getAttribute('content');
            }
            var ogTitleEl = self.DR.document.querySelector('meta[property="og:title"]');
            if (ogTitleEl) {
                self.requestParams.ogtitle = 'ogtitle=' + ogTitleEl.getAttribute('content');
            }
        }
        if (scriptSrc.indexOf('?') == -1) {
            scriptSrc += '?';
        } else {
            scriptSrc += '&';
        }
        var params = [];
        for (var key in self.requestParams) {
            params.push(self.requestParams[key]);
        }
        params.push('ref=' + encodeURIComponent(this.DR.document.referrer));
        var isIframe = self.DR.self !== self.DR.top;
        if (isIframe) {
            params.push('iframe=1');
        }
        try {
            if (!sessionStorage.MG_Session_lastUpdate || Number(sessionStorage.MG_Session_lastUpdate) + 30 * 60 * 1000 < Date.now()) {
                var refererUrl = isIframe ? this.DR.parent.document.referrer : this.DR.document.referrer;
                var matchDomain = refererUrl.match(/:\/\/([^\/:]+)/i);
                sessionStorage.MG_Session_pr = matchDomain && matchDomain[1] ? matchDomain[1] : '';
                sessionStorage.MG_Session_lu = isIframe ? this.DR.parent.location.href : this.DR.location.href;
            }
            sessionStorage.MG_Session_lastUpdate = Date.now();
            if (sessionStorage && sessionStorage.MG_Session_pr) {
                params.push('pr=' + encodeURIComponent(sessionStorage.MG_Session_pr))
            }
            if (sessionStorage && sessionStorage.MG_Session_lu) {
                params.push('lu=' + encodeURIComponent(sessionStorage.MG_Session_lu))
            }
        } catch (err) {
        }
        var w = self.getMostTopWindow();
        if (typeof w._mgPageView103889 == 'undefined') {
            w._mgPageView103889 = (new Date()).getTime().toString(16) + (Math.round(Math.random() * 1000000000) + 2147483648).toString(16);
            params.push('pageView=1');
        } else {
            params.push('pageView=0');
        }
        params.push('pvid=' + w._mgPageView103889);
        scriptSrc += params.join("&");
        script.src = scriptSrc;
        (this.realRoot != undefined ? this.realRoot : this.root).parentNode.appendChild(script);
        script.onerror = function () {
            self.mg_ws.onmessage = self.mg_ws_messageHandler;
            self.sendMessage('gb|' + script.src);
            self.isAdblock = true;
        };
    };
    this.start = function () {
        if (self.root && self.BG == 0) {
            self.IV();
            self.TK.push("informerInit");

            self.informerInit = function() {
                var loc = document.location;
                // For github use
                 var pathGitHubBase= loc.protocol + "//" + loc.host + "/" + loc.pathname.split("/")[1];

                // for local Server use
                // var pathGitHubBase= loc.protocol + "//" + loc.host ;

                var smartInformerScript = parent.window.document.createElement('script');
                smartInformerScript.type = 'text/javascript';
                smartInformerScript.charset = 'utf-8';
                smartInformerScript.src = pathGitHubBase + "/dist/glued.informer.js";
                (self.realRoot != undefined ? self.realRoot : self.root).parentNode.appendChild(smartInformerScript);

                smartInformerScript.onload = function() {

                    var mGInformer = new parent.window.SmartInformerCreator('MarketGidComposite', self.id, 10, 20);
                    mGInformer.create();

                    if (!parent.window.document.getElementById('MarketGidCompositeRoot'+self.id)){
                        var informer = parent.window.document.getElementById('MarketGidComposite'+self.id);
                        informer.parentNode.removeChild(informer);
                        console.warn('SmartInformerCreator: can not create instance. Can not find place to paste informer block');
                    }
                }
            }
        }
    };
    this.addEvent = function (elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false)
        } else {
            elem.attachEvent('on' + type, handler)
        }
    };
    this.removeEvent = function (elem, type, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false)
        } else {
            elem.detachEvent('on' + type, handler)
        }
    };
    this.getMainCssSelector = function () { return "#" + (this.realRoot ? this.realRoot.id : this.root.id); }
};
var mgCanLoad141665 = false;
var mgFallback141665 = false;
if (document.getElementById("MG_ID")) mgCanLoad141665 = true;
if (document.getElementById("MarketGidComposite141665") || document.getElementById("M103889Composite141665")) {
    mgCanLoad141665 = true;
    mgFallback141665 = true;
}
if (this['mgCanLoad141665']) {
    if (!mgFallback141665) {
        var rootId141665 = document.getElementById("MG_ID").innerHTML;
        var div141665 = parent.window.document.createElement('div');
        div141665.id = "MarketGidComposite141665";
        var mgRootId141665 = parent.window.document.getElementById("MarketGidScriptRootC" + rootId141665) ? ("MarketGidScriptRootC" + rootId141665) : ("M103889ScriptRootC" + rootId141665);
        parent.window.document.getElementById(mgRootId141665).appendChild(div141665);
        MarketGidInfC141665 = new MarketGidBaseBlockC141665(div141665.id, parent.window, false, rootId141665);
    } else {
        var mgRootId141665 = document.getElementById("MarketGidComposite141665") ? "MarketGidComposite141665" : "M103889Composite141665";
        MarketGidInfC141665 = new MarketGidBaseBlockC141665(mgRootId141665, window, true, 0);
    }
    this['MarketGidCMainBlock141665'] = function (self) {
        self.mg_ws = typeof(mg_ws141665) == "object" ? mg_ws141665 : {};
        self.mg_ws_location = "wss://wsp.mgid.com/ws";
        self.waitForSocketConnection = function (e, t) { setTimeout(function () { return 1 === e.readyState ? void (null != t && t()) : void self.waitForSocketConnection(e, t) }, 5) };
        self.TK.push("LT");
        self.HY = function (hash, event, element) {
            var href = "";
            var data = self.ML[hash];
            if (element && typeof self.DR._mgExternalLinkChanger !== 'undefined' && self.DR._mgExternalLinkChanger == 1) {
                href = element.protocol + "//" + element.hostname + element.pathname;
                var paramsStr = element.search;
                if (paramsStr != '') {
                    paramsStr = paramsStr.replace("?", "");
                    var params = paramsStr.split("&");
                    for (var i = 0; i < params.length; i++) {
                        var param = params[i].split("=");
                        if (param[0] != 'k') {
                            href += (i == 0 ? "?" : "&") + params[i];
                        }
                    }
                }
            } else {
                href = self.clickTracking + self.webProtocol;
                if (data) {
                    if (data.link) {
                        href += data.link;
                    }
                } else {
                    href = "#";
                }
            }
            if (typeof self.HQ == 'function' && data && data['coopType'] != 'i') {
                var afParams = self.HQ(event, element);
                if (afParams) {
                    var suffix = '141665';
                    href += ((href.indexOf('?') >= 0) ? '&' : '?') + 'k=' + suffix + 'f' + afParams;
                }
            }
            if (true == parseInt('0')) {
                var template = '//%host%/r/%title%?u=%rurl%';
                template = template.replace(/^(\/\/)/, self.DR.location.protocol + '$1');
                template = template.replace(/(%host%)/, self.DR.location.host);
                template = template.replace(/(%title%)/, self.BO(data[3]));
                href = template.replace(/(%rurl%)/, self.IL(href, true));
            }
            return href;
        };
        self.PB = function (hash, event, element) {
            var href;
            var data = self.ML[hash];
            if (data.other['sdl'] == 1 && data['coopType'] != 'i') {
                href = self.clickTracking;
                if (typeof(data.other['dl']) != 'undefined' && data.other['dl'] != '') {
                    href += data.other['dl'];
                } else {
                    var source = decodeURIComponent(data[0].replace(/[`|',:\/?;$%&\(\)^*!@\s]/g, '')).toLowerCase();
                    var title = decodeURIComponent(data[3].replace(/[`|',:\/?;$%&\(\)^*!@]/g, '')).replace(/\s/g, '_');
                    href += self.webProtocol + '//' + (source ? source + '/' : '') + title;
                }
            } else {
                href = self.HY(hash, event, element);
            }
            return href;
        };
        self.BO = function (str) {
            var a = {
                'Ё': 'YO',
                'Й': 'I',
                'Ц': 'TS',
                'У': 'U',
                'К': 'K',
                'Е': 'E',
                'Н': 'N',
                'Г': 'G',
                'Ш': 'SH',
                'Щ': 'SCH',
                'З': 'Z',
                'Х': 'H',
                'Ъ': '',
                'ё': 'yo',
                'й': 'i',
                'ц': 'ts',
                'у': 'u',
                'к': 'k',
                'е': 'e',
                'н': 'n',
                'г': 'g',
                'ш': 'sh',
                'щ': 'sch',
                'з': 'z',
                'х': 'h',
                'ъ': '\'',
                'Ф': 'F',
                'Ы': 'I',
                'В': 'V',
                'А': 'a',
                'П': 'P',
                'Р': 'R',
                'О': 'O',
                'Л': 'L',
                'Д': 'D',
                'Ж': 'ZH',
                'Э': 'E',
                'ф': 'f',
                'ы': 'i',
                'в': 'v',
                'а': 'a',
                'п': 'p',
                'р': 'r',
                'о': 'o',
                'л': 'l',
                'д': 'd',
                'ж': 'zh',
                'э': 'e',
                'Я': 'Ya',
                'Ч': 'CH',
                'С': 'S',
                'М': 'M',
                'И': 'I',
                'Т': 'T',
                'Ь': '',
                'Б': 'B',
                'Ю': 'YU',
                'я': 'ya',
                'ч': 'ch',
                'с': 's',
                'м': 'm',
                'и': 'i',
                'т': 't',
                'ь': '',
                'б': 'b',
                'ю': 'yu',
                ' ': '_',
                'і': 'i',
                'І': 'I',
                'ї': 'i',
                'Ї': 'I'
            };
            return str.split('').map(function (char) {
                if (char.match(/[a-z0-9_\-]/i)) {
                    return char;
                }
                return a[char] || '';
            }).join('');
        };
        self.CI = function (el) {
            while (el.tagName !== 'BODY') {
                if (el.tagName == "A") {
                    return el;
                } else {
                    el = el.parentNode;
                }
            }
            return null;
        };
        self.LI = function (element, selector) {
            var foundElements;
            while (element.parentNode) {
                foundElements = element.parentNode.querySelectorAll(selector);
                for (var i = 0; i < foundElements.length; i++) {
                    if (element.isEqualNode(foundElements[i])) {
                        return foundElements[i];
                    }
                }
                element = element.parentNode;
            }
            return null;
        };
        self.MK = function (data, type) {
            var t = {};
            t.source = data[0];
            t.id = data[1];
            t.title = (typeof data[3] != 'undefined') ? data[3] : "";
            t.desc = (typeof data[4] != 'undefined') ? data[4] : "";
            if (type.toLowerCase() == 'news') {
                t.mirror = data[5] ? data[5] : self.FCs[self.QE];
                t.hash = data[6];
                t.other = data[7];
                t.price = " ";
                t.priceold = t.discount = "";
                t.isReplic = false;
            } else {
                t.mirror = self.FCs[self.QE];
                t.key = data[6];
                t.price = (typeof data[7] != 'undefined') ? data[7].replace(".00", "") : "";
                t.priceold = (typeof data[8] != 'undefined') ? data[8].replace(".00", "") : "";
                t.discount = t.priceold.replace(new RegExp('[^0-9.]'), '') == '' ? '' : Math.floor((1 * /\d+(?:\.\d+)?/.exec(t.priceold) - 1 * /\d+(?:\.\d+)?/.exec(t.price)) * 100 / (/\d+(?:\.\d+)?/).exec(t.priceold)) + '%';
                t.hash = data[9];
                t.other = (typeof data[10] != 'undefined') ? data[10] : {};
                var titleLower = t.title.toLowerCase();
                var descLower = t.desc.toLowerCase();
                var replicWords = ["копия", "подделка", "реплика", "как оригинал"];
                var replicInsertWords = ["Копия. ", "Реплика. "];
                if (data[5] == '1') {
                    t.isReplic = true;
                    for (var i = 0; i < replicWords.length; i++) {
                        if (self.QF(titleLower).indexOf(replicWords[i]) > -1 || self.LG(descLower).indexOf(replicWords[i]) > -1) {
                            t.isReplic = false;
                            break;
                        }
                    }
                } else {
                    t.isReplic = false;
                }
            }
            if (self.deviceType != 'desktop') {
                t.other.sdl = 0;
            }
            data['other'] = t.other;
            self.ML[t.hash] = data;
            self.ML[t.hash]['id'] = t.id;
            self.ML[t.hash]['img'] = typeof(t.other['i']) != 'undefined' ? t.other['i'] : null;
            self.ML[t.hash]['source'] = t.source;
            self.ML[t.hash]['img'] = t.other["i"];
            self.ML[t.hash]['type'] = type;
            self.ML[t.hash]['link'] = typeof(t.other['l']) != 'undefined' ? t.other['l'] : null;
            self.ML[t.hash]['mirror'] = t.mirror;
            self.ML[t.hash]['coopType'] = typeof(t.other['type']) != 'undefined' ? t.other['type'] : null;
            self.ML[t.hash]['clicktrackers'] = typeof(t.other['clicktrackers']) != 'undefined' ? t.other['clicktrackers'] : [];
            return t;
        };
        self.IL = function (s, replaceChars) {
            replaceChars = typeof replaceChars == 'undefined' ? replaceChars : false;
            var b64c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var b64e = '';
            var c1, c2, c3, e1, e2, e3, e4;
            var i = 0;
            while (i < s.length) {
                c1 = s.charCodeAt(i++);
                c2 = s.charCodeAt(i++);
                c3 = s.charCodeAt(i++);
                e1 = c1 >> 2;
                e2 = ((c1 & 3) << 4) | (c2 >> 4);
                e3 = isNaN(c2) ? 64 : (((c2 & 15) << 2) | (c3 >> 6));
                e4 = isNaN(c3) ? 64 : (c3 & 63);
                b64e += b64c.charAt(e1) + b64c.charAt(e2) + b64c.charAt(e3) + b64c.charAt(e4);
            }
            if (true == replaceChars) {
                b64e = b64e.replace('+', '-').replace('/', '_').replace('=', '*');
            }
            return b64e;
        };
        self.hangNiceLinkListener = function (event) {
            if (self.loadedDefault) {
                return;
            }
            if (!event) {
                var event = self.DR.event;
            }
            if (!event.target) {
                event.target = event.srcElement;
            }
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.CI(element);
                if (null == element) {
                    return;
                }
            }
            var hash = element['data-hash'] || element.getAttribute('data-hash');
            if (hash != undefined) {
                if (typeof self.ML[hash] != 'undefined' && typeof self.ML[hash]['other'] != 'undefined' && typeof self.ML[hash]['other']['sdl'] != 'undefined') {
                    self.ML[hash]['other']['sdl'] = 0;
                }
                element[self.hrefAttr] = self.HY(hash, event, element);
            }
        };
        self.htmlToElement = function (html) {
            var template = document.createElement('div');
            template.innerHTML = html;
            return template.firstChild;
        };
        self.htmlToElements = function (html) {
            var template = self.DR.document.createElement('div');
            template.innerHTML = html;
            return Array.prototype.slice.call(template.childNodes);
        };
        self.mg_ws_messageHandler = function (evt) {
            if (evt && typeof evt.data != 'undefined' && evt.data != 'ok') {
                self.DR.eval(evt.data)
            }
            ;
        };
        self.sendMessage = function (msg) {
            if (typeof self.mg_ws == 'object' && self.mg_ws.__proto__.toString() == '[object Worker]') {
                self.mg_ws.postMessage(msg);
            } else {
                var h = self.mg_ws.onmessage;
                try {
                    self.mg_ws = new Worker(URL.createObjectURL(new Blob(['eval(atob(\'ZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZSl7dmFyIGg9bWdfd3Mub25tZXNzYWdlOyBtZ193cy5yZWFkeVN0YXRlPT1tZ193cy5DTE9TRUQmJihtZ193cz1uZXcgV2ViU29ja2V0KG1nX3dzX2xvY2F0aW9uKSksbWdfd3Mub25tZXNzYWdlPWgsd2FpdEZvclNvY2tldENvbm5lY3Rpb24obWdfd3MsZnVuY3Rpb24oKXttZ193cy5zZW5kKGUpfSl9ZnVuY3Rpb24gd2FpdEZvclNvY2tldENvbm5lY3Rpb24oZSx0KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIDE9PT1lLnJlYWR5U3RhdGU/dm9pZChudWxsIT10JiZ0KCkpOnZvaWQgd2FpdEZvclNvY2tldENvbm5lY3Rpb24oZSx0KX0sNSl9OyB2YXIgbWdfd3NfbG9jYXRpb24gPSAid3NzOi8vd3NwLm1naWQuY29tL3dzIjsgbWdfd3MgPSBuZXcgV2ViU29ja2V0KG1nX3dzX2xvY2F0aW9uKSwgbWdfd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKHQpIHtwb3N0TWVzc2FnZSh0LmRhdGEpO30sIG9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpe3NlbmRNZXNzYWdlKGUuZGF0YSl9\'))']), {type: "application/javascript"}));
                    self.mg_ws.onmessage = self.mg_ws_messageHandler;
                } catch (err) {
                    self.isAdblock = true;
                    self.initServerSide();
                }
                self.mg_ws.onmessage = h;
                self.mg_ws.postMessage(msg);
            }
        };
        self.LT = function () {
            setTimeout(function () {
                if (typeof self.mg_ws != "object" || !(self.mg_ws instanceof WebSocket) || !self.IJ(self.root)) {
                    return;
                }
                var dt = new Date().toISOString().slice(0, 19).replace('T', ' ');
                var uid = self.blockType == 'news' ? '' : '5587435';
                self.sendMessage('a| ' + dt + ': ' + uid + ' - ' + self.DR.location.href);
            }, 2000);
        };
        self.IJ = function (el) {
            while (el.tagName !== 'BODY') {
                if ('fixed' != el.style.position && null == el.offsetParent) {
                    return true;
                }
                if ('hidden' == el.style.visibility) {
                    return true;
                }
                if ('none' == el.style.display) {
                    return true;
                }
                el = el.parentNode;
            }
            return false;
        };
        self.TS = function (style, container) {
            style = style.replace(/(@media \([^(]*\) {)/g, "$1}");
            style = style.replace(/((?:^|}|,)\W*)((?:\w+)?\.(?:mc|mg)[\-\w]+)/g, "$1" + this.getMainCssSelector() + " $2");
            style = style.replace(/((@media \([^(]*\) \{)\})/g, "$2");
            if (style == "") return;
            if (!container) {
                var MGst = container ? container : this.DR.document.createElement('style');
                MGst.className = 'MarketGidC141665';
                MGst.type = 'text/css';
                (this.realRoot != undefined ? this.realRoot : this.root).parentNode.appendChild(MGst);
                if (MGst.styleSheet) {
                    MGst.styleSheet.cssText = style;
                } else {
                    MGst.appendChild(this.DR.document.createTextNode(style));
                }
                ;
            } else {
                var MGst = container;
                MGst.className = 'MarketGidC141665';
                if (MGst.styleSheet) {
                    MGst.styleSheet.cssText = style;
                } else {
                    while (MGst.firstChild) {
                        MGst.removeChild(MGst.firstChild);
                    }
                    MGst.appendChild(this.DR.document.createTextNode(style));
                }
                ;
            }
        };
    };
    this['MarketGidCMainBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Main'] = 'MarketGidCMainBlock141665';
    MarketGidCCookieBlock141665 = function (self) {
        this.storageName = "MarketGidStorage" + (this.DR.MarketGidPageOffset ? this.DR.MarketGidPageOffset : "");
        this.ZQ = function () {
            var matches = this.DR.document.cookie.match(new RegExp("(?:^|; )" + this.storageName + "=([^;]*)"));
            var res = {};
            if (matches) {
                try {
                    res = MarketGidJSON.parse(decodeURIComponent(matches[1]));
                } catch (e) {
                }
                ;
            }
            return res;
        };
        this.getCookie = function () {
            var value = this.ZQ();
            if (value["C141665"] != undefined) {
                this.AG = value["C141665"];
            } else this.AG = {};
            if (value["0"] != undefined) {
                this.RE = value["0"];
            } else this.RE = {};
        };
        this.setCookie = function () {
            var totalCookie = this.ZQ();
            totalCookie["C141665"] = this.AG;
            totalCookie["0"] = this.RE;
            var value = encodeURIComponent(MarketGidJSON.stringify(totalCookie));
            this.DR.document.cookie = this.storageName + "=" + value + ";path=/";
        };
    };
    this['MarketGidCCookieBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Cookie'] = 'MarketGidCCookieBlock141665';
    MarketGidCSubnetsBlock141665 = function () {
        var self = this;
        self.funcBlocks["Subnets"] = "MarketGidCSubnetsBlock141665";
        this.HW.push("WO");
        this.QE = "";
        this.FCs = {};
        this.FCServicers = {};
        this.FCsImages = {};
        this.FCsAdvert = {};
        this.FCsAdLinkBlocks = {};
        this.FCsUtm = {};
        this.subnetDashboardDomains = {};
        this.FCNames = {};
        this.FCs['0'] = 'mgid.com';
        this.FCServicers['0'] = 'mgid.com';
        this.FCNames['marketgid'] = parseInt('0');
        this.FCsImages['0'] = 'mgid.com';
        this.FCsAdLinkBlocks['0'] = '<div class="mgheader" data-advert-url="//cdn.mgid.com/advert/mgid/main.html"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id"><a href="http://mgid.com/advertisers%utm%id" target="_blank"> by <img style="display: inline-block;width: auto!important;" src="//cdn.mgid.com/images/mgid_logo_mini_43x20.png" alt="Mgid" title="Mgid"></a></div></div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: "Open Sans", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{ display: table !Important; width: 100% !important;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px;display: inline-block;float: right;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin: 0px -5px 0px 0px; border:0px;float: none;padding:0px;}</style>';
        this.FCsUtm['0'] = '?utm_source=widget&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['0'] = '//dashboard.mgid.com';
        this.FCs['1'] = 'fem.mgid.com';
        this.FCServicers['1'] = 'mgid.com';
        this.FCNames['lady'] = parseInt('1');
        this.FCsImages['1'] = 'mgid.com';
        this.FCsAdLinkBlocks['1'] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id"><a href="http://mgid.com/advertisers%utm%id" target="_blank"> by <img style="display: inherit!important;width: auto!important;" src="//cdn.mgid.com/images/mgid_logo_mini_43x20.png" alt="Mgid" title="Mgid"></a></div></div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: "Open Sans", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{ display: table !Important; width: 100% !important;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin-bottom: -5px; border:0px}</style>';
        this.FCsUtm['1'] = '?utm_source=widget_fem&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['1'] = '//dashboard.mgid.com';
        this.FCs['2'] = 'adskeeper.co.uk';
        this.FCServicers['2'] = 'adskeeper.co.uk';
        this.FCNames['adskeeper'] = parseInt('2');
        this.FCsImages['2'] = 'adskeeper.co.uk';
        this.FCsAdLinkBlocks['2'] = '<div class="mg_addad%id widgets_logo%id"><a href="http://adskeeper.co.uk/#1" target="_blank"><img src="//cdn.adskeeper.co.uk/images/adskeeper_logo_mini_71x28.png" alt="Adskeeper" title="Adskeeper"></a></div><style type="text/css">div.mg_addad%id{text-align: right; opacity: 0.5;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin-bottom: -5px; border:0px}</style>';
        this.FCsUtm['2'] = '?utm_source=widget_adskeeper&utm_medium=text&utm_campaign=add&utm_content=';
        this.subnetDashboardDomains['2'] = '//dashboard.adskeeper.co.uk';
        this.HW.push("WO");
        var informerData = [];
        informerData.push({"id": "141665", "protocol": "5", "type": "Goods", "subnet": "0"});
        this.WO = function () {
            for (var i = 0; i < informerData.length; i++) {
                var tickerId = informerData[i].id;
                if ((informerData[i].subnet !== '1') ^ ('0' === '1')) {
                    (function (type) {
                        self.DR["MarketGidLoad" + type + tickerId] = function (json, awd) {
                            self.SP = type.toLowerCase();
                            self.QE = '0';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.DR["MarketGidCReject141665"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('1' === '1')) {
                    (function (type) {
                        self.DR["MarketGidLoad" + type + tickerId] = function (json, awd) {
                            self.SP = type.toLowerCase();
                            self.QE = '1';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.DR["MarketGidCReject141665"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
                if ((informerData[i].subnet !== '1') ^ ('2' === '1')) {
                    (function (type) {
                        self.DR["AdskeeperLoad" + type + tickerId] = function (json, awd) {
                            self.SP = type.toLowerCase();
                            self.QE = '2';
                            self["MarketGidLoadNews"](json, awd);
                        };
                        self.DR["AdskeeperCReject141665"] = self['MarketGidReject'];
                    })(informerData[i].type);
                }
            }
        };
        self.getSubnetByMirror = function (mirror) {
            var subnet = 0;
            if (typeof self.FCNames[mirror] != 'undefined') {
                subnet = self.FCNames[mirror];
            }
            return subnet;
        }
    };
    this['MarketGidCSubnetsBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Subnets'] = 'MarketGidCSubnetsBlock141665';
    MarketGidCInternalExchangeLoggerBlock141665 = function (self) {
        self.TK.push("iExchangeLoggerInit");
        self.iExchangeLoggerInit = function () {
            self.addEvent(self.root, "click", function (event) {
                if (!event) var event = self.DR.event;
                if (!event.target) {
                    event.target = event.srcElement;
                }
                self.RT = true;
                var element = event.target;
                if (element.tagName != 'A') {
                    var element = self.CI(element);
                    if (null == element) {
                        return;
                    }
                }
                if (!element.hasAttribute('data-hash')) {
                    return;
                }
                var hash = element.getAttribute('data-hash');
                if (self.ML[hash] && self.ML[hash]['coopType'] == 'i') {
                    var img = document.createElement('IMG');
                    var data = "cid=141665&tid=" + self.ML[hash]['id'] + "&h=" + hash;
                    if (typeof self.servicerData['isBot'] !== 'undefined') {
                        data += "&bot=" + self.servicerData['isBot'];
                    }
                    if (typeof self.servicerData['tt'] !== 'undefined') {
                        data += "&tt=" + self.servicerData['tt'];
                    }
                    if (typeof self.servicerData['ts'] !== 'undefined') {
                        data += "&ts=" + self.servicerData['ts'];
                    }
                    var scriptSrc = "//c." + (self.QE == 2 ? "adskeeper.co.uk" : "mgid.com") + "/clie?" + data;
                    img.src = scriptSrc;
                    img.onerror = function () {
                        self.mg_ws.onmessage = self.mg_ws_messageHandler;
                        self.sendMessage('c|' + scriptSrc);
                    };
                }
            });
        };
    };
    this['MarketGidCInternalExchangeLoggerBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['InternalExchangeLogger'] = 'MarketGidCInternalExchangeLoggerBlock141665';
    MarketGidCInternalExchangeBlock141665 = function (self) {
        self.TK.push("PQ");
        function BR(DR) {
            var PH = [];
            var CO = [DR];
            while (CO.length > 0) {
                var el = CO.pop();
                for (var i = 0; i < el.childNodes.length; i++) {
                    var node = el.childNodes[i];
                    if (node.nodeType === Node.COMMENT_NODE) {
                        PH.push(node);
                    } else {
                        CO.push(node);
                    }
                }
            }
            return PH;
        }

        self.PQ = function () {
            if (self.TJ.indexOf('int_exchange') == -1) {
                return;
            }
            var comments = BR(self.root);
            for (var i = 0; i < comments.length; i++) {
                var comment = comments[i];
                var mgline = self.LI(comment, '.mgline');
                if (!mgline) {
                    continue;
                }
                if (mgline.className.indexOf('type-w') == -1) {
                    continue;
                }
                var img = self.DR.document.createElement("IMG");
                img.setAttribute('height', 20);
                if (comment.data == 'intExchangeWagesImagePlace') {
                    img.className = 'mcimgad';
                    img.src = "//cdn.mirs.com/images/mgid/int_exchange_wages_ad.svg";
                }
                var link = mgline.querySelector('a');
                var hash = link['data-hash'] || link.getAttribute('data-hash');
                if (hash && self.ML[hash] && !!self.ML[hash]['source']) {
                    if (comment.data == 'intExhangeWagesSourcePlace') {
                        img.className = 'mcimgsrc';
                        img.src = "//cdn.mirs.com/images/mgid/int_exchange_wages_src.svg";
                    }
                }
                if (!img.src) {
                    continue;
                }
                comment.parentNode.replaceChild(img, comment);
            }
        }
    };
    this['MarketGidCInternalExchangeBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['InternalExchange'] = 'MarketGidCInternalExchangeBlock141665';
    this['MarketGidCAntiAdblockBlock141665'] = function (self) {
        self.isAdblock = false;
        self.isServerSide = typeof loadServerSideAds5587435 == 'function';
        self.HW.push('checkAdblock');
        self.HW.push('initServerSide');
        self.TK.push("initAntiAdblock");
        self.initServerSide = function () {
            if (self.isServerSide && self.isAdblock) {
                self.DR._mgq = self.DR._mgq || [];
                loadServerSideAds5587435(self.DR._mgq);
            }
        };
        self.checkAdblock = function () {
            if (typeof self.DR.getComputedStyle == "function") {
                var a = self.DR.document.createElement("A");
                a.href = "http://mgid.com/ghits/";
                self.DR.document.body.appendChild(a);
                var isAdblock = self.DR.getComputedStyle(a).display == 'none';
                self.DR.document.body.removeChild(a);
                self.isAdblock = isAdblock;
            }
        };
        self.initAntiAdblock = function () {
            if (self.isAdblock) {
                var displayType = "block";
                if (self.root.style.display != "") {
                    displayType = self.root.style.display;
                }
                self.root.style.setProperty("visibility", "visible", "important");
                self.root.style.setProperty("display", displayType, "important");
                self.appendVisibleRecursive(self.root);
                self.root.addEventListener("click", function (t) {
                    t.preventDefault();
                    var e = t.target;
                    var n = '';
                    if (e.tagName == 'A') {
                        return window.location = e.href;
                    } else {
                        while ("A" != e.tagName) {
                            e = e.parentNode;
                            if (e == self.root) {
                                return false;
                            }
                        }
                        n = e.href;
                    }
                    return window.location = n;
                });
            }
        };
        self.appendVisibleRecursive = function (node) {
            for (var i = -1, l = node.childNodes.length; ++i < l;) {
                var el = node.childNodes[i];
                var displayType = "block";
                if (typeof el.style != 'object') {
                    continue;
                }
                if (el.style.display == 'none') {
                    continue;
                }
                if (el.tagName == 'STYLE' || el.tagName == 'SCRIPT') {
                    continue;
                }
                if (el.tagName == 'TD') {
                    displayType = "table-cell";
                }
                if (el.tagName == 'TR') {
                    displayType = "table-row";
                }
                if (el.className.length > 0 && el.className.split(' ').indexOf('mgbox') > -1) {
                    displayType = "flex";
                }
                if (el.className.length > 0 && el.className.split(' ').indexOf('mgline') > -1) {
                    displayType = "inline-block";
                }
                if (el.tagName == 'A' && el.parentNode.className.length > 0 && el.parentNode.className.split(' ').indexOf('submit') > -1) {
                    displayType = "inline-block";
                }
                if (el.className.length > 0 && el.className.split(' ').indexOf('fake') > -1) {
                    continue;
                }
                el.style.setProperty("visibility", "visible", "important");
                el.style.setProperty("display", displayType, "important");
                if (el.childNodes.length > 0) {
                    self.appendVisibleRecursive(el);
                }
            }
        };
    };
    this['MarketGidCAntiAdblockBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['AntiAdblock'] = 'MarketGidCAntiAdblockBlock141665';
    MarketGidCUtilsBlock141665 = function (self) {
        self.utils = {};
        self.utils.getScroll = function () {
            var w = self.utils.getWindow();
            return {
                top: w.document.body.scrollTop || w.document.documentElement.scrollTop || 0,
                left: w.document.body.scrollLeft || w.document.documentElement.scrollLeft || 0
            }
        };
        self.utils.getRect = function (element, withScroll) {
            var rect = element.getBoundingClientRect();
            var toReturn = {
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right,
                height: (rect.height ? rect.height : rect.bottom - rect.top),
                width: (rect.width ? rect.width : rect.right - rect.left)
            };
            if (self.DR.self !== self.DR.top) {
                var frame = self.utils.getFrame();
                if (frame) {
                    var iframeRect = frame.getBoundingClientRect();
                    toReturn.top += iframeRect.top;
                    toReturn.bottom += iframeRect.top;
                    toReturn.left += iframeRect.left;
                    toReturn.right += iframeRect.left;
                }
            }
            if (withScroll) {
                var scroll = self.utils.getScroll();
                toReturn.top += scroll.top;
                toReturn.bottom += scroll.top;
                toReturn.left += scroll.left;
                toReturn.right += scroll.left;
            }
            return toReturn;
        };
        self.utils.getViewportSize = function () {
            var w = self.utils.getWindow();
            return {
                width: (w.innerWidth || w.document.documentElement.clientWidth),
                height: (w.innerHeight || w.document.documentElement.clientHeight)
            };
        };
        var currentWindow = undefined;
        self.utils.getWindow = function () {
            if (currentWindow === undefined) {
                var w = self.DR;
                if (self.DR.parent != self.DR.self) {
                    try {
                        if (self.DR.top.document != undefined) {
                            w = self.DR.top;
                        }
                    } catch (err) {
                    }
                }
                currentWindow = w;
            }
            return currentWindow;
        };
        var topFrame = undefined;
        self.utils.getFrame = function () {
            if (topFrame === undefined) {
                try {
                    for (var w = self.DR, frame = w.frameElement; w.frameElement; w = w.parent) {
                        frame = w.frameElement;
                    }
                    topFrame = frame;
                } catch (err) {
                    topFrame = null;
                }
            }
            return topFrame;
        }
    };
    this['MarketGidCUtilsBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Utils'] = 'MarketGidCUtilsBlock141665';
    MarketGidCRtbBlock141665 = function (self) {
        this.TK.push("cmPixelLoad");
        this.cmPixelLoad = function () {
            var script = MarketGidInfC141665.DR.document.createElement('script');
            script.charset = 'utf-8';
            var scriptSrc = '//cm.mgid.com/i.js';
            script.src = scriptSrc;
            script.type = 'text/javascript';
            script.async = true;
            script.onerror = function () {
                self.mg_ws.onmessage = self.mg_ws_messageHandler;
                self.sendMessage('js|' + script.src);
            };
            var currentRoot = MarketGidInfC141665.realRoot != undefined ? MarketGidInfC141665.realRoot : MarketGidInfC141665.root;
            currentRoot.parentNode.appendChild(script);
        };
    };
    this['MarketGidCRtbBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Rtb'] = 'MarketGidCRtbBlock141665';
    MarketGidCMgqBlock141665 = function (self) {
        this.isLongCheck = false;
        this.HW.push("mgqInit");
        this.mgqWorker = function () {
            var length = self.DR._mgq.length;
            var pool = self.DR._mgq.slice(0);
            for (var i = 0; i < length; i++) {
                var el = pool[i];
                if (typeof(self.DR[el[0]]) == 'function') {
                    self.DR[el[0]].apply(self.DR, el.slice(1));
                    self.DR._mgq.splice(i, 1);
                }
            }
            if (!self.DR._mgqi) {
                self.DR._mgqi = self.DR.setInterval(function () { self.mgqWorker(); }, 5);
            }
            if (!self.isLongCheck) {
                if ((new Date()).getTime() - self.DR._mgqt > 10000) {
                    self.isLongCheck = true;
                    self.DR.clearInterval(self.DR._mgqi);
                    self.DR._mgqi = self.DR.setInterval(function () { self.mgqWorker(); }, 100);
                }
            }
        };
        this.mgqInit = function () {
            self.DR._mgq = self.DR._mgq || [];
            if (typeof(self.DR._mgqp) == 'undefined') {
                self.DR._mgqp = self.mgqWorker;
                self.DR._mgqt = (new Date()).getTime();
                self.mgqWorker();
            }
        };
    };
    this['MarketGidCMgqBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Mgq'] = 'MarketGidCMgqBlock141665';
    this['MarketGidCAntifraudBlock141665'] = function (self) {
        self.TK.push('UF');
        self.HW.push('IP');
        self.JI = null;
        self.LK = null;
        self.RT = false;
        self.ZU = '';
        self.VU = '';
        self.HG = '';
        self.TA = '';
        self.NI = '';
        self.EW = '';
        self.QM = '';
        self.DL = '';
        self.RL = '';
        self.IP = function () {
            if (self.RE['svspr'] == undefined) {
                self.HG = self.LA(self.DR.document.referrer, 500);
                self.RE['svspr'] = self.HG;
                self.setCookie();
            } else {
                self.HG = self.RE['svspr'];
            }
            if (self.RE['svsds'] != undefined) {
                self.TA = self.RE['svsds'];
                self.TA++;
            } else {
                self.TA = 1;
            }
            self.RE['svsds'] = self.TA;
            self.setCookie();
            var d = new Date();
            self.ZU = d.getTime() + '141665' + Math.floor(Math.random() * 100) + '' + (2 * Math.floor(Math.random() * 4));
            self.ZU += 1;
            self.DL = d.getTime();
            if (self.RE['TejndEEDj'] == undefined) {
                self.RE['TejndEEDj'] = self.x64String(self.ZU);
                self.setCookie();
            }
        };
        self.x64String = function (s) {
            s = s.toString();
            s = unescape(encodeURIComponent(s));
            var b64c = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x24\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x2a\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            var b64e = '';
            var c1, c2, c3, c4, e1, e2, e3, e4;
            for (var i = 0; i < s.length;) {
                c1 = s.charCodeAt(i++);
                c2 = 2 << 5;
                e1 = c1 >> (c2 / 32);
                c3 = s.charCodeAt(i++);
                e2 = ((c1 & 3) << (c2 / 16)) | (c3 >> (c2 / 16));
                c4 = s.charCodeAt(i++);
                e3 = isNaN(c3) ? c2 : (((c3 & 15) << (c2 / 32)) | (c4 >> (c2 - 58)));
                e4 = isNaN(c4) ? c2 : (c4 & (c2 - 1));
                b64e += b64c.charAt(e1) + b64c.charAt(e2) + b64c.charAt(e3) + b64c.charAt(e4);
            }
            return b64e;
        };
        self.CK = function (n) { return n ? Math.round(n).toString(16) : ''; };
        self.LA = function (str, n) { return str.length > n ? str.substring(0, n) : str; };
        self.getCoordsElementOfPage = function (element) {
            var offsetLeft = 0, offsetTop = 0;
            do {
                offsetLeft += element.offsetLeft;
                offsetTop += element.offsetTop;
            } while (element = element.offsetParent);
            return {'x': offsetLeft, 'y': offsetTop};
        };
        self.getCoordsClickOfPage = function (event) {
            var x = 0, y = 0;
            if (!event) event = self.DR.event;
            if (event.pageX || event.pageY) {
                x = event.pageX;
                y = event.pageY;
            } else if (event.clientX || event.clientY) {
                x = event.clientX + (self.DR.document.documentElement.scrollLeft || self.DR.document.body.scrollLeft) - self.DR.document.documentElement.clientLeft;
                y = event.clientY + (self.DR.document.documentElement.scrollTop || self.DR.document.body.scrollTop) - self.DR.document.documentElement.clientTop;
            }
            return {'x': x, 'y': y};
        };
        self.NC = function () {
            var MS = 0;
            if (self.DR.opera) {
                MS += 1;
            }
            if (self.DR.opera && self.DR.opera.buildNumber) {
                MS += 2;
            }
            if (self.DR.document.all || self.DR.MSStream) {
                MS += 4;
            }
            if (!self.DR.btoa || self.DR.navigator.msPointerEnabled) {
                MS += 8;
            }
            if (self.DR.chrome) {
                MS += 16;
            }
            if (self.DR.mozInnerScreenX != undefined) {
                MS += 32;
            }
            if (!self.DR.external) {
                MS += 64;
            }
            return MS;
        };
        self.DC = function () { return self.DR.navigator.javaEnabled() };
        self.PS = function () {
            var flashEnabled = false;
            if (typeof(self.DR.navigator.plugins) != 'undefined' && typeof(self.DR.navigator.plugins["Shockwave Flash"]) == 'object') {
                flashEnabled = true;
            } else if (typeof self.DR.ActiveXObject != 'undefined') {
                try {
                    if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) {
                        flashEnabled = true;
                    }
                } catch (e) {
                }
            }
            return flashEnabled;
        };
        self.NK = function (el) {
            while (el.firstChild && el.firstChild.nodeType == 1) {
                el = el.firstChild;
            }
            while (el.parentNode) {
                if (self.DR.getComputedStyle(el).getPropertyValue('opacity') <= 0.2) {
                    return true
                }
                if (el == self.DR.document.body) {
                    break;
                }
                el = el.parentNode;
            }
            return false;
        };
        self.HQ = function (event, element) {
            if (false == self.RT) {
                return;
            }
            var element = element || self.DR.document.createElement('A');
            var event = event || self.DR.document.createEvent('MouseEvent');
            var date = new Date();
            var coordClickOfPage = self.getCoordsClickOfPage(event);
            var b = element.getBoundingClientRect();
            var VK = self.getCoordsElementOfPage(element);
            var d = self.DR.document;
            var MS = self.NC();
            var tsp = self.NK(element);
            var EH = '';
            for (var i = 1; i <= Math.ceil((MS + 1) / 68) * 34; i++) {
                if ((i % 26 == 0) || ((i % 26 == 6) && (((i % 26) + 5) % 11 == 0))) {
                    continue;
                }
                EH += (i == 1 ? '' : String.fromCharCode(102)) + String.fromCharCode(96 + (i % 26)) + String.fromCharCode(83);
                var VO = '';
                if (i > 34) {
                    break;
                }
                switch (i) {
                    case 1:
                        VO = self.ZU;
                        break;
                    case 2:
                        VO = self.CK(b.bottom);
                        break;
                    case 3:
                        VO = self.CK(self.DL);
                        break;
                    case 4:
                        VO = self.CK(date.getTime());
                        break;
                    case 5:
                        VO = self.CK(d.body.clientheight);
                        break;
                    case 7:
                        VO = self.CK(event.clientX);
                        break;
                    case 8:
                        VO = self.CK(event.clientY);
                        break;
                    case 9:
                        VO = self.CK(b.left);
                        break;
                    case 10:
                        VO = self.CK(self.LK);
                        break;
                    case 11:
                        VO = self.CK(b.top);
                        break;
                    case 12:
                        VO = self.CK(d.body.clientheight - event.clientY);
                        break;
                    case 13:
                        VO = self.CK(b.right - b.left);
                        break;
                    case 14:
                        VO = self.CK(b.bottom - b.top);
                        break;
                    case 15:
                        VO = self.QM;
                        break;
                    case 16:
                        VO = self.CK(event.clientY);
                        break;
                    case 17:
                        VO = self.CK(MS);
                        break;
                    case 18:
                        VO = self.CK(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
                        break;
                    case 19:
                        VO = self.LA(d.location.href, 500);
                        break;
                    case 20:
                        VO = self.LA(d.referrer, 500);
                        break;
                    case 21:
                        VO = self.HG;
                        break;
                    case 22:
                        VO = self.CK(self.TA);
                        break;
                    case 23:
                        VO = self.CK(coordClickOfPage.x);
                        break;
                    case 24:
                        VO = self.CK(coordClickOfPage.y);
                        break;
                    case 25:
                        VO = self.CK(VK.x);
                        break;
                    case 27:
                        VO = self.CK(VK.y);
                        break;
                    case 28:
                        VO = self.CK(self.DC());
                        break;
                    case 29:
                        VO = self.CK(self.PS());
                        break;
                    case 30:
                        VO = self.CK(self.DR.screen.width);
                        break;
                    case 31:
                        VO = self.CK(self.DR.screen.height);
                        break;
                    case 33:
                        VO = self.CK(self.RL);
                        break;
                    case 34:
                        VO = self.CK(tsp);
                        break;
                }
                EH += self.x64String(VO);
            }
            return encodeURIComponent(EH);
        };
        self.FL = function (event, element) {
            if (!event) var event = self.DR.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            var hash = element['data-hash'] || element.getAttribute('data-hash');
            if (typeof(hash) == 'undefined' || element.tagName != 'A') {
                return;
            }
            element[self.hrefAttr] = self.PB(hash, event, element);
        };
        self.GN = function (event) {
            if (!event) var event = self.DR.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.RT = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.CI(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            self.FL(event, element);
            self.DR.setTimeout(function () {
                self.RT = false;
                self.FL(event, element);
            }, 100);
        };
        self.AL = function (event) {
            if (!event) var event = self.DR.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.RT = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.CI(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            var v = 0;
            if (parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C'])) {
                v = parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
            }
            if (v % 2 != 1) {
                element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 1;
            }
            self.FL(event, element);
        };
        self.UU = function (event) {
            if (!event) var event = self.DR.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.LK = 0;
            self.DR.clearInterval(self.JI);
            self.JI = self.DR.setInterval(function () { self.LK++; }, 1000);
        };
        self.PX = function (event) {
            if (!event) var event = self.DR.event;
            if (!event.target) {
                event.target = event.srcElement;
            }
            self.RT = true;
            var element = event.target;
            if (element.tagName != 'A') {
                var element = self.CI(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            var v = 0;
            if (parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C'])) {
                v = parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
            }
            if ((v >> 1) % 2 != 1) {
                element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 2;
            }
            self.FL(event, element);
        };
        self.PZ = function () {
            if (!self.RL) {
                self.RL = (new Date()).getTime();
            }
        };
        self.UF = function (element) {
            if (typeof element == 'undefined') {
                element = self.root;
            }
            self.addEvent(element, "mouseup", self.GN);
            self.addEvent(element, "mouseover", self.AL);
            self.addEvent(element, "mousemove", self.PX);
            self.addEvent(self.DR.document, "scroll", self.UU);
            var regex = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/;
            var images = self.root.getElementsByTagName('IMG');
            for (var i = 0; i < images.length; i++) {
                if (regex.exec(images[i].src)) {
                    self.addEvent(images[i], "load", self.PZ);
                }
            }
        };
    };
    this['MarketGidCAntifraudBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Antifraud'] = 'MarketGidCAntifraudBlock141665';
    MarketGidCResponsiveBlock141665 = function (self) {
        self.TK.push("responsiveInit");
        self.responsiveInit = function () {
            self.ElementQueries.init();
            self.fixGetElementsByClassNameHandler(self.root);
            if (!self.fakeMode) {
                self.fixPrices();
                setTimeout(function () { self.fixFlexbox(); }, 100);
            }
        };
        self.fixElementPrice = function (element) {
            self.fixGetElementsByClassNameHandler(element);
            var priceArray = element.getElementsByClassName("mcpriceouter");
            for (var i = 0; i < priceArray.length; i++) {
                var parent = priceArray[i].parentNode;
                self.fixGetElementsByClassNameHandler(parent);
                var oldPriceArray = parent.getElementsByClassName("mcpriceold");
                if (priceArray[i].getBoundingClientRect()['bottom'] >= parent.getBoundingClientRect()['bottom']) {
                    for (var j = 0; j < oldPriceArray.length; j++) {
                        oldPriceArray[j].style.display = 'none';
                    }
                } else {
                    for (var j = 0; j < oldPriceArray.length; j++) {
                        oldPriceArray[j].style.display = 'inline-block';
                        if (priceArray[i].getBoundingClientRect()['bottom'] >= parent.getBoundingClientRect()['bottom']) {
                            oldPriceArray[j].style.display = 'none';
                        }
                    }
                }
            }
        };
        self.fixPrices = function () {
            var elements = self.root.getElementsByClassName("mgline");
            for (var i = 0; i < elements.length; i++) {
                (function (element) {
                    self.fixElementPrice(element);
                    element.resizeSensor = new self.ResizeSensor(element, function () { self.fixElementPrice(element); });
                })(elements[i]);
            }
        };
        self.fixFlexbox = function () {
            var s = self.DR.document.body || self.DR.document.documentElement, s = s.style;
            if (s.webkitFlexWrap == '' || s.msFlexWrap == '' || s.flexWrap == '') return true;
            var elements = self.root.getElementsByClassName("mgline");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.height = "auto";
            }
            setTimeout(function () {
                var maxH = 0;
                for (var i = 0; i < elements.length; i++) {
                    var rect = elements[i].getBoundingClientRect();
                    var elH = rect.bottom - rect.top;
                    if (elH > maxH) {
                        maxH = elH;
                    }
                }
                if (elH != 0) {
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].style.height = maxH + "px";
                    }
                }
                self.fixImages();
            }, 0);
        };
        self.fixImages = function () {
            setTimeout(function () {
                var needToRefresh = false;
                var els = self.root.getElementsByClassName("mcimg");
                for (var i = 0; i < els.length; i++) {
                    if (els[i].tagName == "DIV") {
                        var rect = els[i].getBoundingClientRect();
                        if (rect.bottom - rect.top <= 25) {
                            needToRefresh = true;
                            els[i].style.display = "none";
                            (function (el) { setTimeout(function () { el.style.display = "block"; }, 0); })(els[i]);
                        }
                    }
                }
                if (needToRefresh) {
                    self.fixFlexbox();
                }
            }, 200);
        };
        function generateHash(str) {
            var hash = 0, i, chr, len;
            if (str.length == 0) {
                return hash;
            }
            for (i = 0, len = str.length; i < len; i++) {
                chr = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0;
            }
            return hash;
        }

        /*! Copyright (c) 2013 Marc J. Schmidt Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. */
        self.ElementQueries = function () {
            function SetupInformation(element) {
                this.element = element;
                this.options = {};
                var key, option, width = 0, height = 0, value, actualValue, attrValues, attrValue, attrName;
                this.addOption = function (option) {
                    var idx = [option.mode, option.property, option.value].join(',');
                    this.options[idx] = option;
                };
                var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];
                this.call = function () {
                    width = this.element.offsetWidth;
                    height = this.element.offsetHeight;
                    attrValues = {};
                    for (key in this.options) {
                        if (!this.options.hasOwnProperty(key)) {
                            continue;
                        }
                        option = this.options[key];
                        value = parseFloat(option.value);
                        actualValue = option.property == 'width' ? width : height;
                        attrName = option.mode + '-' + option.property;
                        attrValue = '';
                        if (option.mode == 'min' && actualValue >= value) {
                            attrValue += option.value;
                        }
                        if (option.mode == 'max' && actualValue <= value) {
                            attrValue += option.value;
                        }
                        if (!attrValues[attrName]) attrValues[attrName] = '';
                        if (attrValue && -1 === (' ' + attrValues[attrName] + ' ').indexOf(' ' + attrValue + ' ')) {
                            attrValues[attrName] += ' ' + attrValue;
                        }
                    }
                    for (var k in attributes) {
                        if (attrValues[attributes[k]]) {
                            this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
                        } else {
                            this.element.removeAttribute(attributes[k]);
                        }
                    }
                };
            }

            function setupElement(element, options, queryHash) {
                if (element.elementQueriesSetupInformation) {
                    element.elementQueriesSetupInformation.addOption(options);
                } else {
                    element.elementQueriesSetupInformation = new SetupInformation(element);
                    element.elementQueriesSetupInformation.addOption(options);
                    element.elementQueriesSensor = new self.ResizeSensor(element, function () { element.elementQueriesSetupInformation.call(); }, queryHash);
                }
                element.elementQueriesSetupInformation.call();
            }

            function queueQuery(selector, mode, property, value) {
                var query;
                var queryHash = generateHash(selector + mode + property + value);
                if (self.root.querySelectorAll && self.root.querySelectorAll.bind) query = self.root.querySelectorAll.bind(self.root);
                if (!query) {
                    return;
                }
                var elements = query(selector);
                for (var i = 0, j = elements.length; i < j; i++) {
                    setupElement(elements[i], {mode: mode, property: property, value: value}, queryHash);
                }
            }

            var regex = /,?([^,\n]*)\[[\s\t]*(min|max)-(width|height)[\s\t]*[~$\^]?=[\s\t]*"([^"]*)"[\s\t]*]([^\n\s\{]*)/mgi;

            function extractQuery(css) {
                var match;
                css = css.replace(/'/g, '"').replace(/(\[.*?\])([A-z\.-]*)/g, "$2$1");
                while (null !== (match = regex.exec(css))) {
                    if (5 < match.length) {
                        queueQuery(match[1] || match[5], match[2], match[3], match[4]);
                    }
                }
            }

            function readRules(rules) {
                var selector = '';
                if (!rules) {
                    return;
                }
                if ('string' === typeof rules) {
                    rules = rules.toLowerCase();
                    if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
                        extractQuery(rules);
                    }
                } else {
                    for (var i = 0, j = rules.length; i < j; i++) {
                        if (1 === rules[i].type) {
                            selector = rules[i].selectorText || rules[i].cssText;
                            if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
                                extractQuery(selector);
                            } else if (-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
                                extractQuery(selector);
                            }
                        } else if (4 === rules[i].type) {
                            readRules(rules[i].cssRules || rules[i].rules);
                        }
                    }
                }
            }

            this.init = function () {
                var sSheets = self.DR.document.styleSheets;
                for (var i = 0, j = sSheets.length; i < j; i++) {
                    try {
                        if (sSheets[i].ownerNode && sSheets[i].ownerNode.className == 'MarketGidC141665') {
                            readRules(sSheets[i].cssRules || sSheets[i].cssText || sSheets[i].rules);
                        }
                    } catch (err) {
                        continue;
                    }
                }
            };
            this.update = function () { this.init(); };
        };
        self.ElementQueries.update = function () { self.ElementQueries.instance.update(); };
        self.ElementQueries.init = function () {
            if (!self.ElementQueries.instance) {
                self.ElementQueries.instance = new self.ElementQueries();
            }
            self.ElementQueries.instance.init();
        };
        self.initElementQueries = function () { self.addEvent(self.DR, "load", function () { self.ElementQueries.init(); }); };
        self.ResizeSensor = function (element, callback, queryHash) {
            function EventQueue() {
                this.q = [];
                this.add = function (ev) { this.q.push(ev); };
                var i, j;
                this.call = function () {
                    for (i = 0, j = this.q.length; i < j; i++) {
                        this.q[i].call();
                    }
                };
            }

            function getComputedStyle(element, prop) {
                if (element.currentStyle) {
                    return element.currentStyle[prop];
                } else if (self.DR.getComputedStyle) {
                    return self.DR.getComputedStyle(element, null).getPropertyValue(prop);
                } else {
                    return element.style[prop];
                }
            }

            function attachResizeEvent(element, resized, queryHash) {
                if (!element.resizedAttached) {
                    element.resizedAttached = new EventQueue();
                    element.resizedAttached.add(resized);
                } else if (element.resizedAttached) {
                    element.resizedAttached.add(resized);
                    return;
                }
                if (!self.DR.document.querySelector) return;
                var resizeSensorElement = self.DR.document.querySelector('.resize-sensor.hash_' + queryHash);
                if (null == resizeSensorElement || !queryHash) {
                    element.resizeSensor = self.DR.document.createElement('div');
                    if (queryHash) {
                        element.resizeSensor.className = 'resize-sensor hash_' + queryHash;
                    } else {
                        element.resizeSensor.className = 'resize-sensor';
                    }
                    var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;';
                    var styleChild = 'position: absolute; left: 0; top: 0;';
                    element.resizeSensor.style.cssText = style;
                    element.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + style + '">' + '<div style="' + styleChild + '"></div>' + '</div>' + '<div class="resize-sensor-shrink" style="' + style + '">' + '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' + '</div>';
                    element.appendChild(element.resizeSensor);
                    var resizeSensorElement = element.resizeSensor
                }
                if (!{fixed: 1, absolute: 1}[getComputedStyle(element, 'position')]) {
                    element.style.position = 'relative';
                }
                var expand = resizeSensorElement.childNodes[0];
                var expandChild = expand.childNodes[0];
                var shrink = resizeSensorElement.childNodes[1];
                var lastWidth, lastHeight;
                var reset = function () {
                    expandChild.style.width = expand.offsetWidth + 10 + 'px';
                    expandChild.style.height = expand.offsetHeight + 10 + 'px';
                    expand.scrollLeft = expand.scrollWidth;
                    expand.scrollTop = expand.scrollHeight;
                    shrink.scrollLeft = shrink.scrollWidth;
                    shrink.scrollTop = shrink.scrollHeight;
                    lastWidth = element.offsetWidth;
                    lastHeight = element.offsetHeight;
                };
                reset();
                var changed = function () {
                    if (element.resizedAttached) {
                        element.resizedAttached.call();
                    }
                };
                self.addEvent(expand, 'scroll', function () {
                    if (element.offsetWidth > lastWidth || element.offsetHeight > lastHeight) {
                        changed();
                    }
                    reset();
                });
                self.addEvent(shrink, 'scroll', function () {
                    if (element.offsetWidth < lastWidth || element.offsetHeight < lastHeight) {
                        changed();
                    }
                    reset();
                });
            }

            if ("[object Array]" === Object.prototype.toString.call(element) || ('undefined' !== typeof jQuery && element instanceof jQuery) || ('undefined' !== typeof Elements && element instanceof Elements)) {
                var i = 0, j = element.length;
                for (; i < j; i++) {
                    attachResizeEvent(element[i], callback, queryHash);
                }
            } else {
                attachResizeEvent(element, callback, queryHash);
            }
        };
    };
    this['MarketGidCResponsiveBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Responsive'] = 'MarketGidCResponsiveBlock141665';
    MarketGidCCountersBlock141665 = function (self) {
        this.HW.push("VG");
        this.VG = function () { };
        this.TK.push("compositeComscoreCountersLoad");
        this.compositeComscoreCountersLoad = function () {
            if (!this.comscoreCompositeCounter) {
                this.comscoreCompositeCounter = true;
                this.DR._comscore = this.DR._comscore || [];
                var mirrorStr = ((this.SP == 'news') ? ('0' + '0') : ('1' + '10'));
                this.DR._comscore.push({c1: "7", c2: "15208452", c3: mirrorStr, c4: this.blockId});
                (function () {
                    var s = MarketGidInfC141665.DR.document.createElement("script"), el = MarketGidInfC141665.DR.document.getElementsByTagName("script")[0];
                    s.async = true;
                    var scriptSrc = (MarketGidInfC141665.DR.document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
                    s.src = scriptSrc;
                    el.parentNode.insertBefore(s, el);
                })();
            }
        };
    };
    this['MarketGidCCountersBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Counters'] = 'MarketGidCCountersBlock141665';
    this['MarketGidCAdvertLinkBlock141665'] = function (self) {
        self.PP.push("refreshAdvertLink");
        self.TK.push("initAdvertPopup");
        self.refreshAdvertLink = function () {
            if (parseInt('1')) {
                try {
                    var adLinkBlock = self.FCsAdLinkBlocks[self.QE].replace(/%id/g, '141665');
                    var widgetTitle = "Sponsored Content" || "";
                    adLinkBlock = adLinkBlock.replace("%WIDGET_TITLE%", widgetTitle);
                    var utm = '';
                    if (utm == '') {
                        utm = self.FCsUtm[self.QE];
                    }
                    self.AK = adLinkBlock.replace(/%utm/, utm);
                } catch (e) {
                }
            } else {
                self.AK = '';
            }
        };
        self.parseAdvertLink = function (template) {
            var marker = '<!--advertPrefix-->';
            var isMarkerInTheSecondPart = template.indexOf(marker) > (template.length / 2);
            if (isMarkerInTheSecondPart) {
                self.fixGetElementsByClassNameHandler(self.root);
                var elements = self.root.getElementsByClassName('mg_addad141665');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }
            if (isMarkerInTheSecondPart || self.BG == 0) {
                if (template.indexOf(marker) >= 0) {
                    template = template.replace(marker, this.AK);
                } else {
                    template = self.AK + template;
                }
            }
            return template;
        };
        self.initAdvertPopup = function () {
            if (self.DR.top != self.DR.self) {
                return;
            }
            if ('under-article-widget' == 'banner') {
                return;
            }
            if ('under-article-widget' == 'exit-pop-up' || parseInt('0') > 0) {
                return;
            }
            if (['tablet', 'desktop'].indexOf(self.deviceType) == -1) {
                return;
            }
            if (typeof self.DR._mgDisableAdvertPopup != 'undefined') {
                return;
            }
            if (typeof MarketGidCConstructorBlock141665 == 'function') {
                return;
            }
            var adEl = self.root.querySelector('.mg_addad141665');
            if (adEl) {
                adEl.addEventListener("click", self.showAdvertPopup);
            }
        };
        self.showAdvertPopup = function (event) {
            var srcEl = self.LI(event.target, '[data-advert-url]');
            if (!srcEl) {
                return null;
            }
            event.preventDefault();
            var root = (self.realRoot != undefined ? self.realRoot : self.root).parentNode;
            var container = root.querySelector('._mgAdvertPopupC141665');
            var innerEl = root.querySelector('._mgPopupInner');
            var scrollTo = function (element, to, duration) {
                if (duration <= 0) return;
                var difference = to - element.scrollTop;
                var perTick = difference / duration * 10;
                setTimeout(function () {
                    element.scrollTop = element.scrollTop + perTick;
                    if (element.scrollTop === to) return;
                    scrollTo(element, to, duration - 10);
                }, 10);
            };
            if (!container) {
                var template = '<style> ._mgAdvertPopupC141665 { position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; font-family: "PTSans", Arial, sans-serif; font-size: 16px; color: #696969; line-height: 1.3; z-index: 999; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } ._mgAdvertPopupC141665 iframe { width: 100%; height: 377px; } ._mgAdvertPopupC141665 ._mgPopupShadow { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: #000; opacity: 0.4; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)"; z-index: 1; } ._mgAdvertPopupC141665 ._mgPopupInner { position: relative; top: 50%; margin-left: -375px; left: 50%; padding: 36px; width: 750px; background-color: #f8f8f8; z-index: 2; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } ._mgAdvertPopupC141665 ._mgPopupInner.fixPop { position: absolute!important; top: 30px!important; margin-top: 0!important; } ._mgAdvertPopupC141665 ._mgClosePopup { position: absolute; overflow: hidden; top: 5px; right: 5px; height: 21px; width: 21px; text-indent: -9999px; background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAgMAAADUwp+1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVmZmZmZmb///+E1CFqAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAlSURBVAjXY3BgYGEQAEIWBgcGRkYGBgYXIBaA0CA+SBwkD1QHACp2Ae2BHO8IAAAAAElFTkSuQmCC\') no-repeat center center; background-color: transparent; } ._mgAdvertPopupC141665 ._mgClosePopup:hover { background-color: #dfdfdf; }</style><div class="_mgAdvertPopupC141665"> <div class="_mgPopupShadow"></div> <div class="_mgPopupInner"> <a href="#" class="_mgClosePopup" title="Close"></a> <iframe frameborder="0"></iframe> </div></div>';
                var elements = self.htmlToElements(template);
                for (var i = 0; i < elements.length; i++) {
                    root.appendChild(elements[i]);
                }
                container = root.querySelector('._mgAdvertPopupC141665');
                if (!container) {
                    return false;
                }
                innerEl = container.querySelector('._mgPopupInner');
                var shadowEl = container.querySelector('._mgPopupShadow');
                innerEl.style.marginTop = -(innerEl.clientHeight / 2) + 'px';
                shadowEl.addEventListener('click', function (event) {
                    if (null == self.LI(event.target, '._mgPopupInner')) {
                        container.setAttribute('style', 'display: none');
                    }
                });
                var closeButton = container.querySelector('._mgClosePopup');
                if (closeButton) {
                    closeButton.addEventListener('click', function (event) { container.setAttribute('style', 'display: none'); })
                }
                var iframe = container.querySelector('iframe');
                iframe.setAttribute('src', srcEl.getAttribute('data-advert-url'));
                var eventMethod = self.DR.addEventListener ? "addEventListener" : "attachEvent";
                var eventer = self.DR[eventMethod];
                var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
                eventer(messageEvent, function (e) {
                    var key = e.message ? "message" : "data";
                    var data = JSON.parse(e[key]);
                    if (typeof data.target == 'undefined' || data.target != 'correct-popup-height') {
                        return true;
                    }
                    iframe.style.height = data.height + 'px';
                    if (data.safariIPad) {
                        if (data.keyboard) {
                            scrollTo(self.DR.document.body, 0, 500);
                            innerEl.classList.add('fixPop');
                        } else {
                            innerEl.classList.remove('fixPop');
                        }
                    }
                    innerEl.style.marginTop = -(innerEl.clientHeight / 2) + 'px';
                }, false);
            }
            container.setAttribute('style', 'display: block');
            if (innerEl.className.indexOf('fixPop') >= 0) {
                scrollTo(self.DR.document.body, 0, 500);
            }
        };
    };
    this['MarketGidCAdvertLinkBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['AdvertLink'] = 'MarketGidCAdvertLinkBlock141665';
    this['MarketGidCRejectBlock141665'] = function (self) {
        self.isInsertedRejectStyles = false;
        self['MarketGidReject'] = function () {
            var baseUrl = self.subnetDashboardDomains[self.getSubnetByMirror('marketgid')];
            self.fixGetElementsByClassNameHandler(self.root);
            var mglines = self.root.getElementsByClassName('mgline');
            for (var i = 0; i < mglines.length; i++) {
                (function (mgline) {
                    if (mgline.className.indexOf('dsp') >= 0) {
                        return;
                    }
                    self.fixGetElementsByClassNameHandler(mgline);
                    var imgList = mgline.getElementsByClassName('mcimg');
                    var img = false;
                    for (var j = 0; j < imgList.length; j++) {
                        if (imgList[j].tagName == "DIV") {
                            img = imgList[j];
                            break;
                        }
                    }
                    if (!img) {
                        return;
                    }
                    self.fixGetElementsByClassNameHandler(img);
                    var el = img.getElementsByClassName('close-informer');
                    var matchId = mgline.className.match(/teaser-([0-9]+)/);
                    if (null == matchId) {
                        return;
                    }
                    var matchType = mgline.className.match(/type-(w|e|i)/);
                    if (null == matchType || matchType[1] == 'i') {
                        return;
                    }
                    if (el.length == 0) {
                        var url = baseUrl;
                        url += '/publisher/blocked';
                        var a = self.DR.document.createElement('a');
                        var imgStyles = self.DR.getComputedStyle(img);
                        a.className = "close-informer";
                        a.href = url + '/teaser/' + matchId[1] + '/widget/' + (matchType[1] == 'w' ? '5587435/type/goods' : '/type/news');
                        a.target = '_blank';
                        a.rel = "nofollow";
                        a.style.top = (parseInt(imgStyles.borderTopWidth) + 3) + 'px';
                        a.style.right = (parseInt(imgStyles.borderRightWidth) + 3) + 'px';
                        img.style.position = "relative";
                        img.appendChild(a);
                    }
                })(mglines[i]);
            }
        };
        self.initRejectStyles = function () {
            if (self.isInsertedRejectStyles) {
                return;
            }
            var rejectStyles = '\ div.mcimg a.close-informer {\ width: 14px;\ height: 14px;\ background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzI0ODBDMzY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI0ODBDNDY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MjQ4MEMxNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3MjQ4MEMyNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uNcpEQAAAHxJREFUeNqckgEKwCAIRe3fYjfKc2zX6hydaLRbbDnGkLDIPggl/5lKIcbIRJRqbDSnUmOHE6LPm+CEfhj6lnN+o5WVh1VOm6xColCXc/cgLWYev9gaejnQojCab5RDzyDt6RantqoBaz5zq54ZywJ3CXjIwQGd8skfAQYALdQqftYulocAAAAASUVORK5CYIJ0ZW50Ij4NCiA8ZGl2IGNsYXNzPSJjb250ZW50LWNvbnRhaW5lciI+PGZpZWxkc2V0Pg0KICA8aDI+NTAyIC0gV2ViIHNlcnZlciByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHkgc2VydmVyLjwvaDI+DQogIDxoMz5UaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yLCBhbmQgaXQgY2Fubm90IGJlIGRpc3BsYXllZC4gV2hlbiB0aGUgV2ViIHNlcnZlciAod2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSkgY29udGFjdGVkIHRoZSB1cHN0cmVhbSBjb250ZW50IHNlcnZlciwgaXQgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSBjb250ZW50IHNlcnZlci48L2gzPg0KIDwvZmllbGRzZXQ+PC9kaXY+DQo8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg==");\ display: block;\ opacity: 0;\ position: absolute;\ right: 3px;\ top: 3px;\ z-index: 1;\ cursor: pointer;\ }\ div.mgline:hover a.close-informer {\ opacity: 0.7;\ -moz-transition: all 0.3s ease-out;\ -o-transition: all 0.3s ease-out;\ -webkit-transition: all 0.3s ease-out;\ -ms-transition: all 0.3s ease-out;\ transition: all 0.3s ease-out;\ }\ div.mgline a.close-informer:hover {\ opacity: 1;\ -moz-transition: all 0.3s ease-out;\ -o-transition: all 0.3s ease-out;\ -webkit-transition: all 0.3s ease-out;\ -ms-transition: all 0.3s ease-out;\ transition: all 0.3s ease-out;\ }\ div.mcimg {\ position: relative;\ display: inline-block\ }\ div.image-with-price {\ position: relative;\ }\ .mgline .image-container {\ width: auto;\ margin: 0 auto;\ display: table;\ position: relative;\ }';
            self.styles += rejectStyles;
            self.isInsertedRejectStyles = true;
        };
        self.PP.push('initRejectStyles');
    };
    this['MarketGidCRejectBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Reject'] = 'MarketGidCRejectBlock141665';
    this['MarketGidCExternalCountersBlock141665'] = function (self) {
        self.YZ;
        self.TK.push("IH");
        var BB = function (event) {
            if (self.YZ && event.target.className.indexOf('Button') === -1) {
                return;
            }
            if (!event) {
                event = self.DR.event;
            }
            if (!event.target) {
                event.target = event.srcElement;
            }
            var element = event.target;
            if (element.tagName != 'A') {
                element = self.CI(element);
                if (null == element) {
                    return;
                }
            }
            if (!element.hasAttribute('data-hash')) {
                return;
            }
            var hash = element.getAttribute('data-hash');
            if (!self.ML[hash]) {
                return;
            }
            if (!Array.isArray(self.ML[hash]['clicktrackers'])) {
                return;
            }
            var clicktrackers = self.ML[hash]['clicktrackers'];
            if (!clicktrackers.length) {
                return;
            }
            for (var i = 0; i < clicktrackers.length; i++) {
                var img = self.DR.document.createElement('IMG');
                img.src = clicktrackers[i];
            }
        };
        self.IH = function (element) {
            if (typeof element == 'undefined') {
                element = self.root;
            }
            self.addEvent(element, 'click', BB);
        };
    };
    this['MarketGidCExternalCountersBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['ExternalCounters'] = 'MarketGidCExternalCountersBlock141665';
    MarketGidCCriteoBlock141665 = function (self) {
        self.DR.LoadCriteoAllPlaces = function (params) {
            self.criteoNurl = params.l;
            var s = self.DR.document.createElement('script');
            self.criteoParams = params.pos;
            s.type = 'text/javascript';
            s.src = '//cas.criteo.com/delivery/0.1/napi.jsonp?zoneid=' + params.z + '&callback=ProcessCriteo&publisherid=' + self.blockId;
            var h = self.DR.document.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s, h);
        };
        self.DR.ProcessCriteo = function (response) {
            if (response.response_status === 0 && response.products.length >= self.json.length) {
                self.BG = 0;
                self.root.innerHTML = '';
                self.iteration = 1;
                self.VV = [];
                var data = self.json;
                var advDomain = "";
                if ("advertiser" in response && "domain" in response.advertiser) {
                    advDomain = response.advertiser.domain;
                }
                var host = 7 === 1 ? 'marketgid' : 'mgid';
                var placements = response.products.length;
                for (var k = 0; k <= placements; k++) {
                    self.criteoPlacement = k;
                    if (data[k] == undefined) {
                        continue;
                    }
                    data[self.criteoPlacement][0] = advDomain;
                    data[self.criteoPlacement][1] = k + 1;
                    data[self.criteoPlacement][3] = response.products[k].title;
                    data[self.criteoPlacement][4] = response.products[k].description;
                    data[self.criteoPlacement][7] = response.products[k].price;
                    data[self.criteoPlacement][8] = "";
                    data[self.criteoPlacement][10].i = "//imggprx." + host + ".com/i/resize?img=" + encodeURIComponent(response.products[k].image.url) + "&size=14";
                    data[self.criteoPlacement][10].l = self.criteoParams[k] + "&u=" + self.IL(response.products[k].click_url);
                    data[self.criteoPlacement][10].adc = [];
                }
                self.MarketGidLoadNews(data);
                for (var k = 0; k <= placements; k++) {
                    self.criteoPlacement = k;
                    if (data[k] == undefined) {
                        continue;
                    }
                    if (response.hasOwnProperty('privacy') && response.privacy.hasOwnProperty('optout_click_url') && response.privacy.hasOwnProperty('optout_image_url')) {
                        var imgElement = self.root.getElementsByClassName('mgline')[self.criteoPlacement].getElementsByClassName('mcimg')[0];
                        var privacyDiv = self.DR.document.createElement('DIV');
                        privacyDiv.style.position = 'absolute';
                        privacyDiv.style.zIndex = '100';
                        privacyDiv.style.left = '90%';
                        privacyDiv.style.top = '0';
                        var privacyHref = self.DR.document.createElement('A');
                        privacyHref.setAttribute('href', response.privacy.optout_click_url);
                        privacyHref.setAttribute('target', "_blank");
                        var privacyImg = self.DR.document.createElement('IMG');
                        privacyImg.setAttribute('src', response.privacy.optout_image_url);
                        privacyHref.appendChild(privacyImg);
                        privacyDiv.appendChild(privacyHref);
                        imgElement.appendChild(privacyDiv);
                        if (response.hasOwnProperty('impression_pixels')) {
                            for (var i in response.impression_pixels) {
                                if (response.impression_pixels[i].hasOwnProperty('url')) {
                                    var im = self.DR.document.createElement('IMG');
                                    im.src = response.impression_pixels[i].url;
                                    self.DR.document.body.appendChild(im)
                                }
                            }
                        }
                        var n = self.DR.document.createElement('IMG');
                        n.src = self.criteoNurl;
                        self.DR.document.body.appendChild(n);
                    }
                }
            }
        };
    };
    this['MarketGidCCriteoBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Criteo'] = 'MarketGidCCriteoBlock141665';
    MarketGidCSendDimensionsBlock141665 = function (self) {
        self.blankImage = "data:image/gif;base64,R0lGODlhcgHIAPAAAAAAAAAAACH5BAEAAAAALAAAAAByAcgAAAL+hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8Z6jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYSpFAAAOw==";
        self.precalcRect = {};
        self.updatePrecalcRect = function () {
            self.SP = "goods";
            self.QE = '0';
            self.fakeMode = true;
            var realRoot = self.root;
            var cnt = self.DR.document.createElement('div');
            var newRoot = self.DR.document.createElement('div');
            newRoot.id = self.root.id;
            self.root.id += "_";
            cnt.appendChild(newRoot);
            self.root.appendChild(cnt);
            self.root = newRoot;
            realRoot.style.height = "0px";
            realRoot.style.overflow = "hidden";
            var countNews = 4;
            var lorem = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
            var data = [];
            for (var i = 1; i <= countNews; i++) {
                data.push(['', i, '', lorem, lorem, '', '', '', '', '', {i: self.blankImage}]);
            }
            self.MarketGidLoadNews(data);
            var h = self.XB();
            self.fixGetElementsByClassNameHandler(self.root);
            var widgetRect = self.root.getBoundingClientRect();
            if (self.root.getElementsByClassName("mgbox")[0]) {
                widgetRect = self.root.getElementsByClassName("mgbox")[0].getBoundingClientRect();
            }
            self.precalcRect.width = parseInt(widgetRect.width ? widgetRect.width : widgetRect.right - widgetRect.left);
            self.precalcRect.height = parseInt(widgetRect.height ? widgetRect.height : widgetRect.bottom - widgetRect.top);
            self.precalcRect.top = widgetRect.top;
            self.precalcRect.bottom = widgetRect.bottom;
            self.requestParams.w = "w=" + self.precalcRect.width;
            self.requestParams.h = "h=" + self.precalcRect.height;
            var cols = 0;
            var elx = self.root.getElementsByClassName('mgline');
            for (i = 0; i < elx.length; i++) {
                var rect = elx[i].getBoundingClientRect();
                if (prepTop != undefined && prepTop < rect.top) {
                    cols = i;
                    break;
                }
                var prepTop = rect.top;
            }
            if (cols == 0) {
                cols = elx.length;
            }
            self.requestParams.cols = "cols=" + cols;
            self.fakeMode = false;
            self.root = realRoot;
            self.root.removeChild(cnt);
            self.root.id = self.root.id.substr(0, self.root.id.length - 1);
            self.root.style.height = "auto";
            self.root.style.overflow = "visible";
            self.SP = "";
            self.QE = "";
            self.BG = 0;
            self.template = "";
            self.iteration = 1;
            self.VV = {};
        };
        this.HW.push("updatePrecalcRect");
    };
    this['MarketGidCSendDimensionsBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['SendDimensions'] = 'MarketGidCSendDimensionsBlock141665';
    MarketGidCMonitorBlock141665 = function (self) {
        this.TK.push("monitorInit");
        this.shownBlocks = {};
        this.monitorTimeout = null;
        this.isFirstCappingRequest = true;
        this.isFirstByType = {};
        this.monitorInit = function () {
            //console.log('monitorInit');
            var regex = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/;
            if (!this.monitorTimeout) {
                (function () {
                    var newBlocks = {};
                    var viewportSize = self.utils.getViewportSize();
                    var images = self.root.getElementsByTagName('IMG');
                    for (var i = 0; i < images.length; i++) {
                        if (self.isElementInViewport(images[i])) {
                            var res = regex.exec(images[i].src);
                            if (!res) {
                                if (images[i].dataset.i) {
                                    res = [];
                                    res[1] = images[i].dataset.i;
                                }
                            }
                            if (res && res[1] && !self.shownBlocks[res[1]]) {
                                var teaserBlock = self.getParentTeaserBlock(images[i]);
                                var imageRect = self.utils.getRect(images[i], true);
                                if (teaserBlock) {
                                    var teaserDims = self.utils.getRect(teaserBlock, true);
                                    newBlocks[res[1]] = {
                                        width: Math.round(imageRect.width),
                                        height: Math.round(imageRect.height),
                                        atf: teaserDims.top < viewportSize.height,
                                        align: self.getTeaserAlign(teaserDims),
                                        desc: self.isTeaserElementVisible(teaserBlock, 'mcdesc'),
                                        price: self.isTeaserElementVisible(teaserBlock, 'mcprice'),
                                        domain: self.isTeaserElementVisible(teaserBlock, 'mcdomain')
                                    };
                                } else {
                                    newBlocks[res[1]] = {
                                        width: Math.round(imageRect.width),
                                        height: Math.round(imageRect.height),
                                        desc: false,
                                        price: false,
                                        domain: false
                                    };
                                }
                                self.shownBlocks[res[1]] = 1;
                            }
                        }
                    }
                    self.prepareCappingData(newBlocks);
                    self.monitorTimeout = setTimeout(arguments.callee, 1000);
                })();
            }
        };
        this.prepareCappingData = function (blocks) {
            var typePrefix = "&t=" + (self.SP == 'news' ? "N" : "G");
            var data = "";
            var counter = 0;
            for (var i in blocks) {
                var prefix = blocks[i].width + "|" + blocks[i].height + "|" + ( (blocks[i].desc ? 1 : 0) + (blocks[i].price ? 2 : 0) + (blocks[i].domain ? 4 : 0) + (blocks[i].atf ? 8 : 0) + (blocks[i].align == 'right' ? 16 : 0) + (blocks[i].align == 'left' ? 32 : 0)) + "|";
                var showHash = self.teaserHashes[i];
                data += "&v=" + prefix + showHash;
                if (self.ML[showHash] && self.ML[showHash]['coopType']) {
                    var type = self.ML[showHash]['coopType'];
                    if (!self.isFirstByType[type]) {
                        data += '&f' + type + "=1";
                        self.isFirstByType[type] = 1;
                    }
                }
                counter++;
                if (counter > 20) {
                    self.sendCappingData(typePrefix + data);
                    data = "";
                    counter = 0;
                }
            }
            if (data != "") {
                self.sendCappingData(typePrefix + data);
            }
        };
        this.sendCappingData = function (data) {
            var img = document.createElement('IMG');
            if (self.isFirstCappingRequest) {
                data = "&f=1" + data;
                self.isFirstCappingRequest = false;
                if (self.servicerData && self.servicerData.tt) {
                    data += '&tt=' + self.servicerData.tt;
                }
                if (self.servicerData && self.servicerData.ts) {
                    data += '&ts=' + self.servicerData.ts;
                }
            }
            data += "&cid=" + '141665';
            if (self.servicerData && self.servicerData.h2) {
                data += '&h2=' + self.servicerData.h2;
            }
            var scriptSrc = "//c." + (self.QE == 2 ? "adskeeper.co.uk" : "mgid.com") + "/c?pv=2" + data;
            img.src = scriptSrc;
            img.onerror = function () {
                self.mg_ws.onmessage = self.mg_ws_messageHandler;
                self.sendMessage('c|' + scriptSrc);
            };
        };
        this.isElementInViewport = function (el) {
            var rect = self.utils.getRect(el, false);
            var viewport = self.utils.getViewportSize();
            return ( rect.height > 0 && rect.width > 0 && rect.top >= 0 && rect.left >= 0 && rect.bottom <= viewport.height && rect.right <= viewport.width );
        };
        this.getParentTeaserBlock = function (el) {
            var current = el;
            while (current != self.root && current != self.DR) {
                if (current.className.indexOf("mgline") >= 0) {
                    return current;
                } else {
                    current = current.parentNode;
                }
            }
            return null;
        };
        this.isTeaserElementVisible = function (el, className) {
            self.fixGetElementsByClassNameHandler(el);
            var elements = el.getElementsByClassName(className);
            if (elements.length > 0) {
                var dims = elements[0].getBoundingClientRect();
                if (dims.right - dims == 0 || dims.bottom - dims.top == 0) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        };
        this.getTeaserAlign = function (teaserDims) {
            var bodyWidth = self.DR.document.body.scrollWidth;
            if (teaserDims.right < 0.3 * bodyWidth) {
                return 'left';
            } else if (teaserDims.left >= 0.7 * bodyWidth) {
                return 'right'
            } else {
                return 'center';
            }
        };
    };
    this['MarketGidCMonitorBlock141665'].call(this['MarketGidInfC141665'], this['MarketGidInfC141665']);
    this['MarketGidInfC141665']['funcBlocks']['Monitor'] = 'MarketGidCMonitorBlock141665';
    MarketGidInfC141665.init();
    MarketGidInfC141665.start();
}
