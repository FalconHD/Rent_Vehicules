
const photos = [
    {
        name: "camion",
        urls: [
            "https://www.hellopro.fr/images/produit-2/7/0/6/camions-poubelles-latero-5729607.jpg",
            "https://www.hellopro.fr/images/produit-2/0/2/0/camions-malaxeur-pompe-fbp-24-100-125-6059020.jpg",
            "https://www.hellopro.fr/images/produit-2/9/9/1/xxl-cabine-de-camion-man-largeur-244-m-6584199.jpg",
            "https://www.hellopro.fr/images/produit-2/2/6/5/lmt5311tfc-p-camion-gravillonneur-synchrone-tremie-a-lame-compacteur-ikom-17-m3-6597562.jpg"
        ]
    },
    {
        name: "chantier",
        urls: [
            "https://www.hellopro.fr/images/produit-2/8/3/6/192-cba-camion-nacelle-fe-group-195-m-6538638.jpg",
            "https://www.lectura-specs.com/models/renamed/orig/wheel-loaders-wa480-8-komatsu.png",
            "https://www.lectura-specs.com/models/renamed/orig/wheel-loaders-wa480-8-komatsu(1).png",
            "https://www.lectura-specs.com/models/renamed/orig/crawler-excavators-pc-78-us-8-komatsu.jpg",
            "https://www.lectura-specs.com/models/renamed/orig/wheel-loaders-wa-320-8-komatsu.png",
            "https://www.lectura-specs.com/models/renamed/orig/diesel-fd_25_t_12_fd_25_t_14-komatsu.jpg"
        ]
    },
    {
        name: "utilitaire",
        urls: [
            "https://www.daytoday.ma//storage/cars/May2018/IXuoZSb5EQgz8Uejxwvr.png",
            "https://www.daytoday.ma//storage/cars/May2018/ij51TWMMbqLokUq7s2or.png",
            "https://www.daytoday.ma//storage/cars/May2018/pKbP7xGOxb2Z1z3kzWLe.png",
            "https://www.daytoday.ma//storage/cars/May2018/XCHO9JsGFy30FBu151Yj.png",
            "https://www.daytoday.ma//storage/cars/May2018/ESDn8nhc79hl5acMiHvc.png"
        ]
    },
    {
        name: "berlin",
        urls: [
            "https://www.daytoday.ma//storage/cars/May2018/lYRgIlGhyPjL973wgOot.png",
            "https://www.daytoday.ma//storage/cars/May2018/w353YdhOuFKVDkdg3Qv3.png",
            "https://www.daytoday.ma//storage/cars/May2018/BliuboBvz9k4YPnfsa2c.png",
            "https://www.daytoday.ma//storage/cars/May2018/lLGSPOwYFRLPLFg6aGzU.png",

        ]
    },
    {
        name: "compact",
        urls: [
            ,
            "https://www.daytoday.ma//storage/cars/May2018/IH91N2oRu5hjxHLgUWGK.png",
            "https://www.daytoday.ma//storage/sliders/May2018/ECMaWX5o195K1oe440Az.png",
            "https://www.daytoday.ma//storage/sliders/May2018/le5L7XnVuaACuqOGG4KM.png",
            "https://www.daytoday.ma//storage/sliders/May2018/88LBbqd0bxLiZXD2mUdX.png",
        ]
    },
    {
        name: "moto",
        urls: [
            "https://www.hellopro.fr/images/produit-2/6/4/5/moto-cf-v5-187546.jpg",
            "https://www.sherco.com/wp-content/uploads/01_125-SE-RACING-WEB-1200px-600x400.jpg",
            "https://www.sherco.com/wp-content/uploads/DSC_3555-600x400.jpg",
            "https://www.webbikeworld.com/wp-content/uploads/2008/05/v7-special-right-2.jpg",
            "https://www.webbikeworld.com/wp-content/uploads/2021/01/2021-Moto-Guzzi-V7-Stone.jpg",
            "https://www.webbikeworld.com/wp-content/uploads/2021/01/2021-Harley-Davidson-low-rider-s.jpg"
        ]
    },
    {
        name: "citadin",
        urls: [
            
            "https://www.daytoday.ma//storage/cars/May2018/F8siFsPc5BSQMFo8WGpM.png",
            "https://www.daytoday.ma//storage/cars/May2018/xig8mfWm3cKZGdVN2QwH.png",
            "https://www.daytoday.ma//storage/cars/May2018/jpmboBE6CwClKaZUIVTd.png"
        ]
    },
]


