/**
 * Create DIV element and paste element with given ID
 *
 * @param id
 * @param _percentageFrom
 * @param _percentageTo
 * @returns {{create: _initiateCreating}}
 * @constructor
 */
function SmartInformerCreator(id, _percentageFrom, _percentageTo) {

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    if (!isNumeric(_percentageFrom) || !isNumeric(_percentageTo)) {
        throw new Error('Provided percentages must be numeric only.' +
            ' _percentageFrom: ' + _percentageFrom +
            ' _percentageTo: ' + _percentageTo + ' given');
    }

    if (typeof id == 'undefined' || id == '') {
        throw new Error('Root Id was excepted but ' + id + ' given');
    }

    if (!_percentageFrom) {
        console.warn('Percentage from was excepted but it was not given. Default value (30% will be used)');
    }

    if (!_percentageTo) {
        console.warn('Percentage to was excepted but it was not given. Default value (60% will be used)');
    }

    if (_percentageFrom < 0 || _percentageFrom > 100) {
        throw new Error('_percentageFrom param must be between 0-100 and lower than _percentageTo. ' + _percentageFrom + ' given');
    }

    if (_percentageTo < 0 || _percentageTo > 100) {
        throw new Error('_percentageFrom param must be between 0-100 and lower than _percentageTo. ' + _percentageFrom + ' given');
    }

    if (_percentageFrom > _percentageTo) {
        throw new Error('_percentageFrom > _percentageTo. This must be _percentageFrom < _percentageTo');
    }

    var rootId = id;
    var marketGidCompositeId;
    var percentageFrom = _percentageFrom === null || _percentageFrom === undefined ? 30 : _percentageFrom;
    var percentageTo = _percentageTo === null || _percentageTo === undefined ? 60 : _percentageTo;
    var articleHeight = 0;
    var articleParsed;
    var article;
    var informerRootDiv;
    var offsetHeightFrom;
    var offsetHeightTo;

    function _initMarketGidCompositeRootDiv() {

        informerRootDiv = document.createElement('div');
        informerRootDiv.id = 'MarketGidCompositeRoot' + rootId;
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

    function _findRealArticleInDOM(node) {

        // try to find article body by id
        if (node['id']) {
            return document.getElementById(node['id']);

            // try to find article body by css class
        } else if (node.classList && node.classList.length) {

            var classes = [];
            [].forEach.call(node.classList, function (className) {
                classes.push(className);
            });

            return document.getElementsByClassName(classes.join('.'));

        } else {
            return node.parentNode ? _findRealArticleInDOM(node.parentNode) : null;
        }
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

        article = _findRealArticleInDOM(articleParsed.rootElements[0]);

        if (!article) {
            throw new Error('Article In DOM not recognized');
        }
    }

    function _insert(element, _before) {
        var composedDiv = document.getElementById(marketGidCompositeId);

        /**
         * Important: Part of business logic
         * ----
         * You cant render informer block if article height less then block height -245px
         */
        if (articleHeight <= 300) {
            console.warn('Smart Informer: Article is too small to render informer block');
            // so clean DOM
            composedDiv.parentNode.removeChild(composedDiv);
            return;
        }

        var before = _before || false;
        composedDiv.parentNode.removeChild(composedDiv);
        element.parentNode.insertBefore(informerRootDiv, before ? element : element.nextSibling);
        informerRootDiv = document.getElementById(informerRootDiv.id);
        informerRootDiv.appendChild(composedDiv);
        inserted = true;
    }

    var cumulativeGlobal = 0;
    var inserted = false;
    var cursor = {};

    Object.defineProperties(cursor, {
        beforeGoal: {get: function () {
            return cumulativeGlobal === 0 || cumulativeGlobal <= offsetHeightFrom;
        }},
        neededGoal: {get: function () {
            return cumulativeGlobal >= offsetHeightFrom && cumulativeGlobal <= offsetHeightTo;
        }},
        afterGoal: {get: function () {
            return cumulativeGlobal >= offsetHeightTo || cumulativeGlobal <= articleHeight;
        }}
    });

    function _getRealHeight(_element) {

        var _elementClientHeight = _element.clientHeight;

        if (_elementClientHeight) {
            return _elementClientHeight
        }

        if (_element.children && _element.children.length===0 && _elementClientHeight===0) {
            return _elementClientHeight;
        } else {
            [].forEach.call(_element.children, function (node) {

                if (node.children) {
                    _elementClientHeight = _getRealHeight(node);
                } else {
                    _elementClientHeight = node.clientHeight;
                }
            });
        }

        return _elementClientHeight;
    }

    function _createIntoParentSibling(_el) {

        if (_el.parentNode.children.length > 1) {
            _create(_el.nextSibling);
        } else {
            _createIntoParentSibling(_el.parentNode.nextSibling);
        }
    }


    function _create(_element) {

        if (inserted) {
            return
        }

        if (_element.clientHeight===undefined){
            return;
        }

        var nodeClientRealHeight = _element.clientHeight == 0
            ? _getRealHeight(_element)
            : _element.clientHeight;


        if (nodeClientRealHeight === 0) {
            return;
        }

        cumulativeGlobal += nodeClientRealHeight;

        if (cursor.beforeGoal) {
            return;
        }

        if (cursor.neededGoal) {

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

            if (_element.tagName === 'LI') {
                _insert(_element.parentNode);
                return;
            }

            if (['IFRAME', 'IMG', 'FIGURE'].indexOf(_element.tagName) != -1) {

                _insert(_element);
                return;
            }

            _insert(_element);
            return;
        }

        if (cursor.afterGoal) {
            cumulativeGlobal -= nodeClientRealHeight;

            /**
             * Part of business logic
             * ----
             * If there is large paragraph, which does not
             * suit our range - insert informer before it.
             */
            if (['P', 'BLOCKQUOTE', 'PRE', 'SPAN'].indexOf(_element.tagName) != -1) {

                if (['BLOCKQUOTE', 'PRE'].indexOf(_element.tagName) != -1) {

                    if (! _element.children ){
                        _insert(_element);
                        return;
                    }

                    [].forEach.call(_element.children, function (_e) {
                        _create(_e);
                    });

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

    function _initiateCreating(_marketGidCompositeID) {

        if (!_marketGidCompositeID) {
            throw new Error('_marketGidCompositeID must be specified');
        }

        marketGidCompositeId = _marketGidCompositeID;

        if (!article.children && !article.length) {
            throw new Error('Article cant be without any children');
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

    function _calculateArticleHeight() {

        articleHeight = 0;

        if (article.length) {

            [].forEach.call(article, function (article) {
                [].forEach.call(article.children, function (e) {
                    articleHeight += e.clientHeight;
                });
            });
        } else {

            [].forEach.call(article.children, function (e) {
                articleHeight += e.clientHeight;
            });
        }

        offsetHeightFrom = articleHeight * percentageFrom / 100;
        offsetHeightTo = articleHeight * percentageTo / 100;
    }

    _initMarketGidCompositeRootDiv();
    _parseArticle();
    _calculateArticleHeight();

    // give public API method
    return {
        create: _initiateCreating
    }
}

