var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campgrounds = [
        {name: "Salmon Creek", image: "https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
        {name: "Mount Castro", image: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg"},
        {name: "Grand Something", image: "https://acadiamagic.com/940x366/campground-1301.jpg"},
        {name: "Salmon Creek", image: "https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
        {name: "Mount Castro", image: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg"},
        {name: "Grand Something", image: "https://acadiamagic.com/940x366/campground-1301.jpg"},
        {name: "Salmon Creek", image: "https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
        {name: "Mount Castro", image: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg"},
        {name: "Grand Something", image: "https://acadiamagic.com/940x366/campground-1301.jpg"},
        {name: "Salmon Creek", image: "https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
        {name: "Mount Castro", image: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg"},
        {name: "Grand Something", image: "https://acadiamagic.com/940x366/campground-1301.jpg"},
        {name: "Small AnotherThing", image: "http://www.chippewalanding.com/images/sized%20280/campgrounds-campsite.jpg"}
    ];
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.campground;
    var imageUrl = req.body.campgroundImage;
    campgrounds.push({name:name, image:imageUrl});
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
}); 