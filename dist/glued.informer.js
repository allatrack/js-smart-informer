// Источник: https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
;(function () {
    // helpers
    var regExp = function (name) {
        return new RegExp('(^| )' + name + '( |$)');
    };
    var forEach = function (list, fn, scope) {
        for (var i = 0; i < list.length; i++) {
            fn.call(scope, list[i]);
        }
    };

    // class list object with basic methods
    function ClassList(element) {
        this.element = element;
    }

    ClassList.prototype = {
        add: function () {
            forEach(arguments, function (name) {
                if (!this.contains(name)) {
                    this.element.className += ' ' + name;
                }
            }, this);
        },
        remove: function () {
            forEach(arguments, function (name) {
                this.element.className =
                    this.element.className.replace(regExp(name), '');
            }, this);
        },
        toggle: function (name) {
            return this.contains(name)
                ? (this.remove(name), false) : (this.add(name), true);
        },
        contains: function (name) {
            return regExp(name).test(this.element.className);
        },
        // bonus..
        replace: function (oldName, newName) {
            this.remove(oldName), this.add(newName);
        }
    };

    // IE8/9, Safari
    if (!('classList' in Element.prototype)) {
        Object.defineProperty(Element.prototype, 'classList', {
            get: function () {
                return new ClassList(this);
            }
        });
    }

    // replace() support for others
    if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
        DOMTokenList.prototype.replace = ClassList.prototype.replace;
    }
})();
"document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || !function (t) {
    "use strict";
    if ("Element" in t) {
        var e = "classList", n = "prototype", i = t.Element[n], s = Object, r = String[n].trim || function () {return this.replace(/^\s+|\s+$/g, "")}, o = Array[n].indexOf || function (t) {
                for (var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t)return e;
                return -1
            }, a = function (t, e) {this.name = t, this.code = DOMException[t], this.message = e}, c = function (t, e) {
            if ("" === e)throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
            if (/\s/.test(e))throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
            return o.call(t, e)
        }, l = function (t) {
            for (var e = r.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], i = 0, s = n.length; s > i; i++)this.push(n[i]);
            this._updateClassName = function () {t.setAttribute("class", "" + this)}
        }, u = l[n] = [], h = function () {return new l(this)};
        if (a[n] = Error[n], u.item = function (t) {return this[t] || null}, u.contains = function (t) {return t += "", -1 !== c(this, t)}, u.add = function () {
                var t, e = arguments, n = 0, i = e.length, s = !1;
                do t = e[n] + "", -1 === c(this, t) && (this.push(t), s = !0); while (++n < i);
                s && this._updateClassName()
            }, u.remove = function () {
                var t, e, n = arguments, i = 0, s = n.length, r = !1;
                do for (t = n[i] + "", e = c(this, t); -1 !== e;)this.splice(e, 1), r = !0, e = c(this, t); while (++i < s);
                r && this._updateClassName()
            }, u.toggle = function (t, e) {
                t += "";
                var n = this.contains(t), i = n ? e !== !0 && "remove" : e !== !1 && "add";
                return i && this[i](t), e === !0 || e === !1 ? e : !n
            }, u.toString = function () {return this.join(" ")}, s.defineProperty) {
            var f = {get: h, enumerable: !0, configurable: !0};
            try {
                s.defineProperty(i, e, f)
            } catch (g) {
                (void 0 === g.number || -2146823252 === g.number) && (f.enumerable = !1, s.defineProperty(i, e, f))
            }
        } else s[n].__defineGetter__ && i.__defineGetter__(e, h)
    }
}(self), function () {
    "use strict";
    var t = document.createElement("_");
    if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
        var e = function (t) {
            var e = DOMTokenList.prototype[t];
            DOMTokenList.prototype[t] = function (t) {
                var n, i = arguments.length;
                for (n = 0; i > n; n++)t = arguments[n], e.call(this, t)
            }
        };
        e("add"), e("remove")
    }
    if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
        var n = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function (t, e) {return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t)}
    }
    t = null
}());

// For internet explorer only
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
if (!Array.isHTMLCollection) {
    Array.isHTMLCollection = function (arg) {
        return Object.prototype.toString.call(arg) === '[object HTMLCollection]';
    };
}
if (![].includes) {
    Array.prototype.includes = function (searchElement/*, fromIndex*/) {
        'use strict';
        var O = Object(this);
        var len = parseInt(O.length) || 0;
        if (len === 0) {
            return false;
        }
        var n = parseInt(arguments[1]) || 0;
        var k;
        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) {
                k = 0;
            }
        }
        while (k < len) {
            var currentElement = O[k];
            if (searchElement === currentElement ||
                (searchElement !== searchElement && currentElement !== currentElement)
            ) {
                return true;
            }
            k++;
        }
        return false;
    };
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var k;
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = +fromIndex || 0;
        if (Math.abs(n) === Infinity) {
            n = 0;
        }
        if (n >= len) {
            return -1;
        }
        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        while (k < len) {
            var kValue;
            if (k in O && O[k] === searchElement) {
                return k;
            }
            k++;
        }
        return -1;
    };
}
/*eslint-env es6:false*/
/*
 * Copyright (c) 2010 Arc90 Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * This code is heavily based on Arc90's readability.js (1.7.1) script
 * available at: http://code.google.com/p/arc90labs-readability
 */

/**
 * Public constructor.
 * @param {Object}       uri     The URI descriptor object.
 * @param {HTMLDocument} doc     The document to parse.
 * @param {Object}       options The options object.
 */
function Readability(uri, doc, options) {
    options = options || {};

    this._uri = uri;
    this._doc = doc;
    this._biggestFrame = false;
    this._articleTitle = null;
    this._articleByline = null;
    this._articleDir = null;

    // Configureable options
    this._debug = !!options.debug;
    this._maxElemsToParse = options.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE;
    this._nbTopCandidates = options.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES;
    this._maxPages = options.maxPages || this.DEFAULT_MAX_PAGES;

    // Start with all flags set
    this._flags = this.FLAG_STRIP_UNLIKELYS |
        this.FLAG_WEIGHT_CLASSES |
        this.FLAG_CLEAN_CONDITIONALLY;

    // The list of pages we've parsed in this call of readability,
    // for autopaging. As a key store for easier searching.
    this._parsedPages = {};

    // A list of the ETag headers of pages we've parsed, in case they happen to match,
    // we'll know it's a duplicate.
    this._pageETags = {};

    // Make an AJAX request for each page and append it to the document.
    this._curPageNum = 1;

    var logEl;

    // Control whether log messages are sent to the console
    if (this._debug) {
        logEl = function (e) {
            var rv = e.nodeName + " ";
            if (e.nodeType == e.TEXT_NODE) {
                return rv + '("' + e.textContent + '")';
            }
            var classDesc = e.className && ("." + e.className.replace(/ /g, "."));
            var elDesc = "";
            if (e.id)
                elDesc = "(#" + e.id + classDesc + ")";
            else if (classDesc)
                elDesc = "(" + classDesc + ")";
            return rv + elDesc;
        };
        this.log = function () {
            if (typeof dump !== "undefined") {
                var msg = Array.prototype.map.call(arguments, function (x) {
                    return (x && x.nodeName) ? logEl(x) : x;
                }).join(" ");
                dump("Reader: (Readability) " + msg + "\n");
            } else if (typeof console !== "undefined") {
                var args = ["Reader: (Readability) "].concat(arguments);
                console.log.apply(console, args);
            }
        };
    } else {
        this.log = function () {};
    }
}

