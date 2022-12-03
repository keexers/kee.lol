! function() {
    var e = [];
    window.mobileAndTabletCheck = function() {
        var e, n = !1;
        return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (n = !0), n
    }, $(document).ready((function() {
        var e = [{
            name: "steam",
            link: "https://steamcommunity.com/id/keexers/"
        }, {
            name: "random nn",
            link: "https://solo.to/craze"
        }, {
            name: "discord",
            link: "https://discord.com/users/404286753646837761/"
        }, {
            name: "v3rmillion",
            link: "https://v3rmillion.net/member.php?action=profile&uid=2310682"
        }, {
            name: "osu",
            link: "https://osu.ppy.sh/users/14738244"
        }, {
            name: "youtube",
            link: "https://www.youtube.com/channel/UCcQDVaXO5x2Nek8V1Fcfqeg"
        }];
        for (var n in e) {
            var t = e[n];
            $("#marquee").append('<a href="' + t.link + '" target="_BLANK">' + t.name + "</a>"), t = $("#marquee").children("a").last(), n != e.length - 1 && $("#marquee").append(' <img class="emoticon" src="12148purpleheart_110423@18.png"> ')
        }
        window.mobileAndTabletCheck() && ($("#background").replaceWith('<div id="background" style="background-image: url(https://cdn.discordapp.com/attachments/955956640497160243/1021760973364809769/d30750eda6c30bba9295ad629961420555c05496.png"></div>'), app.shouldIgnoreVideo = !0), app.titleChanger(), app.iconChanger([])
    })), $.cookie("videoTime") && (app.videoElement.currentTime = $.cookie("videoTime"), app.audioElement.currentTime = $.cookie("videoTime")), document.addEventListener("contextmenu", (function(e) {
        e.preventDefault()
    })), $(window).on("keydown", (function() {
        return 123 != event.keyCode && ((!event.ctrlKey || !event.shiftKey || 73 != event.keyCode) && ((!event.ctrlKey || 73 != event.keyCode) && ((!event.ctrlKey || !event.shiftKey || 74 != event.keyCode) && ((!event.ctrlKey || 74 != event.keyCode) && void 0))))
    })), document.body.onkeyup = function(e) {
        if (32 == e.keyCode && app.skippedIntro) return app.backgroundToggler ? (app.videoElement.play(), app.audioElement.play()) : (app.videoElement.pause(), app.audioElement.pause()), app.backgroundToggler = !app.backgroundToggler
    }, $("html").on("contextmenu", (function(e) {
        var n = document.createElement("img");
        n.src = "assets/yae.png", n.width = 16, n.height = 16, n.alt = "No", n.style = "position: absolute; left: " + e.pageX + "px; top: " + e.pageY + "px; z-index: 10", n.className = "troll" + (app.skippedIntro ? "" : " trollface-light"), document.body.appendChild(n)
    })), setInterval((function() {
        $(".troll").remove()
    }), 600), $(".skip").click((function() {
        t()
    })), $.fn.extend({
        animateCss: function(e) {
            return this.addClass("animated " + e).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function() {
                $(this).removeClass("animated " + e)
            })), this
        }
    });
    var n = function(e, n, t, i) {
        t = "number" == typeof t ? t : [0, i = t], setTimeout((function() {
            new Typed("#line" + (2 !== app.id ? ++app.id : app.id += 2), {
                strings: e,
                typeSpeed: n,
                onComplete: i
            })
        }), t)
    };
    $.getJSON("https://api.ipgeolocation.io/ipgeo?apiKey=2bdc619693544329841a3196dca3f6c0", (function(o) {
        n(["Starting.. Opening... ", "granting connection to my dick <span style='font-size: 14px; color: #FF0000;'>[kee.lol]</span>..."], 30, (function() {
            app.skippedIntro || (i(), n(["permission fucking granted <span style='font-size: 14px; color: #0f0;'>[success]</span>", "loading site...."], 30, 501, (function() {
                app.skippedIntro || (i(), n(["<i style='color: #FFFF00'>welcome to kee.lol u nigger</i>"], 30, 500, (function() {
                    e.push(setTimeout((function() {
                        app.skippedIntro || (i(), setTimeout((function() {
                            t()
                        }), 500))
                    }), 1e3))
                })))
            })))
        }))
    }));
    var t = function() {
            app.skippedIntro || (app.skippedIntro = !0, e.forEach((function(e) {
                clearTimeout(e)
            })), $(".top-right").remove(), $("#main").fadeOut(100, (function() {
                $("#main").remove(), $("#marquee").marquee({
                    duration: 15e3,
                    gap: 420,
                    delayBeforeStart: 1e3,
                    direction: "left",
                    duplicated: !0
                }), setTimeout((function() {
                    $(".brand-header").animateCss(app.effects[Math.floor(Math.random() * app.effects.length)])
                }), 200), setTimeout((function() {
                    new Typed("#brand", {
                        strings: app.brandDescription,
                        typeSpeed: 40,
                        onComplete: function() {
                            i()
                        }
                    })
                }), 1350), setTimeout((function() {
                    app.shouldIgnoreVideo || (app.videoElement.play(), app.audioElement.play()), app.videoElement.addEventListener("timeupdate", (function() {
                        $.cookie("videoTime", app.videoElement.currentTime, {
                            expires: 1
                        })
                    }), !1), $(".marquee-container").css("visibility", "visible").hide().fadeIn(100), $(".marquee-container").animateCss("zoomIn"), $(".container").fadeIn(), $(".background").fadeIn(200, (function() {
                        app.shouldIgnoreVideo || $("#audio").animate({
                            volume: app.musicVolume
                        }, app.musicFadeIn)
                    }))
                }), 200)
            })))
        },
        i = function() {
            return $("span").siblings(".typed-cursor").css("opacity", "0")
        }
}();