const photosConatiner = document.querySelector(".photos")
const Filter = document.querySelector(".filter")

var buttonFilter = document.createElement("button")
buttonFilter.setAttribute("class", "FilterCoise")
buttonFilter.classList.add("btn")
buttonFilter.classList.add("cheked")
buttonFilter.setAttribute("name", "all")
buttonFilter.setAttribute("onclick", "getImages(this,name)")
buttonFilter.innerHTML = "All"
Filter.appendChild(buttonFilter)

photos.forEach(e => {
    var buttonFilter = document.createElement("button")
    buttonFilter.setAttribute("class", "FilterCoise")
    buttonFilter.classList.add("btn")
    buttonFilter.setAttribute("name", e.name)
    buttonFilter.setAttribute("onclick", "getImages(this,name)")
    buttonFilter.innerHTML = e.name
    Filter.appendChild(buttonFilter)

})



photos.forEach(e => {
    e.urls.forEach(elm => {
        var photo = document.createElement("div")
        var photoUrl = document.createElement("img")
        photo.setAttribute("class", "photoCantainer")
        photoUrl.setAttribute("src", elm)
        photoUrl.setAttribute("alt", e.name)
        photoUrl.setAttribute("onclick", "getUrl(src)")
        photo.appendChild(photoUrl)
        photosConatiner.appendChild(photo)

    })
})



function getImages(item,name) {
    const lastActive = document.querySelector(".FilterCoise.cheked")
    lastActive?lastActive.classList.remove("cheked"):null
    item.classList.add("cheked")
    photosConatiner.innerHTML = ""
    if ("all".localeCompare(name) == 0) {
        photos.forEach(e => {
            e.urls.forEach(elm => {
                var photo = document.createElement("div")
                var photoUrl = document.createElement("img")
                photo.setAttribute("class", "photoCantainer")
                photoUrl.setAttribute("src", elm)
                photoUrl.setAttribute("alt", "vehicles Rent Gallery")
                photoUrl.setAttribute("onclick", "getUrl(src)")
                photo.appendChild(photoUrl)
                photosConatiner.appendChild(photo)

            })
        })
    } else {

        photos.forEach(e => {
            if (e.name.localeCompare(name) == 0) {
                e.urls.forEach(elm => {
                    console.log(elm);
                    var photo = document.createElement("div")
                    var photoUrl = document.createElement("img")
                    photo.setAttribute("class", "photoCantainer")
                    photoUrl.setAttribute("src", elm)
                    photoUrl.setAttribute("alt", e.name)
                    photoUrl.setAttribute("onclick", "getUrl(src)")
                    photo.appendChild(photoUrl)
                    photosConatiner.appendChild(photo)

                })
            }
        })
    }
}
const urlContainer = document.querySelector(".maskGallery")
var bigImg = document.createElement("img")
var closeImg = document.createElement("span")
var i = document.createElement("i")
closeImg.setAttribute("id" , "closeimg")
bigImg.setAttribute("class", "bigImage")
i.setAttribute("class" , "fas fa-window-close")
closeImg.appendChild(i)

function getUrl(url) {
    bigImg.setAttribute("src", url)
    urlContainer.classList.add("active")
    urlContainer.appendChild(bigImg)
    urlContainer.appendChild(closeImg)
}


const maskImg = document.querySelector(".maskGallery")
maskImg.addEventListener('click' , ()=>{
    maskImg.classList.remove("active")
})


