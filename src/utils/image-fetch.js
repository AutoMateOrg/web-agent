"use strict";
// import {ImageList}  from "../models/ImageList"
Object.defineProperty(exports, "__esModule", { value: true });
// const imageList = new ImageList()
var images_1 = require("../lib/images");
function ImageFetch(imageList, imagePage, imageName) {
    var results = imageList.find(function (item) { return item.name === imageName && item.page === imagePage; });
    return results.url;
}
console.log(ImageFetch(images_1.images, "about", "porsche"));
