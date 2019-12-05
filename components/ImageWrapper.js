const ICONS = {
    phone: require('../public/images/png/phone.png'),
    mapMarker: require('../public/images/png/map-marker.png'),
    logo: require('../public/images/png/logo.png'),
    logoLight: require('../public/images/png/logo-light.png'),
    search: require('../public/images/png/search.png'),

    helmet: require('../public/images/png/helmet.png'),
    lightBulb: require('../public/images/png/light-bulb.png'),
    cogwheel: require('../public/images/png/cogwheel.png'),
    pollution: require('../public/images/png/pollution.png'),
    windEngine: require('../public/images/png/wind-engine.png'),
    pumpjack: require('../public/images/png/pumpjack.png'),


    hero1: require('../public/images/HeroSlider/1.jpg'),
    hero2: require('../public/images/HeroSlider/2.jpg'),

    featured1: require('../public/images/features/1.jpg'),
    featured2: require('../public/images/features/2.jpg'),
    featured3: require('../public/images/features/3.jpg'),
    featuredBg: require('../public/images/features/features-bg.jpg'),

    facebook: require('../public/images/svg/facebook.svg'),
    instagram: require('../public/images/svg/instagram.svg'),
    linkedin: require('../public/images/svg/linkedin.svg'),
    telegram: require('../public/images/svg/telegram.svg'),


    client1: require('../public/images/clients/1.png'),
    client2: require('../public/images/clients/2.png'),
    client3: require('../public/images/clients/3.png'),
    client4: require('../public/images/clients/4.png'),
    client5: require('../public/images/clients/5.png'),

    testemonialBg: require('../public/images/Testimonial/testimonial-bg.jpg'),
    testemonialThumb: require('../public/images/Testimonial/testimonial-thumb.jpg'),

    video: require('../public/images/Video/video-box.jpg')


}



function ImageWrapper({ iconName, style, className }) {
    return (
        <img src={ICONS[iconName]} alt={iconName} style={{ ...style }} className={className} />
    )
}

export default ImageWrapper