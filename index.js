const request = require("request-promise")
const cheerio = require("cheerio")
const fs = require("fs")
const json2csv = require("json2csv").Parser;

const pic = "https://in.pinterest.com/search/pins/?q=Black%20Wallpapers&rs=typed&term_meta[]=Black%7Ctyped&term_meta[]=Wallpapers%7Ctyped";

(async() => {

     let pin = []
     const response = await request({
         uri:pic,
         header: {
            //grabing header in production level...dekhe sune korte hbe..bhulbhal pathale ip block even legal case hte pare
            accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",

         },
       gzip: true, //as per pinrest...

     });

     let $ = cheerio.load(response)

    // const all the selectors needed to grab the pin wallpapers

    pin.push({
        imgtitle,img //
    });

    const j2cv = new json2csv()
    const csv = j2cv.parse(pin)

    fs.writeFileSync("./pin.csv", csv, "utf-8")

})();
