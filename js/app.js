var _app = function () {
    this.id = 0,
    this.videoElement = null,
    this.audioElement = null,
    this.musicVolume = .12,
    this.musicFadeIn = 4e3,
    this.skippedIntro = !1,
    this.backgroundToggler = !1,
    this.shouldIgnoreVideo = !1,
    this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"],
    this.brandDescription = ["kee#0006 - 404286753646837761", "act broke to stay rich", "professional paster", "i have existential crisis", "% kee", "♪ 1nonly - MINE ♪ ", "kee#0006 - 404286753646837761"],
    this.iconChanger = function (e, i) {
        if (e) {
            i = i2e3;
            var n = 0;
            setInterval((function () {
                if (n < e.length) {
                    var i = document.querySelector("link[rel*='icon']");
                    document.createElement("link");
                    i.type = "image/x-icon",
                    i.rel = "shortcut icon",
                    i.href = e[n],
                    document.getElementsByTagName("head")[0].appendChild(i)
                } else n = 0;
                ++n
            }), i)
        }
    }
}, app = new _app;