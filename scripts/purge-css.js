const { PurgeCSS } = require("purgecss");
const fs = require("fs");

(async () => {
    try {
        const purgeCSSResults = await new PurgeCSS().purge({
            content: ["src/_site/**/*.html"],
            css: ["src/_site/assets/css/style.css"],
        });

        // Write the purged CSS back to the original file
        fs.writeFileSync("src/_site/assets/css/style.css", purgeCSSResults[0].css, "utf8");
        console.log("Purged CSS written to src/_site/assets/css/style.css");
    } catch (err) {
        console.error("Error during PurgeCSS processing:", err);
    }
})();