function SmartInformerCreator(id, _percentageFrom, _percentageTo) {

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
    var insertedElementId;
    var percentageFrom = _percentageFrom || 30;
    var percentageTo = _percentageTo || 60;
    var articleHeight = 0;
    var articleParsed;
    var articleInDOM;
    var informerRootDiv;
    var offsetHeightFrom;
    var offsetHeightTo;

    function _initInformerRootDiv() {

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

    function _getParsedArticle() {

        // Readability's parse() works by modifying the DOM.
        // This removes some elements in the web page.
        // You could avoid this by passing the clone of the
        // document object while creating a Readability object.
        var loc = document.location;

        articleParsed = new Readability({
            spec: loc.href,
            host: loc.host,
            prePath: loc.protocol + "//" + loc.host,
            scheme: loc.protocol.substr(0, loc.protocol.indexOf(":")),
            pathBase: loc.protocol + "//" + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf("/") + 1)
        }, document.cloneNode(true)).parse();

        try {
            articleInDOM = document.getElementById(articleParsed.rootElement.id)
        } catch (e) {
            console.error(e);
            throw new Error(e);
        }
    }

    function _insert(element, _before) {

        // вставить перед текушим элементом
        var composedDiv = document.getElementById(insertedElementId);
        var before = _before || false;

        // remove old MarketGidComposite
        composedDiv.parentNode.removeChild(composedDiv);

        // paste informer root
        element.parentNode.insertBefore(informerRootDiv, before ? element : element.nextSibling);

        // paste MarketGidComposite to the informer root
        informerRootDiv = document.getElementById(informerRootDiv.id);
        informerRootDiv.appendChild(composedDiv);
    }

    function _insertBefore(element) {
        _insert(element, true);
    }

    function _insertAfter(element) {
        _insert(element);
    }

    // Рассматриваем Element - для кажого ребенка - смотрим его высоту
    // если высота в начальной границы <30% - переходим к
    // следующему ребенку и добавляем в кумулятивную сумму значение текущего ребенка

    // если высота в начальной границы >60% - берем первый
    // дочерний элемент от рассмартиваемого и в нем
    // производим дольнейший поиск

    // если высота в пределах 30 <= h <= 60 - разбираем блок

    // Разбор блока - берем все элементы разбираемого блока и смотрим всех его детей
    //
    // клонирование кумулятивной суммы для того чтобы делать подсчеты
    // по дочерним элементам и в случае невозможности
    // вставки - перейти на уровень выше и попробовать со
    // старой кумулятивной суммы продолжить поиск блока

    // каждый ребенок рассматривается как кандидат для вставки информера
    // в случа если:
    // Если в диапазоне 10-20% статьи размещен длинный и неразрывный абзац текста,
    // мы двигаемся выше диапазона (от 10% к 1%) и ищем разрыв абзацев.
    // Если это оказался первый абзац - показываем виджет над
    // между заголовком и первым абзацем.

    // Если в диапазоне 10-20% статьи размещена картинка,
    // или видео - показываем виджет под картинкой. Важно,
    // что бы при этом у блока с виджетом был отступ от картинки.
    function _Create(_element) {
        var cumulativeLocal = 0;

        // Рассматриваем Element - для кажого ребенка - смотрим его высоту
        // если высота в начальной границы <30% - переходим к
        // следующему ребенку и добавляем в кумулятивную сумму значение текущего ребенка
        for (var i = 0; i < _element.children.length; i++) {

            var child = _element.children[i];

            // если высота в начальной границы >60% - берем первый
            // дочерний элемент от рассмартиваемого и в нем
            // производим дольнейший поиск
            if (child.clientHeight >= offsetHeightFrom) {

                if (child.children && child.children.length) {
                    _Create(child);
                    break;
                } else {
                    throw new Error('Cant parse page to paste MG Smart informer');
                }
            }

            cumulativeLocal += child.clientHeight;

            // если высота в начальной границы <30% - переходим к
            // следующему ребенку и добавляем в кумулятивную сумму значение текущего ребенка
            if (cumulativeLocal <= offsetHeightFrom) {
                continue;
            }

            if (cumulativeLocal >= offsetHeightFrom && cumulativeLocal <= offsetHeightTo) {
                // Если в диапазоне 10-20% статьи размещен длинный и неразрывный абзац текста,
                // мы двигаемся выше диапазона (от 10% к 1%) и ищем разрыв абзацев.
                // Если это оказался первый абзац - показываем виджет над
                // между заголовком и первым абзацем.
                if (cumulativeLocal > offsetHeightTo) {
                    _insertBefore(child);
                    break;
                }

                _insertAfter(child);
                break;
            }

        }
    }

    function _init(_insertedElementId) {

        insertedElementId = _insertedElementId;

        if (!articleInDOM.children) {
            throw new Error('Article cant be without any children');
        }

        (articleHeight === 0) && _calculateArticleHeight();

        _Create(articleInDOM)
    }

    function _calculateArticleHeight() {
        articleHeight = 0;
        [].forEach.call(articleInDOM.children, function (e) { articleHeight += e.clientHeight; });
        offsetHeightFrom = articleHeight * percentageFrom / 100;
        offsetHeightTo = articleHeight * percentageTo / 100;
    }

    // init SmartInformerCreator
    _initInformerRootDiv();
    _getParsedArticle();
    _calculateArticleHeight();

    // give public API method
    return {
        init: _init
    }
}
