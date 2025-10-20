const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles() {
    return src("./*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("./"));
}

function watcher() {
    watch("./*.scss", styles);
}

exports.styles = styles;
exports.watcher = watcher;