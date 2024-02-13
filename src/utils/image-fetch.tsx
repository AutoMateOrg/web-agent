// import {ImageList}  from "../models/ImageList"

// const imageList = new ImageList()
import { images } from "../lib/images"


function ImageFetch(imageList: any, imagePage: string, imageName: string) {
    const results = imageList.find((item: any) => item.name === imageName && item.page === imagePage)
    return results.url
}

console.log(ImageFetch(images, "about", "porsche"))
    