Readability.prototype = {
    FLAG_STRIP_UNLIKELYS: 0x1,
    FLAG_WEIGHT_CLASSES: 0x2,
    FLAG_CLEAN_CONDITIONALLY: 0x4,

    // Max number of nodes supported by this parser. Default: 0 (no limit)
    DEFAULT_MAX_ELEMS_TO_PARSE: 0,

    // The number of top candidates to consider when analysing how
    // tight the competition is among candidates.
    DEFAULT_N_TOP_CANDIDATES: 5,

    // The maximum number of pages to loop through before we call
    // it quits and just show a link.
    DEFAULT_MAX_PAGES: 5,

    // Element tags to score by default.
    DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),

    // All of the regular expressions in use within readability.
    // Defined up here so we don't instantiate them repeatedly in loops.
    REGEXPS: {
        unlikelyCandidates: /banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|foot|header|legends|menu|modal|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
        okMaybeItsACandidate: /and|article|body|column|main|shadow/i,
        positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
        negative: /hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|masthead|media|meta|modal|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
        extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
        byline: /byline|author|dateline|writtenby|p-author/i,
        replaceFonts: /<(\/?)font[^>]*>/gi,
        normalize: /\s{2,}/g,
        videos: /\/\/(www\.)?(dailymotion|youtube|youtube-nocookie|player\.vimeo)\.com/i,
        nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
        prevLink: /(prev|earl|old|new|<|«)/i,
        whitespace: /^\s*$/,
        hasContent: /\S$/,
    },

    DIV_TO_P_ELEMS: ["A", "BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL", "SELECT"],

    ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],

    /**
     * Run any post-process modifications to article content as necessary.
     *
     * @param Element
     * @return void
     **/
    _postProcessContent: function (articleContent) {
        // Readability cannot open relative uris so we convert them to absolute uris.
        this._fixRelativeUris(articleContent);
    },

    /**
     * Iterates over a NodeList, calls `filterFn` for each node and removes node
     * if function returned `true`.
     *
     * If function is not passed, removes all the nodes in node list.
     *
     * @param NodeList nodeList The nodes to operate on
     * @param Function filterFn the function to use as a filter
     * @return void
     */
    _removeNodes: function (nodeList, filterFn) {
        for (var i = nodeList.length - 1; i >= 0; i--) {
            var node = nodeList[i];
            var parentNode = node.parentNode;
            if (parentNode) {
                if (!filterFn || filterFn.call(this, node, i, nodeList)) {
                    parentNode.removeChild(node);
                }
            }
        }
    },

    /**
     * Iterates over a NodeList, and calls _setNodeTag for each node.
     *
     * @param NodeList nodeList The nodes to operate on
     * @param String newTagName the new tag name to use
     * @return void
     */
    _replaceNodeTags: function (nodeList, newTagName) {
        for (var i = nodeList.length - 1; i >= 0; i--) {
            var node = nodeList[i];
            this._setNodeTag(node, newTagName);
        }
    },

    /**
     * Iterate over a NodeList, which doesn't natively fully implement the Array
     * interface.
     *
     * For convenience, the current object context is applied to the provided
     * iterate function.
     *
     * @param  NodeList nodeList The NodeList.
     * @param  Function fn       The iterate function.
     * @return void
     */
    _forEachNode: function (nodeList, fn) {
        Array.prototype.forEach.call(nodeList, fn, this);
    },

    /**
     * Iterate over a NodeList, return true if any of the provided iterate
     * function calls returns true, false otherwise.
     *
     * For convenience, the current object context is applied to the
     * provided iterate function.
     *
     * @param  NodeList nodeList The NodeList.
     * @param  Function fn       The iterate function.
     * @return Boolean
     */
    _someNode: function (nodeList, fn) {
        return Array.prototype.some.call(nodeList, fn, this);
    },

    /**
     * Concat all nodelists passed as arguments.
     *
     * @return ...NodeList
     * @return Array
     */
    _concatNodeLists: function () {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments);
        var nodeLists = args.map(function (list) {
            return slice.call(list);
        });
        return Array.prototype.concat.apply([], nodeLists);
    },

    _getAllNodesWithTag: function (node, tagNames) {
        if (node.querySelectorAll) {
            return node.querySelectorAll(tagNames.join(','));
        }
        return [].concat.apply([], tagNames.map(function (tag) {
            var collection = node.getElementsByTagName(tag);
            return Array.isArray(collection) ? collection : Array.from(collection);
        }));
    },

    /**
     * Converts each <a> and <img> uri in the given element to an absolute URI,
     * ignoring #ref URIs.
     *
     * @param Element
     * @return void
     */
    _fixRelativeUris: function (articleContent) {
        var scheme = this._uri.scheme;
        var prePath = this._uri.prePath;
        var pathBase = this._uri.pathBase;

        function toAbsoluteURI(uri) {
            // If this is already an absolute URI, return it.
            if (/^[a-zA-Z][a-zA-Z0-9\+\-\.]*:/.test(uri))
                return uri;

            // Scheme-rooted relative URI.
            if (uri.substr(0, 2) == "//")
                return scheme + "://" + uri.substr(2);

            // Prepath-rooted relative URI.
            if (uri[0] == "/")
                return prePath + uri;

            // Dotslash relative URI.
            if (uri.indexOf("./") === 0)
                return pathBase + uri.slice(2);

            // Ignore hash URIs:
            if (uri[0] == "#")
                return uri;

            // Standard relative URI; add entire path. pathBase already includes a
            // trailing "/".
            return pathBase + uri;
        }

        var links = articleContent.getElementsByTagName("a");
        this._forEachNode(links, function (link) {
            var href = link.getAttribute("href");
            if (href) {
                // Replace links with javascript: URIs with text content, since
                // they won't work after scripts have been removed from the page.
                if (href.indexOf("javascript:") === 0) {
                    var text = this._doc.createTextNode(link.textContent);
                    link.parentNode.replaceChild(text, link);
                } else {
                    link.setAttribute("href", toAbsoluteURI(href));
                }
            }
        });

        var imgs = articleContent.getElementsByTagName("img");
        this._forEachNode(imgs, function (img) {
            var src = img.getAttribute("src");
            if (src) {
                img.setAttribute("src", toAbsoluteURI(src));
            }
        });
    },

    /**
     * Get the article title as an H1.
     *
     * @return void
     **/
    _getArticleTitle: function () {
        var doc = this._doc;
        var curTitle = "";
        var origTitle = "";

        try {
            curTitle = origTitle = doc.title;

            // If they had an element with id "title" in their HTML
            if (typeof curTitle !== "string")
                curTitle = origTitle = this._getInnerText(doc.getElementsByTagName('title')[0]);
        } catch (e) {/* ignore exceptions setting the title. */
        }

        var titleHadHierarchicalSeparators = false;

        function wordCount(str) {
            return str.split(/\s+/).length;
        }

        // If there's a separator in the title, first remove the final part
        if ((/ [\|\-\\\/>»] /).test(curTitle)) {
            titleHadHierarchicalSeparators = / [\\\/>»] /.test(curTitle);
            curTitle = origTitle.replace(/(.*)[\|\-\\\/>»] .*/gi, '$1');

            // If the resulting title is too short (3 words or fewer), remove
            // the first part instead:
            if (wordCount(curTitle) < 3)
                curTitle = origTitle.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, '$1');
        } else if (curTitle.indexOf(': ') !== -1) {
            // Check if we have an heading containing this exact string, so we
            // could assume it's the full title.
            var headings = this._concatNodeLists(
                doc.getElementsByTagName('h1'),
                doc.getElementsByTagName('h2')
            );
            var match = this._someNode(headings, function (heading) {
                return heading.textContent === curTitle;
            });

            // If we don't, let's extract the title out of the original title string.
            if (!match) {
                curTitle = origTitle.substring(origTitle.lastIndexOf(':') + 1);

                // If the title is now too short, try the first colon instead:
                if (wordCount(curTitle) < 3)
                    curTitle = origTitle.substring(origTitle.indexOf(':') + 1);
            }
        } else if (curTitle.length > 150 || curTitle.length < 15) {
            var hOnes = doc.getElementsByTagName('h1');

            if (hOnes.length === 1)
                curTitle = this._getInnerText(hOnes[0]);
        }

        curTitle = curTitle.trim();
        // If we now have 4 words or fewer as our title, and either no
        // 'hierarchical' separators (\, /, > or ») were found in the original
        // title or we decreased the number of words by more than 1 word, use
        // the original title.
        var curTitleWordCount = wordCount(curTitle);
        if (curTitleWordCount <= 4 &&
            (!titleHadHierarchicalSeparators ||
            curTitleWordCount != wordCount(origTitle.replace(/[\|\-\\\/>»]+/g, "")) - 1)) {
            curTitle = origTitle;
        }

        return curTitle;
    },

    /**
     * Prepare the HTML document for readability to scrape it.
     * This includes things like stripping javascript, CSS, and handling terrible markup.
     *
     * @return void
     **/
    _prepDocument: function () {
        var doc = this._doc;

        // Remove all style tags in head
        this._removeNodes(doc.getElementsByTagName("style"));

        if (doc.body) {
            this._replaceBrs(doc.body);
        }

        this._replaceNodeTags(doc.getElementsByTagName("font"), "SPAN");
    },

    /**
     * Finds the next element, starting from the given node, and ignoring
     * whitespace in between. If the given node is an element, the same node is
     * returned.
     */
    _nextElement: function (node) {
        var next = node;
        while (next
        && (next.nodeType != Node.ELEMENT_NODE)
        && this.REGEXPS.whitespace.test(next.textContent)) {
            next = next.nextSibling;
        }
        return next;
    },

    /**
     * Replaces 2 or more successive <br> elements with a single <p>.
     * Whitespace between <br> elements are ignored. For example:
     *   <div>foo<br>bar<br> <br><br>abc</div>
     * will become:
     *   <div>foo<br>bar<p>abc</p></div>
     */
    _replaceBrs: function (elem) {
        this._forEachNode(this._getAllNodesWithTag(elem, ["br"]), function (br) {
            var next = br.nextSibling;

            // Whether 2 or more <br> elements have been found and replaced with a
            // <p> block.
            var replaced = false;

            // If we find a <br> chain, remove the <br>s until we hit another element
            // or non-whitespace. This leaves behind the first <br> in the chain
            // (which will be replaced with a <p> later).
            while ((next = this._nextElement(next)) && (next.tagName == "BR")) {
                replaced = true;
                var brSibling = next.nextSibling;
                next.parentNode.removeChild(next);
                next = brSibling;
            }

            // If we removed a <br> chain, replace the remaining <br> with a <p>. Add
            // all sibling nodes as children of the <p> until we hit another <br>
            // chain.
            if (replaced) {
                var p = this._doc.createElement("p");
                br.parentNode.replaceChild(p, br);

                next = p.nextSibling;
                while (next) {
                    // If we've hit another <br><br>, we're done adding children to this <p>.
                    if (next.tagName == "BR") {
                        var nextElem = this._nextElement(next);
                        if (nextElem && nextElem.tagName == "BR")
                            break;
                    }

                    // Otherwise, make this node a child of the new <p>.
                    var sibling = next.nextSibling;
                    p.appendChild(next);
                    next = sibling;
                }
            }
        });
    },

    _setNodeTag: function (node, tag) {
        this.log("_setNodeTag", node, tag);
        if (node.__JSDOMParser__) {
            node.localName = tag.toLowerCase();
            node.tagName = tag.toUpperCase();
            return node;
        }

        var replacement = node.ownerDocument.createElement(tag);
        while (node.firstChild) {
            replacement.appendChild(node.firstChild);
        }
        node.parentNode.replaceChild(replacement, node);
        if (node.readability)
            replacement.readability = node.readability;

        for (var i = 0; i < node.attributes.length; i++) {
            replacement.setAttribute(node.attributes[i].name, node.attributes[i].value);
        }
        return replacement;
    },

    /**
     * Prepare the article node for display. Clean out any inline styles,
     * iframes, forms, strip extraneous <p> tags, etc.
     *
     * @param Element
     * @return void
     **/
    _prepArticle: function (articleContent) {
        this._cleanStyles(articleContent);

        // Check for data tables before we continue, to avoid removing items in
        // those tables, which will often be isolated even though they're
        // visually linked to other content-ful elements (text, images, etc.).
        this._markDataTables(articleContent);

        // Clean out junk from the article content
        this._cleanConditionally(articleContent, "form");
        this._cleanConditionally(articleContent, "fieldset");
        this._clean(articleContent, "object");
        this._clean(articleContent, "embed");
        this._clean(articleContent, "h1");
        this._clean(articleContent, "footer");

        // Clean out elements have "share" in their id/class combinations from final top candidates,
        // which means we don't remove the top candidates even they have "share".
        this._forEachNode(articleContent.children, function (topCandidate) {
            this._cleanMatchedNodes(topCandidate, /share/);
        });

        // If there is only one h2 and its text content substantially equals article title,
        // they are probably using it as a header and not a subheader,
        // so remove it since we already extract the title separately.
        var h2 = articleContent.getElementsByTagName('h2');
        if (h2.length === 1) {
            var lengthSimilarRate = (h2[0].textContent.length - this._articleTitle.length) / this._articleTitle.length;
            if (Math.abs(lengthSimilarRate) < 0.5) {
                var titlesMatch = false;
                if (lengthSimilarRate > 0) {
                    titlesMatch = h2[0].textContent.includes(this._articleTitle);
                } else {
                    titlesMatch = this._articleTitle.includes(h2[0].textContent);
                }
                if (titlesMatch) {
                    this._clean(articleContent, "h2");
                }
            }
        }

        this._clean(articleContent, "iframe");
        this._clean(articleContent, "input");
        this._clean(articleContent, "textarea");
        this._clean(articleContent, "select");
        this._clean(articleContent, "button");
        this._cleanHeaders(articleContent);

        // Do these last as the previous stuff may have removed junk
        // that will affect these
        this._cleanConditionally(articleContent, "table");
        this._cleanConditionally(articleContent, "ul");
        this._cleanConditionally(articleContent, "div");

        // Remove extra paragraphs
        this._removeNodes(articleContent.getElementsByTagName('p'), function (paragraph) {
            var imgCount = paragraph.getElementsByTagName('img').length;
            var embedCount = paragraph.getElementsByTagName('embed').length;
            var objectCount = paragraph.getElementsByTagName('object').length;
            // At this point, nasty iframes have been removed, only remain embedded video ones.
            var iframeCount = paragraph.getElementsByTagName('iframe').length;
            var totalCount = imgCount + embedCount + objectCount + iframeCount;

            return totalCount === 0 && !this._getInnerText(paragraph, false);
        });

        this._forEachNode(this._getAllNodesWithTag(articleContent, ["br"]), function (br) {
            var next = this._nextElement(br.nextSibling);
            if (next && next.tagName == "P")
                br.parentNode.removeChild(br);
        });
    },

    /**
     * Initialize a node with the readability object. Also checks the
     * className/id for special names to add to its score.
     *
     * @param Element
     * @return void
     **/
    _initializeNode: function (node) {
        node.readability = {"contentScore": 0};

        switch (node.tagName) {
            case 'DIV':
                node.readability.contentScore += 5;
                break;

            case 'PRE':
            case 'TD':
            case 'BLOCKQUOTE':
                node.readability.contentScore += 3;
                break;

            case 'ADDRESS':
            case 'OL':
            case 'UL':
            case 'DL':
            case 'DD':
            case 'DT':
            case 'LI':
            case 'FORM':
                node.readability.contentScore -= 3;
                break;

            case 'H1':
            case 'H2':
            case 'H3':
            case 'H4':
            case 'H5':
            case 'H6':
            case 'TH':
                node.readability.contentScore -= 5;
                break;
        }

        node.readability.contentScore += this._getClassWeight(node);
    },

    _removeAndGetNext: function (node) {
        var nextNode = this._getNextNode(node, true);
        node.parentNode.removeChild(node);
        return nextNode;
    },

    /**
     * Traverse the DOM from node to node, starting at the node passed in.
     * Pass true for the second parameter to indicate this node itself
     * (and its kids) are going away, and we want the next node over.
     *
     * Calling this in a loop will traverse the DOM depth-first.
     */
    _getNextNode: function (node, ignoreSelfAndKids) {
        // First check for kids if those aren't being ignored
        if (!ignoreSelfAndKids && node.firstElementChild) {
            return node.firstElementChild;
        }
        // Then for siblings...
        if (node.nextElementSibling) {
            return node.nextElementSibling;
        }
        // And finally, move up the parent chain *and* find a sibling
        // (because this is depth-first traversal, we will have already
        // seen the parent nodes themselves).
        do {
            node = node.parentNode;
        } while (node && !node.nextElementSibling);
        return node && node.nextElementSibling;
    },

    /**
     * Like _getNextNode, but for DOM implementations with no
     * firstElementChild/nextElementSibling functionality...
     */
    _getNextNodeNoElementProperties: function (node, ignoreSelfAndKids) {
        function nextSiblingEl(n) {
            do {
                n = n.nextSibling;
            } while (n && n.nodeType !== n.ELEMENT_NODE);
            return n;
        }

        // First check for kids if those aren't being ignored
        if (!ignoreSelfAndKids && node.children[0]) {
            return node.children[0];
        }
        // Then for siblings...
        var next = nextSiblingEl(node);
        if (next) {
            return next;
        }
        // And finally, move up the parent chain *and* find a sibling
        // (because this is depth-first traversal, we will have already
        // seen the parent nodes themselves).
        do {
            node = node.parentNode;
            if (node)
                next = nextSiblingEl(node);
        } while (node && !next);
        return node && next;
    },

    _checkByline: function (node, matchString) {
        if (this._articleByline) {
            return false;
        }

        if (node.getAttribute !== undefined) {
            var rel = node.getAttribute("rel");
        }

        if ((rel === "author" || this.REGEXPS.byline.test(matchString)) && this._isValidByline(node.textContent)) {
            this._articleByline = node.textContent.trim();
            return true;
        }

        return false;
    },

    _getNodeAncestors: function (node, maxDepth) {
        maxDepth = maxDepth || 0;
        var i = 0, ancestors = [];
        while (node.parentNode) {
            ancestors.push(node.parentNode);
            if (maxDepth && ++i === maxDepth)
                break;
            node = node.parentNode;
        }
        return ancestors;
    },

    /***
     * grabArticle - Using a variety of metrics (content score, classname, element types),
     * find the content that is most likely to be the stuff a user wants to read.
     * Then return it wrapped up in a div.
     *
     * @param page a document to run upon. Needs to be a full document, complete with body.
     * @return Element
     **/
    _grabArticle: function (page) {
        this.log("**** grabArticle ****");
        var doc = this._doc;
        var isPaging = (page !== null ? true : false);
        page = page ? page : this._doc.body;

        // We can't grab an article if we don't have a page!
        if (!page) {
            this.log("No body found in document. Abort.");
            return null;
        }

        var pageCacheHtml = page.innerHTML;

        while (true) {
            var stripUnlikelyCandidates = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS);

            // First, node prepping. Trash nodes that look cruddy (like ones with the
            // class name "comment", etc), and turn divs into P tags where they have been
            // used inappropriately (as in, where they contain no other block level elements.)
            var elementsToScore = [];
            var node = this._doc.documentElement;

            while (node) {
                var matchString = node.className + " " + node.id;

                // Check to see if this node is a byline, and remove it if it is.
                if (this._checkByline(node, matchString)) {
                    node = this._removeAndGetNext(node);
                    continue;
                }

                // Remove unlikely candidates
                if (stripUnlikelyCandidates) {
                    if (this.REGEXPS.unlikelyCandidates.test(matchString) && !this.REGEXPS.okMaybeItsACandidate.test(matchString) &&
                        node.tagName !== "BODY" &&
                        node.tagName !== "A") {
                        this.log("Removing unlikely candidate - " + matchString);
                        node = this._removeAndGetNext(node);
                        continue;
                    }
                }

                // Remove DIV, SECTION, and HEADER nodes without any content(e.g. text, image, video, or iframe).
                if ((node.tagName === "DIV" || node.tagName === "SECTION" || node.tagName === "HEADER" ||
                    node.tagName === "H1" || node.tagName === "H2" || node.tagName === "H3" ||
                    node.tagName === "H4" || node.tagName === "H5" || node.tagName === "H6") &&
                    this._isElementWithoutContent(node)) {
                    node = this._removeAndGetNext(node);
                    continue;
                }

                if (this.DEFAULT_TAGS_TO_SCORE.indexOf(node.tagName) !== -1) {
                    elementsToScore.push(node);
                }

                // Turn all divs that don't have children block level elements into p's
                if (node.tagName === "DIV") {
                    // Sites like http://mobile.slate.com encloses each paragraph with a DIV
                    // element. DIVs with only a P element inside and no text content can be
                    // safely converted into plain P elements to avoid confusing the scoring
                    // algorithm with DIVs with are, in practice, paragraphs.
                    if (this._hasSinglePInsideElement(node)) {
                        var newNode = node.children[0];
                        node.parentNode.replaceChild(newNode, node);
                        node = newNode;
                    } else if (!this._hasChildBlockElement(node)) {
                        node = this._setNodeTag(node, "P");
                        elementsToScore.push(node);
                    } else {
                        // EXPERIMENTAL
                        this._forEachNode(node.childNodes, function (childNode) {
                            if (childNode.nodeType === Node.TEXT_NODE && childNode.textContent.trim().length > 0) {
                                var p = doc.createElement('p');
                                p.textContent = childNode.textContent;
                                p.style.display = 'inline';
                                p.className = 'readability-styled';
                                node.replaceChild(p, childNode);
                            }
                        });
                    }
                }
                node = this._getNextNode(node);
            }

            /**
             * Loop through all paragraphs, and assign a score to them based on how content-y they look.
             * Then add their score to their parent node.
             *
             * A score is determined by things like number of commas, class names, etc. Maybe eventually link density.
             **/
            var candidates = [];
            this._forEachNode(elementsToScore, function (elementToScore) {
                if (!elementToScore.parentNode || typeof(elementToScore.parentNode.tagName) === 'undefined')
                    return;

                // If this paragraph is less than 25 characters, don't even count it.
                var innerText = this._getInnerText(elementToScore);
                if (innerText.length < 25)
                    return;

                // Exclude nodes with no ancestor.
                var ancestors = this._getNodeAncestors(elementToScore, 3);
                if (ancestors.length === 0)
                    return;

                var contentScore = 0;

                // Add a point for the paragraph itself as a base.
                contentScore += 1;

                // Add points for any commas within this paragraph.
                contentScore += innerText.split(',').length;

                // For every 100 characters in this paragraph, add another point. Up to 3 points.
                contentScore += Math.min(Math.floor(innerText.length / 100), 3);

                // Initialize and score ancestors.
                this._forEachNode(ancestors, function (ancestor, level) {
                    if (!ancestor.tagName)
                        return;

                    if (typeof(ancestor.readability) === 'undefined') {
                        this._initializeNode(ancestor);
                        candidates.push(ancestor);
                    }

                    // Node score divider:
                    // - parent:             1 (no division)
                    // - grandparent:        2
                    // - great grandparent+: ancestor level * 3
                    if (level === 0)
                        var scoreDivider = 1;
                    else if (level === 1)
                        scoreDivider = 2;
                    else
                        scoreDivider = level * 3;
                    ancestor.readability.contentScore += contentScore / scoreDivider;
                });
            });

            // After we've calculated scores, loop through all of the possible
            // candidate nodes we found and find the one with the highest score.
            var topCandidates = [];
            for (var c = 0, cl = candidates.length; c < cl; c += 1) {
                var candidate = candidates[c];

                // Scale the final candidates score based on link density. Good content
                // should have a relatively small link density (5% or less) and be mostly
                // unaffected by this operation.
                var candidateScore = candidate.readability.contentScore * (1 - this._getLinkDensity(candidate));
                candidate.readability.contentScore = candidateScore;

                this.log('Candidate:', candidate, "with score " + candidateScore);

                for (var t = 0; t < this._nbTopCandidates; t++) {
                    var aTopCandidate = topCandidates[t];

                    if (!aTopCandidate || candidateScore > aTopCandidate.readability.contentScore) {
                        topCandidates.splice(t, 0, candidate);
                        if (topCandidates.length > this._nbTopCandidates)
                            topCandidates.pop();
                        break;
                    }
                }
            }

            var topCandidate = topCandidates[0] || null;
            var neededToCreateTopCandidate = false;
            var parentOfTopCandidate;

            // If we still have no top candidate, just use the body as a last resort.
            // We also have to copy the body node so it is something we can modify.
            if (topCandidate === null || topCandidate.tagName === "BODY") {
                // Move all of the page's children into topCandidate
                topCandidate = doc.createElement("DIV");
                neededToCreateTopCandidate = true;
                // Move everything (not just elements, also text nodes etc.) into the container
                // so we even include text directly in the body:
                var kids = page.childNodes;

                while (kids.length) {
                    this.log("Moving child out:", kids[0]);
                    topCandidate.appendChild(kids[0]);
                }

                page.appendChild(topCandidate);

                this._initializeNode(topCandidate);
            } else if (topCandidate) {
                // Find a better top candidate node if it contains (at least three) nodes which belong to `topCandidates` array
                // and whose scores are quite closed with current `topCandidate` node.
                var alternativeCandidateAncestors = [];
                for (var i = 1; i < topCandidates.length; i++) {
                    if (topCandidates[i].readability.contentScore / topCandidate.readability.contentScore >= 0.75) {
                        alternativeCandidateAncestors.push(this._getNodeAncestors(topCandidates[i]));
                    }
                }
                var MINIMUM_TOPCANDIDATES = 3;
                if (alternativeCandidateAncestors.length >= MINIMUM_TOPCANDIDATES) {
                    parentOfTopCandidate = topCandidate.parentNode;
                    while (parentOfTopCandidate.tagName !== "BODY") {
                        var listsContainingThisAncestor = 0;
                        for (var ancestorIndex = 0; ancestorIndex < alternativeCandidateAncestors.length && listsContainingThisAncestor < MINIMUM_TOPCANDIDATES; ancestorIndex++) {
                            listsContainingThisAncestor += Number(alternativeCandidateAncestors[ancestorIndex].includes(parentOfTopCandidate));
                        }
                        if (listsContainingThisAncestor >= MINIMUM_TOPCANDIDATES) {
                            topCandidate = parentOfTopCandidate;
                            break;
                        }
                        parentOfTopCandidate = parentOfTopCandidate.parentNode;
                    }
                }
                if (!topCandidate.readability) {
                    this._initializeNode(topCandidate);
                }

                // Because of our bonus system, parents of candidates might have scores
                // themselves. They get half of the node. There won't be nodes with higher
                // scores than our topCandidate, but if we see the score going *up* in the first
                // few steps up the tree, that's a decent sign that there might be more content
                // lurking in other places that we want to unify in. The sibling stuff
                // below does some of that - but only if we've looked high enough up the DOM
                // tree.
                parentOfTopCandidate = topCandidate.parentNode;
                var lastScore = topCandidate.readability.contentScore;
                // The scores shouldn't get too low.
                var scoreThreshold = lastScore / 3;
                while (parentOfTopCandidate.tagName !== "BODY") {
                    if (!parentOfTopCandidate.readability) {
                        parentOfTopCandidate = parentOfTopCandidate.parentNode;
                        continue;
                    }
                    var parentScore = parentOfTopCandidate.readability.contentScore;
                    if (parentScore < scoreThreshold)
                        break;
                    if (parentScore > lastScore) {
                        // Alright! We found a better parent to use.
                        topCandidate = parentOfTopCandidate;
                        break;
                    }
                    lastScore = parentOfTopCandidate.readability.contentScore;
                    parentOfTopCandidate = parentOfTopCandidate.parentNode;
                }

                // If the top candidate is the only child, use parent instead. This will help sibling
                // joining logic when adjacent content is actually located in parent's sibling node.
                parentOfTopCandidate = topCandidate.parentNode;
                while (parentOfTopCandidate.tagName != "BODY" && parentOfTopCandidate.children.length == 1) {
                    topCandidate = parentOfTopCandidate;
                    parentOfTopCandidate = topCandidate.parentNode;
                }
                if (!topCandidate.readability) {
                    this._initializeNode(topCandidate);
                }
            }

            // Now that we have the top candidate, look through its siblings for content
            // that might also be related. Things like preambles, content split by ads
            // that we removed, etc.
            var articleContent = doc.createElement("DIV");
            if (isPaging)
                articleContent.id = "readability-content";

            var siblingScoreThreshold = Math.max(10, topCandidate.readability.contentScore * 0.2);
            // Keep potential top candidate's parent node to try to get text direction of it later.
            parentOfTopCandidate = topCandidate.parentNode;
            var siblings = parentOfTopCandidate.children;

            for (var s = 0, sl = siblings.length; s < sl; s++) {
                var sibling = siblings[s];
                var append = false;

                this.log("Looking at sibling node:", sibling, sibling.readability ? ("with score " + sibling.readability.contentScore) : '');
                this.log("Sibling has score", sibling.readability ? sibling.readability.contentScore : 'Unknown');

                if (sibling === topCandidate) {
                    append = true;
                } else {
                    var contentBonus = 0;

                    // Give a bonus if sibling nodes and top candidates have the example same classname
                    if (sibling.className === topCandidate.className && topCandidate.className !== "")
                        contentBonus += topCandidate.readability.contentScore * 0.2;

                    if (sibling.readability &&
                        ((sibling.readability.contentScore + contentBonus) >= siblingScoreThreshold)) {
                        append = true;
                    } else if (sibling.nodeName === "P") {
                        var linkDensity = this._getLinkDensity(sibling);
                        var nodeContent = this._getInnerText(sibling);
                        var nodeLength = nodeContent.length;

                        if (nodeLength > 80 && linkDensity < 0.25) {
                            append = true;
                        } else if (nodeLength < 80 && nodeLength > 0 && linkDensity === 0 &&
                            nodeContent.search(/\.( |$)/) !== -1) {
                            append = true;
                        }
                    }
                }

                if (append) {
                    this.log("Appending node:", sibling);

                    if (this.ALTER_TO_DIV_EXCEPTIONS.indexOf(sibling.nodeName) === -1) {
                        // We have a node that isn't a common block level element, like a form or td tag.
                        // Turn it into a div so it doesn't get filtered out later by accident.
                        this.log("Altering sibling:", sibling, 'to div.');

                        sibling = this._setNodeTag(sibling, "DIV");
                    }

                    articleContent.appendChild(sibling);
                    // siblings is a reference to the children array, and
                    // sibling is removed from the array when we call appendChild().
                    // As a result, we must revisit this index since the nodes
                    // have been shifted.
                    s -= 1;
                    sl -= 1;
                }
            }

            if (this._debug)
                this.log("Article content pre-prep: " + articleContent.innerHTML);
            // So we have all of the content that we need. Now we clean it up for presentation.
            this._prepArticle(articleContent);
            if (this._debug)
                this.log("Article content post-prep: " + articleContent.innerHTML);

            if (this._curPageNum === 1) {
                if (neededToCreateTopCandidate) {
                    // We already created a fake div thing, and there wouldn't have been any siblings left
                    // for the previous loop, so there's no point trying to create a new div, and then
                    // move all the children over. Just assign IDs and class names here. No need to append
                    // because that already happened anyway.
                    topCandidate.id = "readability-page-1";
                    topCandidate.className = "page";
                } else {
                    var div = doc.createElement("DIV");
                    div.id = "readability-page-1";
                    div.className = "page";
                    var children = articleContent.childNodes;
                    while (children.length) {
                        div.appendChild(children[0]);
                    }
                    articleContent.appendChild(div);
                }
            }

            if (this._debug)
                this.log("Article content after paging: " + articleContent.innerHTML);

            // Now that we've gone through the full algorithm, check to see if
            // we got any meaningful content. If we didn't, we may need to re-run
            // grabArticle with different flags set. This gives us a higher likelihood of
            // finding the content, and the sieve approach gives us a higher likelihood of
            // finding the -right- content.
            if (this._getInnerText(articleContent, true).length < 500) {
                page.innerHTML = pageCacheHtml;

                if (this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) {
                    this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
                } else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) {
                    this._removeFlag(this.FLAG_WEIGHT_CLASSES);
                } else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
                    this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
                } else {
                    return null;
                }
            } else {
                // Find out text direction from ancestors of final top candidate.
                var ancestors = [parentOfTopCandidate, topCandidate].concat(this._getNodeAncestors(parentOfTopCandidate));
                this._someNode(ancestors, function (ancestor) {
                    if (!ancestor.tagName)
                        return false;
                    var articleDir = ancestor.getAttribute("dir");
                    if (articleDir) {
                        this._articleDir = articleDir;
                        return true;
                    }
                    return false;
                });

                return articleContent;
            }
        }
    },

    /**
     * Check whether the input string could be a byline.
     * This verifies that the input is a string, and that the length
     * is less than 100 chars.
     *
     * @param possibleByline {string} - a string to check whether its a byline.
     * @return Boolean - whether the input string is a byline.
     */
    _isValidByline: function (byline) {
        if (typeof byline == 'string' || byline instanceof String) {
            byline = byline.trim();
            return (byline.length > 0) && (byline.length < 100);
        }
        return false;
    },

    /**
     * Attempts to get excerpt and byline metadata for the article.
     *
     * @return Object with optional "excerpt" and "byline" properties
     */
    _getArticleMetadata: function () {
        var metadata = {};
        var values = {};
        var metaElements = this._doc.getElementsByTagName("meta");

        // Match "description", or Twitter's "twitter:description" (Cards)
        // in name attribute.
        var namePattern = /^\s*((twitter)\s*:\s*)?(description|title)\s*$/gi;

        // Match Facebook's Open Graph title & description properties.
        var propertyPattern = /^\s*og\s*:\s*(description|title)\s*$/gi;

        // Find description tags.
        this._forEachNode(metaElements, function (element) {
            var elementName = element.getAttribute("name");
            var elementProperty = element.getAttribute("property");

            if ([elementName, elementProperty].indexOf("author") !== -1) {
                metadata.byline = element.getAttribute("content");
                return;
            }

            var name = null;
            if (namePattern.test(elementName)) {
                name = elementName;
            } else if (propertyPattern.test(elementProperty)) {
                name = elementProperty;
            }

            if (name) {
                var content = element.getAttribute("content");
                if (content) {
                    // Convert to lowercase and remove any whitespace
                    // so we can match below.
                    name = name.toLowerCase().replace(/\s/g, '');
                    values[name] = content.trim();
                }
            }
        });

        if ("description" in values) {
            metadata.excerpt = values["description"];
        } else if ("og:description" in values) {
            // Use facebook open graph description.
            metadata.excerpt = values["og:description"];
        } else if ("twitter:description" in values) {
            // Use twitter cards description.
            metadata.excerpt = values["twitter:description"];
        }

        metadata.title = this._getArticleTitle();
        if (!metadata.title) {
            if ("og:title" in values) {
                // Use facebook open graph title.
                metadata.title = values["og:title"];
            } else if ("twitter:title" in values) {
                // Use twitter cards title.
                metadata.title = values["twitter:title"];
            }
        }

        return metadata;
    },

    /**
     * Removes script tags from the document.
     *
     * @param Element
     **/
    _removeScripts: function (doc) {
        this._removeNodes(doc.getElementsByTagName('script'), function (scriptNode) {
            scriptNode.nodeValue = "";
            scriptNode.removeAttribute('src');
            return true;
        });
        this._removeNodes(doc.getElementsByTagName('noscript'));
    },

    /**
     * Check if this node has only whitespace and a single P element
     * Returns false if the DIV node contains non-empty text nodes
     * or if it contains no P or more than 1 element.
     *
     * @param Element
     **/
    _hasSinglePInsideElement: function (element) {
        // There should be exactly 1 element child which is a P:
        if (element.children.length != 1 || element.children[0].tagName !== "P") {
            return false;
        }

        // And there should be no text nodes with real content
        return !this._someNode(element.childNodes, function (node) {
            return node.nodeType === Node.TEXT_NODE &&
                this.REGEXPS.hasContent.test(node.textContent);
        });
    },

    _isElementWithoutContent: function (node) {
        return node.nodeType === Node.ELEMENT_NODE &&
            node.textContent.trim().length == 0 &&
            (node.children.length == 0 ||
            node.children.length == node.getElementsByTagName("br").length + node.getElementsByTagName("hr").length);
    },

    /**
     * Determine whether element has any children block level elements.
     *
     * @param Element
     */
    _hasChildBlockElement: function (element) {
        return this._someNode(element.childNodes, function (node) {
            return this.DIV_TO_P_ELEMS.indexOf(node.tagName) !== -1 ||
                this._hasChildBlockElement(node);
        });
    },

    /**
     * Get the inner text of a node - cross browser compatibly.
     * This also strips out any excess whitespace to be found.
     *
     * @param Element
     * @param Boolean normalizeSpaces (default: true)
     * @return string
     **/
    _getInnerText: function (e, normalizeSpaces) {
        normalizeSpaces = (typeof normalizeSpaces === 'undefined') ? true : normalizeSpaces;
        var textContent = e.textContent.trim();

        if (normalizeSpaces) {
            return textContent.replace(this.REGEXPS.normalize, " ");
        }
        return textContent;
    },

    /**
     * Get the number of times a string s appears in the node e.
     *
     * @param Element
     * @param string - what to split on. Default is ","
     * @return number (integer)
     **/
    _getCharCount: function (e, s) {
        s = s || ",";
        return this._getInnerText(e).split(s).length - 1;
    },

    /**
     * Remove the style attribute on every e and under.
     * TODO: Test if getElementsByTagName(*) is faster.
     *
     * @param Element
     * @return void
     **/
    _cleanStyles: function (e) {
        e = e || this._doc;
        if (!e)
            return;
        var cur = e.firstChild;

        // Remove any root styles, if we're able.
        if (typeof e.removeAttribute === 'function' && e.className !== 'readability-styled')
            e.removeAttribute('style');

        // Go until there are no more child nodes
        while (cur !== null) {
            if (cur.nodeType === cur.ELEMENT_NODE) {
                // Remove style attribute(s) :
                if (cur.className !== "readability-styled")
                    cur.removeAttribute("style");

                this._cleanStyles(cur);
            }

            cur = cur.nextSibling;
        }
    },

    /**
     * Get the density of links as a percentage of the content
     * This is the amount of text that is inside a link divided by the total text in the node.
     *
     * @param Element
     * @return number (float)
     **/
    _getLinkDensity: function (element) {
        var textLength = this._getInnerText(element).length;
        if (textLength === 0)
            return 0;

        var linkLength = 0;

        // XXX implement _reduceNodeList?
        this._forEachNode(element.getElementsByTagName("a"), function (linkNode) {
            linkLength += this._getInnerText(linkNode).length;
        });

        return linkLength / textLength;
    },

    /**
     * Find a cleaned up version of the current URL, to use for comparing links for possible next-pageyness.
     *
     * @author Dan Lacy
     * @return string the base url
     **/
    _findBaseUrl: function () {
        var uri = this._uri;
        var noUrlParams = uri.path.split("?")[0];
        var urlSlashes = noUrlParams.split("/").reverse();
        var cleanedSegments = [];
        var possibleType = "";

        for (var i = 0, slashLen = urlSlashes.length; i < slashLen; i += 1) {
            var segment = urlSlashes[i];

            // Split off and save anything that looks like a file type.
            if (segment.indexOf(".") !== -1) {
                possibleType = segment.split(".")[1];

                // If the type isn't alpha-only, it's probably not actually a file extension.
                if (!possibleType.match(/[^a-zA-Z]/))
                    segment = segment.split(".")[0];
            }

            // If our first or second segment has anything looking like a page number, remove it.
            if (segment.match(/((_|-)?p[a-z]*|(_|-))[0-9]{1,2}$/i) && ((i === 1) || (i === 0)))
                segment = segment.replace(/((_|-)?p[a-z]*|(_|-))[0-9]{1,2}$/i, "");

            var del = false;

            // If this is purely a number, and it's the first or second segment,
            // it's probably a page number. Remove it.
            if (i < 2 && segment.match(/^\d{1,2}$/))
                del = true;

            // If this is the first segment and it's just "index", remove it.
            if (i === 0 && segment.toLowerCase() === "index")
                del = true;

            // If our first or second segment is smaller than 3 characters,
            // and the first segment was purely alphas, remove it.
            if (i < 2 && segment.length < 3 && !urlSlashes[0].match(/[a-z]/i))
                del = true;

            // If it's not marked for deletion, push it to cleanedSegments.
            if (!del)
                cleanedSegments.push(segment);
        }

        // This is our final, cleaned, base article URL.
        return uri.scheme + "://" + uri.host + cleanedSegments.reverse().join("/");
    },

    /**
     * Look for any paging links that may occur within the document.
     *
     * @param body
     * @return object (array)
     **/
    _findNextPageLink: function (elem) {
        var uri = this._uri;
        var possiblePages = {};
        var allLinks = elem.getElementsByTagName('a');
        var articleBaseUrl = this._findBaseUrl();

        // Loop through all links, looking for hints that they may be next-page links.
        // Things like having "page" in their textContent, className or id, or being a child
        // of a node with a page-y className or id.
        //
        // Also possible: levenshtein distance? longest common subsequence?
        //
        // After we do that, assign each page a score, and
        for (var i = 0, il = allLinks.length; i < il; i += 1) {
            var link = allLinks[i];
            var linkHref = allLinks[i].href.replace(/#.*$/, '').replace(/\/$/, '');

            // If we've already seen this page, ignore it.
            if (linkHref === "" ||
                linkHref === articleBaseUrl ||
                linkHref === uri.spec ||
                linkHref in this._parsedPages) {
                continue;
            }

            // If it's on a different domain, skip it.
            if (uri.host !== linkHref.split(/\/+/g)[1])
                continue;

            var linkText = this._getInnerText(link);

            // If the linkText looks like it's not the next page, skip it.
            if (linkText.match(this.REGEXPS.extraneous) || linkText.length > 25)
                continue;

            // If the leftovers of the URL after removing the base URL don't contain
            // any digits, it's certainly not a next page link.
            var linkHrefLeftover = linkHref.replace(articleBaseUrl, '');
            if (!linkHrefLeftover.match(/\d/))
                continue;

            if (!(linkHref in possiblePages)) {
                possiblePages[linkHref] = {"score": 0, "linkText": linkText, "href": linkHref};
            } else {
                possiblePages[linkHref].linkText += ' | ' + linkText;
            }

            var linkObj = possiblePages[linkHref];

            // If the articleBaseUrl isn't part of this URL, penalize this link. It could
            // still be the link, but the odds are lower.
            // Example: http://www.actionscript.org/resources/articles/745/1/JavaScript-and-VBScript-Injection-in-ActionScript-3/Page1.html
            if (linkHref.indexOf(articleBaseUrl) !== 0)
                linkObj.score -= 25;

            var linkData = linkText + ' ' + link.className + ' ' + link.id;
            if (linkData.match(this.REGEXPS.nextLink))
                linkObj.score += 50;

            if (linkData.match(/pag(e|ing|inat)/i))
                linkObj.score += 25;

            if (linkData.match(/(first|last)/i)) {
                // -65 is enough to negate any bonuses gotten from a > or » in the text,
                // If we already matched on "next", last is probably fine.
                // If we didn't, then it's bad. Penalize.
                if (!linkObj.linkText.match(this.REGEXPS.nextLink))
                    linkObj.score -= 65;
            }

            if (linkData.match(this.REGEXPS.negative) || linkData.match(this.REGEXPS.extraneous))
                linkObj.score -= 50;

            if (linkData.match(this.REGEXPS.prevLink))
                linkObj.score -= 200;

            // If a parentNode contains page or paging or paginat
            var parentNode = link.parentNode;
            var positiveNodeMatch = false;
            var negativeNodeMatch = false;

            while (parentNode) {
                var parentNodeClassAndId = parentNode.className + ' ' + parentNode.id;

                if (!positiveNodeMatch && parentNodeClassAndId && parentNodeClassAndId.match(/pag(e|ing|inat)/i)) {
                    positiveNodeMatch = true;
                    linkObj.score += 25;
                }

                if (!negativeNodeMatch && parentNodeClassAndId && parentNodeClassAndId.match(this.REGEXPS.negative)) {
                    // If this is just something like "footer", give it a negative.
                    // If it's something like "body-and-footer", leave it be.
                    if (!parentNodeClassAndId.match(this.REGEXPS.positive)) {
                        linkObj.score -= 25;
                        negativeNodeMatch = true;
                    }
                }

                parentNode = parentNode.parentNode;
            }

            // If the URL looks like it has paging in it, add to the score.
            // Things like /page/2/, /pagenum/2, ?p=3, ?page=11, ?pagination=34
            if (linkHref.match(/p(a|g|ag)?(e|ing|ination)?(=|\/)[0-9]{1,2}/i) || linkHref.match(/(page|paging)/i))
                linkObj.score += 25;

            // If the URL contains negative values, give a slight decrease.
            if (linkHref.match(this.REGEXPS.extraneous))
                linkObj.score -= 15;

            /**
             * Minor punishment to anything that doesn't match our current URL.
             * NOTE: I'm finding this to cause more harm than good where something is exactly 50 points.
             *     Dan, can you show me a counterexample where this is necessary?
             * if (linkHref.indexOf(window.location.href) !== 0) {
       *  linkObj.score -= 1;
       * }
             **/

            // If the link text can be parsed as a number, give it a minor bonus, with a slight
            // bias towards lower numbered pages. This is so that pages that might not have 'next'
            // in their text can still get scored, and sorted properly by score.
            var linkTextAsNumber = parseInt(linkText, 10);
            if (linkTextAsNumber) {
                // Punish 1 since we're either already there, or it's probably
                // before what we want anyways.
                if (linkTextAsNumber === 1) {
                    linkObj.score -= 10;
                } else {
                    linkObj.score += Math.max(0, 10 - linkTextAsNumber);
                }
            }
        }

        // Loop thrugh all of our possible pages from above and find our top
        // candidate for the next page URL. Require at least a score of 50, which
        // is a relatively high confidence that this page is the next link.
        var topPage = null;
        for (var page in possiblePages) {
            if (possiblePages.hasOwnProperty(page)) {
                if (possiblePages[page].score >= 50 &&
                    (!topPage || topPage.score < possiblePages[page].score))
                    topPage = possiblePages[page];
            }
        }

        var nextHref = null;
        if (topPage) {
            nextHref = topPage.href.replace(/\/$/, '');

            this.log('NEXT PAGE IS ' + nextHref);
            this._parsedPages[nextHref] = true;
        }
        return nextHref;
    },

    _successfulRequest: function (request) {
        return (request.status >= 200 && request.status < 300) ||
            request.status === 304 ||
            (request.status === 0 && request.responseText);
    },

    _ajax: function (url, options) {
        var request = new XMLHttpRequest();

        function respondToReadyState(readyState) {
            if (request.readyState === 4) {
                if (this._successfulRequest(request)) {
                    if (options.success)
                        options.success(request);
                } else if (options.error) {
                    options.error(request);
                }
            }
        }

        if (typeof options === 'undefined')
            options = {};

        request.onreadystatechange = respondToReadyState;

        request.open('get', url, true);
        request.setRequestHeader('Accept', 'text/html');

        try {
            request.send(options.postBody);
        } catch (e) {
            if (options.error)
                options.error();
        }

        return request;
    },

    _appendNextPage: function (nextPageLink) {
        var doc = this._doc;
        this._curPageNum += 1;

        var articlePage = doc.createElement("DIV");
        articlePage.id = 'readability-page-' + this._curPageNum;
        articlePage.className = 'page';
        articlePage.innerHTML = '<p class="page-separator" title="Page ' + this._curPageNum + '">&sect;</p>';

        doc.getElementById("readability-content").appendChild(articlePage);

        if (this._curPageNum > this._maxPages) {
            var nextPageMarkup = "<div style='text-align: center'><a href='" + nextPageLink + "'>View Next Page</a></div>";
            articlePage.innerHTML = articlePage.innerHTML + nextPageMarkup;
            return;
        }

        // Now that we've built the article page DOM element, get the page content
        // asynchronously and load the cleaned content into the div we created for it.
        (function (pageUrl, thisPage) {
            this._ajax(pageUrl, {
                success: function (r) {

                    // First, check to see if we have a matching ETag in headers - if we do, this is a duplicate page.
                    var eTag = r.getResponseHeader('ETag');
                    if (eTag) {
                        if (eTag in this._pageETags) {
                            this.log("Exact duplicate page found via ETag. Aborting.");
                            articlePage.style.display = 'none';
                            return;
                        }
                        this._pageETags[eTag] = 1;
                    }

                    // TODO: this ends up doubling up page numbers on NYTimes articles. Need to generically parse those away.
                    var page = doc.createElement("DIV");

                    // Do some preprocessing to our HTML to make it ready for appending.
                    // - Remove any script tags. Swap and reswap newlines with a unicode
                    //   character because multiline regex doesn't work in javascript.
                    // - Turn any noscript tags into divs so that we can parse them. This
                    //   allows us to find any next page links hidden via javascript.
                    // - Turn all double br's into p's - was handled by prepDocument in the original view.
                    //   Maybe in the future abstract out prepDocument to work for both the original document
                    //   and AJAX-added pages.
                    var responseHtml = r.responseText.replace(/\n/g, '\uffff').replace(/<script.*?>.*?<\/script>/gi, '');
                    responseHtml = responseHtml.replace(/\n/g, '\uffff').replace(/<script.*?>.*?<\/script>/gi, '');
                    responseHtml = responseHtml.replace(/\uffff/g, '\n').replace(/<(\/?)noscript/gi, '<$1div');
                    responseHtml = responseHtml.replace(this.REGEXPS.replaceFonts, '<$1span>');

                    page.innerHTML = responseHtml;
                    this._replaceBrs(page);

                    // Reset all flags for the next page, as they will search through it and
                    // disable as necessary at the end of grabArticle.
                    this._flags = 0x1 | 0x2 | 0x4;

                    var secondNextPageLink = this._findNextPageLink(page);

                    // NOTE: if we end up supporting _appendNextPage(), we'll need to
                    // change this call to be async
                    var content = this._grabArticle(page);

                    if (!content) {
                        this.log("No content found in page to append. Aborting.");
                        return;
                    }

                    // Anti-duplicate mechanism. Essentially, get the first paragraph of our new page.
                    // Compare it against all of the the previous document's we've gotten. If the previous
                    // document contains exactly the innerHTML of this first paragraph, it's probably a duplicate.
                    var firstP = content.getElementsByTagName("P").length ? content.getElementsByTagName("P")[0] : null;
                    if (firstP && firstP.innerHTML.length > 100) {
                        for (var i = 1; i <= this._curPageNum; i += 1) {
                            var rPage = doc.getElementById('readability-page-' + i);
                            if (rPage && rPage.innerHTML.indexOf(firstP.innerHTML) !== -1) {
                                this.log('Duplicate of page ' + i + ' - skipping.');
                                articlePage.style.display = 'none';
                                this._parsedPages[pageUrl] = true;
                                return;
                            }
                        }
                    }

                    this._removeScripts(content);

                    thisPage.innerHTML = thisPage.innerHTML + content.innerHTML;

                    // After the page has rendered, post process the content. This delay is necessary because,
                    // in webkit at least, offsetWidth is not set in time to determine image width. We have to
                    // wait a little bit for reflow to finish before we can fix floating images.
                    setTimeout((function () {
                        this._postProcessContent(thisPage);
                    }).bind(this), 500);


                    if (secondNextPageLink)
                        this._appendNextPage(secondNextPageLink);
                }
            });
        }).bind(this)(nextPageLink, articlePage);
    },

    /**
     * Get an elements class/id weight. Uses regular expressions to tell if this
     * element looks good or bad.
     *
     * @param Element
     * @return number (Integer)
     **/
    _getClassWeight: function (e) {
        if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
            return 0;

        var weight = 0;

        // Look for a special classname
        if (typeof(e.className) === 'string' && e.className !== '') {
            if (this.REGEXPS.negative.test(e.className))
                weight -= 25;

            if (this.REGEXPS.positive.test(e.className))
                weight += 25;
        }

        // Look for a special ID
        if (typeof(e.id) === 'string' && e.id !== '') {
            if (this.REGEXPS.negative.test(e.id))
                weight -= 25;

            if (this.REGEXPS.positive.test(e.id))
                weight += 25;
        }

        return weight;
    },

    /**
     * Clean a node of all elements of type "tag".
     * (Unless it's a youtube/vimeo video. People love movies.)
     *
     * @param Element
     * @param string tag to clean
     * @return void
     **/
    _clean: function (e, tag) {
        var isEmbed = ["object", "embed", "iframe"].indexOf(tag) !== -1;

        this._removeNodes(e.getElementsByTagName(tag), function (element) {
            // Allow youtube and vimeo videos through as people usually want to see those.
            if (isEmbed) {
                var attributeValues = [].map.call(element.attributes, function (attr) {
                    return attr.value;
                }).join("|");

                // First, check the elements attributes to see if any of them contain youtube or vimeo
                if (this.REGEXPS.videos.test(attributeValues))
                    return false;

                // Then check the elements inside this element for the same.
                if (this.REGEXPS.videos.test(element.innerHTML))
                    return false;
            }

            return true;
        });
    },

    /**
     * Check if a given node has one of its ancestor tag name matching the
     * provided one.
     * @param  HTMLElement node
     * @param  String      tagName
     * @param  Number      maxDepth
     * @param  Function    filterFn a filter to invoke to determine whether this node 'counts'
     * @return Boolean
     */
    _hasAncestorTag: function (node, tagName, maxDepth, filterFn) {
        maxDepth = maxDepth || 3;
        tagName = tagName.toUpperCase();
        var depth = 0;
        while (node.parentNode) {
            if (maxDepth > 0 && depth > maxDepth)
                return false;
            if (node.parentNode.tagName === tagName && (!filterFn || filterFn(node.parentNode)))
                return true;
            node = node.parentNode;
            depth++;
        }
        return false;
    },

    /**
     * Return an object indicating how many rows and columns this table has.
     */
    _getRowAndColumnCount: function (table) {
        var rows = 0;
        var columns = 0;
        var trs = table.getElementsByTagName("tr");
        for (var i = 0; i < trs.length; i++) {
            var rowspan = trs[i].getAttribute("rowspan") || 0;
            if (rowspan) {
                rowspan = parseInt(rowspan, 10);
            }
            rows += (rowspan || 1);

            // Now look for column-related info
            var columnsInThisRow = 0;
            var cells = trs[i].getElementsByTagName("td");
            for (var j = 0; j < cells.length; j++) {
                var colspan = cells[j].getAttribute("colspan") || 0;
                if (colspan) {
                    colspan = parseInt(colspan, 10);
                }
                columnsInThisRow += (colspan || 1);
            }
            columns = Math.max(columns, columnsInThisRow);
        }
        return {rows: rows, columns: columns};
    },

    /**
     * Look for 'data' (as opposed to 'layout') tables, for which we use
     * similar checks as
     * https://dxr.mozilla.org/mozilla-central/rev/71224049c0b52ab190564d3ea0eab089a159a4cf/accessible/html/HTMLTableAccessible.cpp#920
     */
    _markDataTables: function (root) {
        var tables = root.getElementsByTagName("table");
        for (var i = 0; i < tables.length; i++) {
            var table = tables[i];
            var role = table.getAttribute("role");
            if (role == "presentation") {
                table._readabilityDataTable = false;
                continue;
            }
            var datatable = table.getAttribute("datatable");
            if (datatable == "0") {
                table._readabilityDataTable = false;
                continue;
            }
            var summary = table.getAttribute("summary");
            if (summary) {
                table._readabilityDataTable = true;
                continue;
            }

            var caption = table.getElementsByTagName("caption")[0];
            if (caption && caption.childNodes.length > 0) {
                table._readabilityDataTable = true;
                continue;
            }

            // If the table has a descendant with any of these tags, consider a data table:
            var dataTableDescendants = ["col", "colgroup", "tfoot", "thead", "th"];
            var descendantExists = function (tag) {
                return !!table.getElementsByTagName(tag)[0];
            };
            if (dataTableDescendants.some(descendantExists)) {
                this.log("Data table because found data-y descendant");
                table._readabilityDataTable = true;
                continue;
            }

            // Nested tables indicate a layout table:
            if (table.getElementsByTagName("table")[0]) {
                table._readabilityDataTable = false;
                continue;
            }

            var sizeInfo = this._getRowAndColumnCount(table);
            if (sizeInfo.rows >= 10 || sizeInfo.columns > 4) {
                table._readabilityDataTable = true;
                continue;
            }
            // Now just go by size entirely:
            table._readabilityDataTable = sizeInfo.rows * sizeInfo.columns > 10;
        }
    },

    /**
     * Clean an element of all tags of type "tag" if they look fishy.
     * "Fishy" is an algorithm based on content length, classnames, link density, number of images & embeds, etc.
     *
     * @return void
     **/
    _cleanConditionally: function (e, tag) {
        if (!this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
            return;

        var isList = tag === "ul" || tag === "ol";

        // Gather counts for other typical elements embedded within.
        // Traverse backwards so we can remove nodes at the same time
        // without effecting the traversal.
        //
        // TODO: Consider taking into account original contentScore here.
        this._removeNodes(e.getElementsByTagName(tag), function (node) {
            // First check if we're in a data table, in which case don't remove us.
            var isDataTable = function (t) {
                return t._readabilityDataTable;
            };

            if (this._hasAncestorTag(node, "table", -1, isDataTable)) {
                return false;
            }

            var weight = this._getClassWeight(node);
            var contentScore = 0;

            this.log("Cleaning Conditionally", node);

            if (weight + contentScore < 0) {
                return true;
            }

            if (this._getCharCount(node, ',') < 10) {
                // If there are not very many commas, and the number of
                // non-paragraph elements is more than paragraphs or other
                // ominous signs, remove the element.
                var p = node.getElementsByTagName("p").length;
                var img = node.getElementsByTagName("img").length;
                var li = node.getElementsByTagName("li").length - 100;
                var input = node.getElementsByTagName("input").length;

                var embedCount = 0;
                var embeds = node.getElementsByTagName("embed");
                for (var ei = 0, il = embeds.length; ei < il; ei += 1) {
                    if (!this.REGEXPS.videos.test(embeds[ei].src))
                        embedCount += 1;
                }

                var linkDensity = this._getLinkDensity(node);
                var contentLength = this._getInnerText(node).length;

                var haveToRemove =
                    (img > 1 && p / img < 0.5 && !this._hasAncestorTag(node, "figure")) ||
                    (!isList && li > p) ||
                    (input > Math.floor(p / 3)) ||
                    (!isList && contentLength < 25 && (img === 0 || img > 2) && !this._hasAncestorTag(node, "figure")) ||
                    (!isList && weight < 25 && linkDensity > 0.2) ||
                    (weight >= 25 && linkDensity > 0.5) ||
                    ((embedCount === 1 && contentLength < 75) || embedCount > 1);
                return haveToRemove;
            }
            return false;
        });
    },

    /**
     * Clean out elements whose id/class combinations match specific string.
     *
     * @param Element
     * @param RegExp match id/class combination.
     * @return void
     **/
    _cleanMatchedNodes: function (e, regex) {
        var endOfSearchMarkerNode = this._getNextNode(e, true);
        var next = this._getNextNode(e);
        while (next && next != endOfSearchMarkerNode) {
            if (regex.test(next.className + " " + next.id)) {
                next = this._removeAndGetNext(next);
            } else {
                next = this._getNextNode(next);
            }
        }
    },

    /**
     * Clean out spurious headers from an Element. Checks things like classnames and link density.
     *
     * @param Element
     * @return void
     **/
    _cleanHeaders: function (e) {
        for (var headerIndex = 1; headerIndex < 3; headerIndex += 1) {
            this._removeNodes(e.getElementsByTagName('h' + headerIndex), function (header) {
                return this._getClassWeight(header) < 0;
            });
        }
    },

    _flagIsActive: function (flag) {
        return (this._flags & flag) > 0;
    },

    _addFlag: function (flag) {
        this._flags = this._flags | flag;
    },

    _removeFlag: function (flag) {
        this._flags = this._flags & ~flag;
    },

    /**
     * Decides whether or not the document is reader-able without parsing the whole thing.
     *
     * @return boolean Whether or not we suspect parse() will suceeed at returning an article object.
     */
    isProbablyReaderable: function (helperIsVisible) {
        var nodes = this._getAllNodesWithTag(this._doc, ["p", "pre"]);

        // Get <div> nodes which have <br> node(s) and append them into the `nodes` variable.
        // Some articles' DOM structures might look like
        // <div>
        //   Sentences<br>
        //   <br>
        //   Sentences<br>
        // </div>
        var brNodes = this._getAllNodesWithTag(this._doc, ["div > br"]);
        if (brNodes.length) {
            var set = new Set();
            [].forEach.call(brNodes, function (node) {
                set.add(node.parentNode);
            });
            nodes = [].concat.apply(Array.from(set), nodes);
        }

        // FIXME we should have a fallback for helperIsVisible, but this is
        // problematic because of jsdom's elem.style handling - see
        // https://github.com/mozilla/readability/pull/186 for context.

        var score = 0;
        // This is a little cheeky, we use the accumulator 'score' to decide what to return from
        // this callback:
        return this._someNode(nodes, function (node) {
            if (helperIsVisible && !helperIsVisible(node))
                return false;
            var matchString = node.className + " " + node.id;

            if (this.REGEXPS.unlikelyCandidates.test(matchString) && !this.REGEXPS.okMaybeItsACandidate.test(matchString)) {
                return false;
            }

            if (node.matches && node.matches("li p")) {
                return false;
            }

            var textContentLength = node.textContent.trim().length;
            if (textContentLength < 140) {
                return false;
            }

            score += Math.sqrt(textContentLength - 140);

            if (score > 20) {
                return true;
            }
            return false;
        });
    },

    /**
     * Runs readability.
     *
     * Workflow:
     *  1. Prep the document by removing script tags, css, etc.
     *  2. Build readability's DOM tree.
     *  3. Grab the article content from the current dom tree.
     *  4. Replace the current DOM tree with the new one.
     *  5. Read peacefully.
     *
     * @return void
     **/
    parse: function () {
        // Avoid parsing too large documents, as per configuration option
        if (this._maxElemsToParse > 0) {
            var numTags = this._doc.getElementsByTagName("*").length;
            if (numTags > this._maxElemsToParse) {
                throw new Error("Aborting parsing document; " + numTags + " elements found");
            }
        }

        if (typeof this._doc.documentElement.firstElementChild === "undefined") {
            this._getNextNode = this._getNextNodeNoElementProperties;
        }
        // Remove script tags from the document.
        this._removeScripts(this._doc);

        // FIXME: Disabled multi-page article support for now as it
        // needs more work on infrastructure.

        // Make sure this document is added to the list of parsed pages first,
        // so we don't double up on the first page.
        // this._parsedPages[uri.spec.replace(/\/$/, '')] = true;

        // Pull out any possible next page link first.
        // var nextPageLink = this._findNextPageLink(doc.body);

        this._prepDocument();

        var metadata = this._getArticleMetadata();
        this._articleTitle = metadata.title;

        var articleContent = this._grabArticle();
        if (!articleContent)
            return null;

        this.log("Grabbed: " + articleContent.innerHTML);

        this._postProcessContent(articleContent);

        // if (nextPageLink) {
        //   // Append any additional pages after a small timeout so that people
        //   // can start reading without having to wait for this to finish processing.
        //   setTimeout((function() {
        //     this._appendNextPage(nextPageLink);
        //   }).bind(this), 500);
        // }

        // If we haven't found an excerpt in the article's metadata, use the article's
        // first paragraph as the excerpt. This is used for displaying a preview of
        // the article's content.
        if (!metadata.excerpt) {
            var paragraphs = articleContent.getElementsByTagName("p");
            if (paragraphs.length > 0) {
                metadata.excerpt = paragraphs[0].textContent.trim();
            }
        }

        var textContent = articleContent.textContent;

        return {
            uri: this._uri,
            title: this._articleTitle,
            byline: metadata.byline || this._articleByline,
            dir: this._articleDir,
            content: articleContent.innerHTML,
            textContent: textContent,
            length: textContent.length,
            excerpt: metadata.excerpt,
            rootElements: articleContent.children[0].children
        };
    }
};

if (typeof module === "object") {
    module.exports = Readability;
}


function SmartInformerCreator(smartInformerName, id, _percentageFrom, _percentageTo) {

    function _isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    if (!_isNumeric(_percentageFrom) || !_isNumeric(_percentageTo)) {
        console.error('SmartInformerCreator.constructor: Provided percentages must be numeric only.' +
            ' _percentageFrom: ' + _percentageFrom +
            ' _percentageTo: ' + _percentageTo + ' given');
    }

    if (!smartInformerName) {
        console.error('SmartInformerCreator.constructor: smartInformerName must be specified');
    }

    if (typeof id == 'undefined' || id == '') {
        console.error('SmartInformerCreator.constructor: Root Id was excepted but ' + id + ' given');
    }

    if (!_percentageFrom) {
        console.warn('SmartInformerCreator.constructor: Percentage from was excepted but it was not given. Default value (30% will be used)');
    }

    if (!_percentageTo) {
        console.warn('SmartInformerCreator.constructor: Percentage to was excepted but it was not given. Default value (60% will be used)');
    }

    if (_percentageFrom < 0 || _percentageFrom > 100) {
        console.error('SmartInformerCreator.constructor: _percentageFrom param must be between 0-100 and lower than _percentageTo. ' + _percentageFrom + ' given');
    }

    if (_percentageTo < 0 || _percentageTo > 100) {
        console.error('SmartInformerCreator.constructor: _percentageFrom param must be between 0-100 and lower than _percentageTo. ' + _percentageFrom + ' given');
    }

    if (_percentageFrom > _percentageTo) {
        console.error('SmartInformerCreator.constructor: _percentageFrom > _percentageTo. This must be _percentageFrom < _percentageTo');
    }

    var self = this;
    var rootId = id;
    var marketGidCompositeId = smartInformerName + id;
    var smartInformer = document.getElementById(marketGidCompositeId);
        smartInformer.parentNode.removeChild(smartInformer);

    var percentageFrom = _percentageFrom === null || _percentageFrom === undefined ? 30 : _percentageFrom;
    var percentageTo = _percentageTo === null || _percentageTo === undefined ? 60 : _percentageTo;
    var articleHeight = 0;
    var articleWidth = 0;
    var articleParsed;
    var article;
    var informerRootDiv;
    var offsetHeightFrom;
    var offsetHeightTo;
    var cumulativeGlobal = 0;
    var inserted = false;
    var cursor = {};

    Object.defineProperties(this, {
        articleAcceptedWidth: {get: function () {return articleWidth - (articleWidth * 10 / 100);}},
    });

    Object.defineProperties(cursor, {
        beforeGoal: {get: function () {return cumulativeGlobal === 0 || cumulativeGlobal <= offsetHeightFrom;}},
        neededGoal: {get: function () {return cumulativeGlobal >= offsetHeightFrom && cumulativeGlobal <= offsetHeightTo;}},
        afterGoal: {get: function () {return cumulativeGlobal >= offsetHeightTo || cumulativeGlobal <= articleHeight;}}
    });

    function _initMarketGidCompositeRootDiv() {

        informerRootDiv = document.createElement('div');
        informerRootDiv.id = smartInformerName + 'Root' + rootId;
        informerRootDiv.classList.add('yui3-cssreset');

        // reset all the styles of the informerRootDiv
        var initialStyles = {
            'animation': "none",
            'animation-delay': "0",
            'animation-direction': "normal",
            'animation-duration': "0",
            'animation-fill-mode': "none",
            'animation-iteration-count': "1",
            'animation-name': "none",
            'animation-play-state': "running",
            'animation-timing-function': "ease",
            'backface-visibility': "visible",
            'background': "0",
            'background-attachment': "scroll",
            'background-clip': "borderBox",
            'background-color': "transparent",
            'background-image': "none",
            'background-origin': "paddingBox",
            'background-position': "0 0",
            'background-position-x': "0",
            'background-position-y': "0",
            'background-repeat': "repeat",
            'background-size': "auto auto",
            'border': "0",
            'border-style': "none",
            'border-width': "medium",
            'border-color': "inherit",
            'border-bottom': "0",
            'border-bottom-color': "inherit",
            'border-bottom-left-radius': "0",
            'border-bottom-right-radius': "0",
            'border-bottom-style': "none",
            'border-bottom-width': "medium",
            'border-collapse': "separate",
            'border-image': "none",
            'border-left': "0",
            'border-left-color': "inherit",
            'border-left-style': "none",
            'border-left-width': "medium",
            'border-radius': "0",
            'border-right': "0",
            'border-right-color': "inherit",
            'border-right-style': "none",
            'border-right-width': "medium",
            'border-spacing': "0",
            'border-top': "0",
            'border-top-color': "inherit",
            'border-top-left-radius': "0",
            'border-top-right-radius': "0",
            'border-top-style': "none",
            'border-top-width': "medium",
            'bottom': "auto",
            'box-shadow': "none",
            'box-sizing': "contentBox",
            'caption-side': "top",
            'clear': "none",
            'clip': "auto",
            'color': "inherit",
            'columns': "auto",
            'column-count': "auto",
            'column-fill': "balance",
            'column-gap': "normal",
            'column-rule': "medium none currentColor",
            'column-rule-color': "currentColor",
            'column-rule-style': "none",
            'column-rule-width': "none",
            'column-span': "1",
            'column-width': "auto",
            'content': "normal",
            'counter-increment': "none",
            'counter-reset': "none",
            'cursor': "auto",
            'direction': "ltr",
            'display': "inline",
            'empty-cells': "show",
            'float': "left",
            'font': "normal",
            'font-family': "inherit",
            'font-size': "medium",
            'font-style': "normal",
            'font-variant': "normal",
            'font-weight': "normal",
            'height': "auto",
            'hyphens': "none",
            'left': "auto",
            'letter-spacing': "normal",
            'line-height': "normal",
            'list-style': "none",
            'list-style-image': "none",
            'list-style-position': "outside",
            'list-style-type': "disc",
            'margin': "0",
            'margin-bottom': "0",
            'margin-left': "0",
            'margin-right': "0",
            'margin-top': "10px",
            'max-height': "none",
            'max-width': "none",
            'min-height': "0",
            'min-width': "0",
            'opacity': "1",
            'orphans': "0",
            'outline': "0",
            'outline-color': "invert",
            'outline-style': "none",
            'outline-width': "medium",
            'overflow': "visible",
            'overflow-x': "visible",
            'overflow-y': "visible",
            'padding': "0",
            'padding-bottom': "0",
            'padding-left': "0",
            'padding-right': "0",
            'padding-top': "0",
            'page-break-after': "auto",
            'page-break-before': "auto",
            'page-break-inside': "auto",
            'perspective': "none",
            'perspective-origin': "50% 50%",
            'position': "static",
            'quotes': "'\201C' '\201D' '\2018' '\2019'",
            'right': "auto",
            'tabSize': "8",
            'table-layout': "auto",
            'text-align': "inherit",
            'text-alignLast': "auto",
            'text-decoration': "none",
            'text-decoration-color': "inherit",
            'text-decoration-line': "none",
            'text-decoration-style': "solid",
            'text-indent': "0",
            'text-shadow': "none",
            'text-transform': "none",
            'top': "auto",
            'transform': "none",
            'transform-style': "flat",
            'transition': "none",
            'transition-delay': "0s",
            'transition-duration': "0s",
            'transition-property': "none",
            'transition-timing-fFunction': "ease",
            'unicode-bidi': "normal",
            'vertical-align': "baseline",
            'visibility': "visible",
            'white-space': "normal",
            'widows': "0",
            'width': "100%",
            'word-spacing': "normal",
            'z-index': "auto"
        };

        Object.keys(initialStyles).forEach(function (key) {
            informerRootDiv.style.setProperty(key, initialStyles[key], "important");
        });
    }

    function getArticleParent(node) {

        // try to find article body by id
        if (node['id']) {

            var nodeInDom = document.getElementById(node['id']);
            return nodeInDom ? nodeInDom.parentNode : null;

            // try to find article body by css class
        } else if (node.classList && node.classList.length) {

            var classes = [];
            [].forEach.call(node.classList, function (className) { classes.push(className); });
            var articleNodes = document.getElementsByClassName(classes.join(' '));
            return articleNodes.length && typeof articleNodes[0] != 'undefined' ? articleNodes[0].parentNode : null;

        } else {

            return node.parentNode ? _extractArticle(node.parentNode) : null;
        }
    }

    function _extractArticle(node, _firstCall, _collectionLength) {


        var firstCall = _firstCall || false;
        var collectionLength = _collectionLength || 0;

        if (node[0] && firstCall && collectionLength === 1) {
            var fn = node[0];
            if (fn['id']) {
                return document.getElementById(fn['id']);

                // try to find article body by css class
            } else if (fn.classList && fn.classList.length) {

                var classes = [];
                [].forEach.call(fn.classList, function (className) { classes.push(className); });

                return document.querySelector(fn.tagName + '.' + classes.join('.')).parentNode;
            } else {
                console.warn('SmartInformerCreator._extractArticle: ' +
                    'Cant select element from read DOM by using node -' + fn.tagName);
                return null;
            }
        }

        var result = null;

        if (Array.isHTMLCollection(node) && node.length) {

            // article consists of  more than one element
            [].forEach.call(node, function (element) {
                result = getArticleParent(element, true);
            })
        } else {
            result = getArticleParent(node);
        }

        return result;
    }

    function _parseArticle() {

        // Readability's parse() works by modifying the DOM.
        // This removes some elements in the web page.
        // You could avoid this by passing the clone of the
        // document object while creating a Readability object.
        var loc = document.location;

        /**
         * Parse and get copy of the article from real DOM
         *
         * @type {object} articleParsed - copy of the article from real DOM
         */
        articleParsed = new Readability({
            spec: loc.href,
            host: loc.host,
            prePath: loc.protocol + "//" + loc.host,
            scheme: loc.protocol.substr(0, loc.protocol.indexOf(":")),
            pathBase: loc.protocol + "//" + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf("/") + 1)
        }, document.cloneNode(true)).parse();

        article = _extractArticle(articleParsed.rootElements, true, articleParsed.rootElements.length);

        _handleSpecialCases();
    }

    /**
     * If Readability.js return article with some structure.
     * If the structure is correct - SmartInformerCreator
     * will find correct place to paste informer to.
     * Otherwise, you can adjust article extraction in method below
     * or in method _extractArticle
     *
     * @returns {*}
     * @private
     */
    function _handleSpecialCases(){

        if (article && article.parentNode && article.parentNode.children[0] && article.parentNode.children[0].tagName === 'HEADER') {
            article = article.parentNode;
            return;
        }

        if (article && article.id === 'wrap' && article.children[0].id === 'content') {
            article = article.children[0];
            return;
        }

        var logo = document.querySelector('a.logo.custom-logo-18');
        if(logo) {
            article = document.getElementsByClassName('content_text')[0];
            return;
        }

        logo = document.querySelector('div#page-wrap > center>img');
        if (logo) {
            article = document.getElementsByClassName('detail-left-side')[0];
            return;
        }

        if (articleParsed.rootElements && Array.isHTMLCollection(articleParsed.rootElements)) {
            [].forEach.call(articleParsed.rootElements, function (e) {
                if (e.tagName === 'ARTICLE') {
                    article = document.querySelector(e.tagName);
                } else {
                    console.info('SmartInformerCreator._parseArticle: Cant parse article. ' +
                        'You should add this new condition to the code');
                }
            });
        }
        console.log(article);
        if (article) {
            return;
        }

        console.error('SmartInformerCreator._parseArticle: Article In DOM not recognized');
    }

    function _isSuitableWidth(width) {

        if (articleWidth === 0 && self.articleAcceptedWidth) {
            return true;
        }

        return width <= articleWidth && self.articleAcceptedWidth <= width;
    }

    function _findClosestSuitableNode(element) {

        if (!element || !element.parentNode) {
            return element;
        }

        if (_isSuitableWidth(_getRealWidth(element.parentNode))) {

            var _childWithSuitableWidth = _getChildWithSuitableWidth(element.parentNode);

            if (_childWithSuitableWidth) {
                return _childWithSuitableWidth;
            }

            return element.parentNode;
        }

        return _findClosestSuitableNode(element.parentNode);
    }

    function _getChildWithSuitableWidth(element) {

        if (!element.children) {

            console.warn('SmartInformerCreator._getChildWithSuitableWidth: ' +
                'Children were waited but, ' + typeof element.children + 'given');
            return null;
        }

        var result = null;
        if (element.children) {
            [].forEach.call(element.children, function (node) {
                (!result) && (result = _isSuitableWidth(_getRealWidth(node)) ? node : null);
            });
            return result;
        }

        return _isSuitableWidth(_getRealWidth(element.children[0])) ? element.children[0] : null;
    }

    function _getNexNode(element) {
        var nextNodeIndex = Array.prototype.indexOf.call(element.parentNode.children, element);
        var nextNode = element.parentNode.children[nextNodeIndex + 1];

        return nextNode && !nextNode.clientHeight ? _getNexNode(nextNode) : nextNode;
    }

    /**
     * Insert informer to DOM
     *
     * @param {Element} element - web Element
     * @param {boolean} _before - need to insert before
     * @private
     */
    function _insert(element, _before) {

        /**
         * Important: Part of business logic
         * ----
         * You cant render informer block if article height less then block height -245px
         */
        if (articleHeight <= 300) {

            console.warn('SmartInformerCreator._insert: Article is too small to render informer block');
            // so clean DOM
            inserted = true;
            return;
        }

        var before = _before || false;
        var nextNode = _getNexNode(element);


        if (_hasChildTags(element, ['FIGURE', 'IMG', 'TABLE', 'IFRAME', 'TIME', 'CODE'])) {
            // todo: Provide for going down to paste in
            element.parentNode.insertBefore(informerRootDiv, element.nextSibling);

            informerRootDiv = document.getElementById(informerRootDiv.id);
            informerRootDiv.appendChild(smartInformer);
            inserted = true;
            return;
        }

        if (_hasChildWithClass(nextNode, ['SC_TBlock', 'fb_iframe_widget', 'twitter-tweet-button', 'adsbygoogle'])) {
            _insert(nextNode, false);
            return;
        }

        //if there is smaller width than article's, - accept
        //10% lower than articles actual width
        if (!_isSuitableWidth(element.clientWidth)) {


            // find parent with suitable width
            var suitableNode = _findClosestSuitableNode(element);

            if (suitableNode.parentNode) {
                suitableNode.parentNode.insertBefore(informerRootDiv, suitableNode);
            } else {
                element.parentNode.insertBefore(informerRootDiv, before ? element : element.nextSibling);
            }

            _endInsert(smartInformer);
            return;
        }

        if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].indexOf(element.tagName) != -1 || _hasSpecialNextElement(nextNode, ['UL', 'OL'])) {
            if (typeof nextNode.nextSibling != 'undefined') {
                element.parentNode.insertBefore(informerRootDiv, nextNode.nextSibling);
            } else {
                console.error('SmartInformerCreator._insert: Cant insert informer block after image - it does not exist');
            }

        } else if (_hasSpecialNextElement(nextNode, ['FIGURE', 'IMG', 'TABLE', 'IFRAME', 'TIME', 'CODE'])) {

            if (typeof nextNode.nextSibling != 'undefined') {
                element.parentNode.insertBefore(informerRootDiv, nextNode.nextSibling);
            } else {
                console.error('SmartInformerCreator._insert: Cant insert informer block after image - it does not exist');
            }

        } else if (_hasChildTags(element, ['INS'])) {
            element.parentNode.insertBefore(informerRootDiv, nextNode);
        } else {
            element.parentNode.insertBefore(informerRootDiv, before ? element : element.nextSibling);
        }

        _endInsert(smartInformer);
    }

    function _endInsert(smartInformer) {
        informerRootDiv = document.getElementById(informerRootDiv.id);
        informerRootDiv.appendChild(smartInformer);
        inserted = true;
    }

    function _hasSpecialNextElement(nextNode, specialTags) {
        return  (typeof nextNode != 'undefined')
            && (specialTags.indexOf(nextNode.tagName) != -1)
            || _hasChildTags(nextNode, specialTags);
    }

    function _hasChildTags(node, tags) {

        if (!tags || !tags.length) {
            console.warn('SmartInformerCreator._hasChildTags: tags MUST NOT be empty array');
            return false;
        }

        if (typeof node == 'undefined') {
            return false;
        }

        if (!node.children || node.children.length === 0) {
            return false;
        }

        var result = false;

        [].forEach.call(node.children, function (_node) {

            if (_node.children && _node.children.length > 0) {
                [].forEach.call(_node.children, function (_node2) {
                    if (!result) {
                        result = _hasChildTags(_node2, tags);
                    }
                });
            }

            if (!result) {
                (tags.indexOf(_node.tagName) != -1) && (result = true);
            }

        });

        return result;
    }

    function _hasChildWithClass(node, tags) {

        if (!tags || !tags.length) {
            console.warn('SmartInformerCreator._hasChildWithClass: tags MUST NOT be empty array');
            return false;
        }

        if (typeof node == 'undefined') {
            return false;
        }

        if (!node.children || node.children.length === 0) {
            return false;
        }

        var result = false;

        [].forEach.call(node.children, function (_node) {

            if (_node.children && _node.children.length > 0) {
                [].forEach.call(_node.children, function (_node2) {
                    if (!result) {
                        result = _hasChildTags(_node2, tags);
                    }
                });
            }

            if (!result) {
                tags.forEach(function (e) {

                    if (!result) {
                        result = _node.classList.contains(e);
                    }
                });
            }

        });

        return result;
    }

    function _getFirstChildByTag(node, tags) {
        if (!tags) {
            console.warn('SmartInformerCreator._getFirstChildByTag: - tag MUST NOT be empty array');
            return false;
        }

        if (typeof node == 'undefined') {
            console.warn('SmartInformerCreator._getFirstChildByTag: - Node MUST NOT be empty ');
            return false;
        }

        if (!node.children || node.children.length === 0) {
            return false;
        }

        var result = null;

        [].forEach.call(node.children, function (_node) {

            if (_node.children && _node.children.length > 0) {
                [].forEach.call(_node.children, function (_node2) {
                    if (!result) {
                        result = _getFirstChildByTag(_node2, tags);
                    }
                });
            }

            if (!result) {
                (tags.indexOf(_node.tagName) != -1) && (result = _node);
            }

        });

        return result;
    }

    function _getRealHeight(_element) {

        if (!_element) {
            return;
        }

        var _elementClientHeight = _element.clientHeight;

        if (_elementClientHeight) {
            return _elementClientHeight
        }

        if (_element.children && _element.children.length === 0 && _elementClientHeight === 0) {
            return _elementClientHeight;
        }

        [].forEach.call(_element.children, function (node) {
            _elementClientHeight = node.children
                ? _getRealHeight(node)
                : node.clientHeight + _getMargin(node, 'bottom') + _getMargin(node, 'top');
        });

        return _elementClientHeight;
    }

    function _getRealWidth(_element) {
        if (!_element) {
            return;
        }

        var _elementClientWidth = _element.clientWidth;

        if (_elementClientWidth) {
            return _elementClientWidth;
        }

        if (_element.children && _element.children.length === 0 && _elementClientWidth === 0) {
            return _elementClientWidth;
        }

        if (!_element.children) {
            return _elementClientWidth;
        }

        [].forEach.call(_element.children, function (node) {
            _elementClientWidth = node.children
                ? _getRealWidth(node)
                : node.clientWidth + _getRealWidth(node, 'left') + _getMargin(node, 'right');
        });

        return _elementClientWidth;
    }

    function _createIntoParentSibling(_el) {
        if (_el.parentNode.children.length > 1) {
            _create(_el.nextSibling);
        } else {
            _createIntoParentSibling(_el.parentNode.nextSibling);
        }
    }

    function _capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function _getMargin(_element, direction) {

        try {
            var style = _element.currentStyle || window.getComputedStyle(_element);
            var margin = style['margin' + _capitalizeFirstLetter(direction.toLowerCase())].replace('px', '');
            return _isNumeric(margin) ? parseInt(margin) : 0;
        } catch (e) {
            console.error(e);
            return 0;
        }
    }

    function _create(_element) {

        //if (_hasAddInside(_element)) {
        //    return
        //}


        if (inserted) {
            return
        }

        if (!_element) {
            return;
        }

        if (_element.clientHeight === undefined) {
            return;
        }

        var nodeClientRealHeight = _element.clientHeight == 0
            ? _getRealHeight(_element)
            : _element.clientHeight + _getMargin(_element, 'bottom') + _getMargin(_element, 'top');

        if (nodeClientRealHeight === 0) {
            return;
        }

        cumulativeGlobal += nodeClientRealHeight;
        //console.log(_element, cumulativeGlobal, nodeClientRealHeight);

        if (cursor.beforeGoal) {
            return;
        }

        if (cursor.neededGoal) {

            if (_hasChildTags(_element, ['P', 'BLOCKQUOTE', 'PRE'])) {
                cumulativeGlobal -= nodeClientRealHeight;

                [].forEach.call(_element.children, function (_e) {
                    _create(_e);
                });
                return;
            }

            if (['TR', 'TD', 'THEAD', 'TBODY', 'TFOOTER', 'TABLE'].indexOf(_element.tagName) != -1) {

                function _getTableNode(_element) {
                    if (_element.tagName === 'TABLE') {
                        return _element;
                    }

                    return (_element.parentNode && _element.parentNode.tagName !== 'TABLE')
                        ? _getTableNode(_element.parentNode)
                        : _element.parentNode;
                }

                _insert(_getTableNode(_element));
                return;
            }

            if (['LI', 'INS', 'IMG', 'TABLE'].indexOf(_element.tagName) != -1) {

                _insert(_element.parentNode);
                return;
            }

            _insert(_element);
            return;
        }

        if (cursor.afterGoal) {

            cumulativeGlobal -= nodeClientRealHeight;

            if (nodeClientRealHeight < articleHeight && ['IFRAME', 'IMG', 'FIGURE', 'TIME', 'CODE'].indexOf(_element.tagName) != -1) {

                _insert(_element);
                return;
            }

            /**
             * Part of business logic
             * ----
             * If there is large paragraph, which does not
             * suit our range - insert informer before it.
             */
            if (['P', 'BLOCKQUOTE', 'PRE', 'SPAN'].indexOf(_element.tagName) != -1) {

                if (['BLOCKQUOTE', 'PRE'].indexOf(_element.tagName) != -1) {

                    if (!_element.children) {
                        _insert(_element);
                        return;
                    }

                    [].forEach.call(_element.children, function (_e) {
                        _create(_e);
                    });

                    return;
                }

                if (_hasChildTags(_element, ['IMG', 'FIGURE', 'IFRAME'])) {
                    _insert(_getFirstChildByTag(_element, ['IMG', 'FIGURE', 'IFRAME']));
                    return;
                }

                _insert(_element, true);
                return;
            }

            if (_element.children && _element.children.length) {

                [].forEach.call(_element.children, function (_e) {
                    _create(_e);
                });
            } else {
                _createIntoParentSibling(_element);
            }
        }
    }

    function _initiateCreating() {

        if (!article) {
            console.error();
            return
        }

        if (!article.children && !article.length) {
            console.error('SmartInformerCreator._initiateCreating: Article cant be without any children');
        }

        (articleHeight === 0) && _calculateArticleHeight();

        if (article.length) {
            [].forEach.call(article, function (article) {
                [].forEach.call(article.children, function (_e) {
                    _create(_e)
                });
            });
        } else {
            [].forEach.call(article.children, function (_e) {
                _create(_e)
            });
        }
    }

    var cssClasses = ['comments', 'related', 'share', 'at-share-btn-elements'];
    var ids = ['ad-space', 'fb_comments_div', 'ad-space', 'div-gpt-ad',
        'MarketGidScript', 'MarketGidScriptRoot', 'disqus_comments_div',
        'ScriptRoot', 'Preload', 'MarketGidComposite', 'SC_TBlock'];

    function _hasAddInside(_element) {
        var cantBeCalculated = false;

        ids.forEach(function (id) {
            if (!cantBeCalculated) {
                cantBeCalculated = _element.id.includes(id)
            }
        });

        cssClasses.forEach(function (cssClass) {
            if (!cantBeCalculated) {
                cantBeCalculated = _element.classList.contains(cssClass);
            }
        });

        return cantBeCalculated;
    }

    function _allChildHasZeroClientHeight(_element) {
        if (!_element.children || _element.children === 0) {
            return true;
        }

        var result = true;
        [].forEach.call(_element.children, function (node) {

            if (!result) {
                return;
            }

            if (node.clientHeight !== 0) {
                result = false;
                return;
            }

            if (!result && node.children && node.children.length) {
                result = _allChildHasZeroClientHeight(node);
            }
        });

        return result;
    }

    function _getRealArticleHeight(_element) {

        if (!_element) {
            return;
        }

        if (_hasAddInside(_element)) {
            return;
        }

        var height = _element.clientHeight + _getMargin(_element, 'bottom') + _getMargin(_element, 'top');

        if (!height) {
            return;
        }

        if (((_element.children && _element.children.length === 0) || _allChildHasZeroClientHeight(_element)) && height !== 0) {
            articleHeight += height;
            return;
        }

        [].forEach.call(_element.children, function (node) {
            _getRealArticleHeight(node);
        });

        return height;
    }

    function _allChildHasZeroClientWidth(_element) {
        if (!_element.children || _element.children === 0) {
            return _element.clientWidth === 0;
        }

        var result = false;
        [].forEach.call(_element.children, function (node) {
            if (!result && node.clientWidth === 0) {
                result = true;
            } else if (!result && node.children && node.children.length) {
                result = _allChildHasZeroClientWidth(node);
            }
        });

        return result;
    }

    function _getRealArticleWidth(_element) {

        if (!_element) {
            return;
        }

        var height = _element.clientWidth + _getMargin(_element, 'left') + _getMargin(_element, 'right');

        if (!height) {
            return;
        }

        if (((_element.children && _element.children.length === 0) || _allChildHasZeroClientWidth(_element))
            && height !== 0
            && (['P', 'PRE', 'BLOCKQUOTE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',].indexOf(_element.tagName) != -1 )) {

            if (articleWidth <= height) {
                articleWidth = height;
            }

            return;
        }

        [].forEach.call(_element.children, function (node) {
            _getRealArticleWidth(node);
        });
    }

    function _calculateArticleHeight() {

        if (!article) {
            return;
        }

        _getRealArticleHeight(article);
        _getRealArticleWidth(article);

        offsetHeightFrom = articleHeight * percentageFrom / 100;
        offsetHeightTo = articleHeight * percentageTo / 100;

        console.log(articleHeight, articleWidth, offsetHeightFrom, offsetHeightTo );
    }

    _initMarketGidCompositeRootDiv();
    _parseArticle();
    _calculateArticleHeight();

    // give public API method
    return {
        create: _initiateCreating
    }
}

