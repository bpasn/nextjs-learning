/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:"www.free-css.com"
            },
            {
                protocol:"https",
                hostname:"i.imgur.com"
            },
            {
                protocol:"https",
                hostname:"dongphucvanda.com"
            },
            {
                protocol:"https",
                hostname:"assets.ajio.com"
            },
            {
                protocol:"https",
                hostname:"api.escuelajs.co"
            },
            {
                protocol:"https",
                hostname:"suckhoedoisong.qltns.mediacdn.vn"
            },
            {
                protocol:"https",
                hostname:"placeimg.com"
            },
            {
                protocol:"https",
                hostname:"media.ultra-shop.com"
            },
        ]
    }
}

module.exports = nextConfig
