import Head from 'next/head'

function MetaHead({title}) {

    return (
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#94B6ED" />

            {/* Safari */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#94B6ED" />
            <meta name="apple-mobile-web-app-title" content="GoToBed" />
            <link rel="apple-touch-icon" href="./images/icons/ios/120.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="./images/icons/ios/152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="./images/icons/ios/180.png" />
            <link rel="apple-touch-icon" sizes="167x167" href="./images/icons/ios/167.png" />

            <link href="./images/splashscreens/iphone5_splash.png"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="./images/splashscreens/iphone6_splash.png"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="./images/splashscreens/iphoneplus_splash.png"
                media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
                rel="apple-touch-startup-image" />
            <link href="./images/splashscreens/iphonex_splash.png"
                media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
                rel="apple-touch-startup-image" />
            <link href="./images/splashscreens/iphonexr_splash.png"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="./images/splashscreens/iphonexsmax_splash.png"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
                rel="apple-touch-startup-image" />
            <link href="./images/splashscreens/ipad_splash.png"
                media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="./images/splashscreens/ipadpro1_splash.png"
                media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="./images/splashscreens/ipadpro3_splash.png"
                media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="./images/splashscreens/ipadpro2_splash.png"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />


            <link rel="manifest" href="manifest.json" />
            <link rel="icon" href="favicon.ico" />
            <title>{title}</title>

            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
    )
}

export default MetaHead