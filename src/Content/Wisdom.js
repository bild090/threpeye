import WisdomPic from '../img/Wisdom.jpg'

const Wisdom = () => {
    return(
        <div className="About-us-container">
            <div className="about-us-text">
                <p> حكمتنا </p>
            </div>
            <ul>
                <img src={WisdomPic} />
               <li>اعتمادنا ليس على الأدوات فقط، بل على الطاقة البشرية والتي تضم الكوادر الشابة الوطنية بالكامل ولذا، فإن فريق عملنا متواكب باستمرار وبانتظام مع أحدث التقنيات في سوق تقنية المعلومات، ويخضع دوما للتدريب المكثف من أجل توفير أفضل جودة ممكنة لعملائنا</li>
            </ul>
        </div>
    )
}

export default Wisdom;