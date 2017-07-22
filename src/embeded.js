var embeded = [

    // Picture projects
    {
        projectName: 'flickr',
        link:'https://flickrembed.com/',
        types: [
            {
                selector: {
                    tag:'div',
                    type: 'id',
                    value: 'flickrembed'
                },
                example: "<div id='flickrembed'></div><div style='position:absolute; top:-70px; display:block; text-align:center; z-index:-1;'><a href='https://www.voucherbadger.co.uk/lastminute/'>Save up to 15% off at lastminute.com when using this promo code</a></div><small style='display: block; text-align: center; margin: 0 auto;'>Powered by <a href='https://flickrembed.com'>flickr embed</a>.</small><script src='https://flickrembed.com/embed_v2.js.php?source=flickr&layout=fixed&input=aa&sort=0&by=keywords&width=&height=&theme=grid_left&scale=fit&limit=10&skin=alexis'></script>",
            },
            {
                selector: {
                    tag:'div',
                    type: 'src_contains',
                    value: 'flickrembed.com/cms_embed'
                },
                example: "<div style='position: relative; padding-bottom: 60%; overflow: auto; -webkit-overflow-scrolling:touch;'><iframe style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='https://flickrembed.com/cms_embed.php?source=flickr&layout=fixed&input=aa&sort=0&by=keywords&width=&height=&theme=grid_left&scale=fit&limit=10&skin=alexis' scrolling='no' frameborder='0' allowFullScreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe><small style='display: block; text-align: center; position: absolute; bottom: 0; left: 0; right: 0; margin-left: auto; margin-right: auto;'>Powered by <a href='https://flickrembed.com'>flickr embed</a>.</small></div><div style='position:absolute; top:-70px; display:block; text-align:center; z-index:-1;'><a href='https://www.voucherbadger.co.uk/lastminute/'>Save up to 15% off at lastminute.com when using this promo code</a></div>"
            },
        ]
    },
    {
        projectName: 'polaroidswing',
        link:'https://polaroidswing.com/press',
        types: [
            {
                selector: {
                    tag:'iframe',
                    type: 'src_contains',
                    value: 'flickrembed'
                },
                example: "<iframe src='https://polaroidswing.com/embed/p/2f936970-457c-11e6-b083-ce8084bafae7' width='377' height='550' scrolling='no' frameborder='0' allowtransparency='true'></iframe>",
            },
        ]


    },
    {
        projectName: 'kuula',
        link:'https://liegetogether.be/',
        types: [
            {
                selector: {
                    tag:'iframe',
                    type: 'class_contains',
                    value: 'kuula'
                },
                example: "<iframe class='kuula7lfpt' frameborder='0' scrolling='no' allowfullscreen='true' src='https://kuula.co/share/7lfpT?logo=0'></iframe>",
            },
        ]


    },
    {
        projectName: 'imgur',
        link:'https://blog.imgur.com/2015/04/07/embed-your-post-anywhere/',
        types: [
            {
                selector: {
                    tag: 'iframe',
                    type: 'class_contains',
                    value: 'imgur-embed-iframe'
                },
                example: "<iframe allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' class='imgur-embed-iframe-pub imgur-embed-iframe-pub-HRaPmbj-true-540' scrolling='no' src='https://imgur.com/HRaPmbj/embed?ref=https%3A%2F%2Fhelp.imgur.com%2Fhc%2Fen-us%2Farticles%2F211273743-Embed-Unit&amp;w=540' id='imgur-embed-iframe-pub-HRaPmbj' style='height: 500px; width: 540px; margin: 10px 0px; padding: 0px;'></iframe>",
            }
        ]
    },
    {
        projectName: 'xkcd',
        link: 'https://xkcd.com/177/',
        types: [
            {
                selector: {
                    tag: 'img',
                    type: 'src_contains',
                    value: 'imgs.xkcd.com'
                },
                example: "<img src='//imgs.xkcd.com/comics/alice_and_bob.png' title='Yet one more reason I'm barred from speaking at crypto conferences.' alt='Alice and Bob'>",
            },
        ]
    },
    {
        projectName: 'asofterworld',
        link: 'http://www.asofterworld.com/',
        types: [
            {
                selector: {
                    tag: 'img',
                    type: 'src_contains',
                    value: 'www.asofterworld.com'
                },
                example: "<img width='720' src='http://www.asofterworld.com/clean/end.jpg' title='listen while you can' onclick='makeAlert('', 'listen while you can');'>' alt='Alice and Bob'>",
            },
        ]
    },
    {
        projectName: 'tumblr',
        link: 'http://softerworld.tumblr.com/post/120734730756/davidmalki-the-great-webcomic-a-softer-world/embed',
        types: [
            {
                selector: {
                    tag: 'div',
                    type: 'class_contains',
                    value: 'tumblr-post'
                },
                example: "<div class='tumblr-post' data-href='https://embed.tumblr.com/embed/post/H1cgqWIAkQvCteENOEXttQ/120734730756' data-did='170a1953fc09efc3691d50e4dc210da66c6e8539'><a href='http://softerworld.tumblr.com/post/120734730756/davidmalki-the-great-webcomic-a-softer-world'>http://softerworld.tumblr.com/post/120734730756/davidmalki-the-great-webcomic-a-softer-world</a></div>  <script async src='https://assets.tumblr.com/post.js'></script>', 'listen while you can');'>' alt='Alice and Bob'>",
            },
        ]
    },
    {
        projectName: 'qwantz',
        link: 'http://www.qwantz.com/index.php?comic=3162',
        types: [
            {
                selector: {
                    tag: 'img',
                    type: 'src_contains',
                    value: 'www.qwantz.com'
                },
                example: "<img src='http://www.qwantz.com/comics/comic2-3167.png' class='comic' title='wait wait wait, if OUR climate change warms up the planet with CO2, and a giant asteroid cools DOWN the planet and makes everything freeze... GUYS, I THINK I JUST CAME UP WITH THE PERFECT SOLUTION??'>  <script async src='https://assets.tumblr.com/post.js'></script>', 'listen while you can');'>' alt='Alice and Bob'>",
            },
        ]
    },
    {
        projectName: 'twentythree',
        link: 'https://video.twentythree.net/the-state-of-online-video-twentythree-report',
        types: [
            {
                selector: {
                    tag: 'iframe',
                    type: 'querySelector',
                    value: 'div > iframe[src^=https://video.twentythree.net]'
                },
                example: "<div style='width:100%; height:0; position: relative; padding-bottom:56.24999999296875%'><iframe src='https://video.twentythree.net/v.ihtml/player.html?source=share&photo%5fid=18198848' style='width:100%; height:100%; position: absolute; top: 0; left: 0;' frameborder='0' border='0' scrolling='no' allowfullscreen='1' mozallowfullscreen='1' webkitallowfullscreen='1'></iframe></div>  <script async src='https://assets.tumblr.com/post.js'></script>', 'listen while you can');'>' alt='Alice and Bob'>",
            },
        ]
    },
    {
        projectName: 'dribbble',
        link: 'https://jribbble.com/',
        types: [
            {
                selector: {
                    tag: 'img',
                    type: 'src_contains',
                    value: 'cdn.dribbble.com'
                },
                example: "<img src='https://cdn.dribbble.com/users/29503/screenshots/3665281/artboard_2_1x.png'>",
            },
        ]
    },
    {
        projectName: 'SmugMug',
        link: 'https://hershy.smugmug.com/Photography/Daily-Photo-Galleries/Daily-photos-2008/i-zS5JnPX',
        types: [
            {
                selector: {
                    tag: 'a',
                    type: 'href_contains',
                    value: 'hershy.smugmug.com'
                },
                example: "https://hershy.smugmug.com/Photography/Daily-Photo-Galleries/Daily-photos-2008/i-HCnddnd/A",
            },
        ]
    },
    {
        projectName: 'meadd',
        link: 'https://meadd.com/dulceamargo/62683090#',
        types: [
            {
                selector: {
                    tag: 'img',
                    type: 'src_contains',
                    value: 'meadd.com'
                },
                example: "<img src='https://cache-assets.meadd.com/photos/full/62683090.jpg' alt='dulceamargo'>",
            },
        ]
    },
    {
        projectName: 'deviantart',
        link: 'http://www.deviantart.com/art/Daily-Painting-1703-Thundeer-693834514',
        types: [
            {
                selector: {
                    tag: 'object',
                    type: 'html_contains',
                    value: 'backend.deviantart.com'
                },
                example: "<object width='450' height='540'><param name='movie' value='http://backend.deviantart.com/embed/view.swf?1'><param name='flashvars' value='id=693834514&width=1337'><param name='allowScriptAccess' value='always'><embed src='http://backend.deviantart.com/embed/view.swf?1' type='application/x-shockwave-flash' width='450' height='540' flashvars='id=693834514&width=1337' allowscriptaccess='always'></embed></object><br><a href='http://cryptid-creations.deviantart.com/art/Daily-Painting-1703-Thundeer-693834514'>Daily Painting 1703# Thundeer</a> by <span class='username-with-symbol u'><a class='u premium username' href='http://cryptid-creations.deviantart.com/'>Cryptid-Creations</a><span class='user-symbol premium' data-quicktip-text='Core Member' data-show-tooltip='1' data-gruser-type='premium'></span></span> on <a href='http://www.deviantart.com'>DeviantArt</a>",
            },
        ]
    },


    // Video projects
    {
        projectName: 'youtube',
        link: 'https://www.youtube.com/',
        types: [
            {
                selector: {
                    tag: 'iframe',
                    type: 'src_contains',
                    value: 'www.youtube.com'
                },
                example: "<iframe width='560' height='315' src='https://www.youtube.com/embed/3R1ysTlxiVY' frameborder='0' allowfullscreen></iframe><br><a href='http://cryptid-creations.deviantart.com/art/Daily-Painting-1703-Thundeer-693834514'>Daily Painting 1703# Thundeer</a> by <span class='username-with-symbol u'><a class='u premium username' href='http://cryptid-creations.deviantart.com/'>Cryptid-Creations</a><span class='user-symbol premium' data-quicktip-text='Core Member' data-show-tooltip='1' data-gruser-type='premium'></span></span> on <a href='http://www.deviantart.com'>DeviantArt</a>",
            },
        ]
    },
    {
        projectName: 'twitch',
        link: 'https://www.twitch.tv/',
        types: [
            {
                selector: {
                    tag: 'iframe',
                    type: 'src_contains',
                    value: 'player.twitch.tv'
                },
                example: "<iframe src='http://player.twitch.tv/?<channel, video, or collection>'  height='<height>' width='<width>' frameborder='<frameborder>'scrolling='<scrolling>'allowfullscreen='<allowfullscreen>'></iframe></iframe><br><a href='http://cryptid-creations.deviantart.com/art/Daily-Painting-1703-Thundeer-693834514'>Daily Painting 1703# Thundeer</a> by <span class='username-with-symbol u'><a class='u premium username' href='http://cryptid-creations.deviantart.com/'>Cryptid-Creations</a><span class='user-symbol premium' data-quicktip-text='Core Member' data-show-tooltip='1' data-gruser-type='premium'></span></span> on <a href='http://www.deviantart.com'>DeviantArt</a>",
            },
        ]
    },
    {
        projectName: 'oddshot.tv',
        link: 'https://oddshot.tv/s/z_4Ps6',
        types: [
            {
                selector: {
                    tag: 'iframe',
                    type: 'src_contains',
                    value: 'oddshot.tv'
                },
                example: "<iframe src='https://oddshot.tv/s/z_4Ps6/embed' width='640' height='360' frameborder='0' allowfullscreen></iframe></iframe></iframe><br><a href='http://cryptid-creations.deviantart.com/art/Daily-Painting-1703-Thundeer-693834514'>Daily Painting 1703# Thundeer</a> by <span class='username-with-symbol u'><a class='u premium username' href='http://cryptid-creations.deviantart.com/'>Cryptid-Creations</a><span class='user-symbol premium' data-quicktip-text='Core Member' data-show-tooltip='1' data-gruser-type='premium'></span></span> on <a href='http://www.deviantart.com'>DeviantArt</a>",
            },
        ]
    },
    {
        projectName: 'ustream.tv',
        link: 'www.ustream.tv',
        types: [
            {
                selector: {
                    tag: 'iframe',
                    type: 'src_contains',
                    value: 'www.ustream.tv'
                },
                example: "<iframe width='480' height='270' src='http://www.ustream.tv/embed/6540154?html5ui' scrolling='no' allowfullscreen webkitallowfullscreen frameborder='0' style='border: 0 none transparent;'></iframe></iframe></iframe><br><a href='http://cryptid-creations.deviantart.com/art/Daily-Painting-1703-Thundeer-693834514'>Daily Painting 1703# Thundeer</a> by <span class='username-with-symbol u'><a class='u premium username' href='http://cryptid-creations.deviantart.com/'>Cryptid-Creations</a><span class='user-symbol premium' data-quicktip-text='Core Member' data-show-tooltip='1' data-gruser-type='premium'></span></span> on <a href='http://www.deviantart.com'>DeviantArt</a>",
            },
        ]
    }, {
        projectName: 'vimeo',
        link: 'vimeo.com',
        types: [
            {
                selector: {
                    tag: 'iframe',
                    type: 'src_contains',
                    value: 'player.vimeo.com'
                },
                example: "<iframe src='https://player.vimeo.com/video/192435760?portrait=0' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href='https://vimeo.com/192435760'>One minute in Moscow</a> from <a href='https://vimeo.com/enriquepacheco'>Enrique Pacheco</a> on <a href='https://vimeo.com'>Vimeo</a>.</p></iframe></iframe></iframe><br><a href='http://cryptid-creations.deviantart.com/art/Daily-Painting-1703-Thundeer-693834514'>Daily Painting 1703# Thundeer</a> by <span class='username-with-symbol u'><a class='u premium username' href='http://cryptid-creations.deviantart.com/'>Cryptid-Creations</a><span class='user-symbol premium' data-quicktip-text='Core Member' data-show-tooltip='1' data-gruser-type='premium'></span></span> on <a href='http://www.deviantart.com'>DeviantArt</a>",
            },
        ]
    }
];
