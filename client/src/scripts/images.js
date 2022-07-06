import draft1 from '../assets/draft/login-1.PNG'
import draft3 from '../assets/draft/user-dashboard-2.PNG'
import draft4 from '../assets/draft/advanced-options-1.PNG'
import draft5 from '../assets/draft/advanced-options-2.PNG'
import draft6 from '../assets/draft/recommendations-1.PNG'
import draft7 from '../assets/draft/recommendations-2.PNG'

import pizza1 from '../assets/pizza/shop_1.PNG'
import pizza2 from '../assets/pizza/pizza_modal_1.PNG'
import pizza3 from '../assets/pizza/pizza_modal_2.PNG'
import pizza4 from '../assets/pizza/pizza_modal_3.PNG'
import pizza5 from '../assets/pizza/shopping_cart_1.PNG'
import pizza6 from '../assets/pizza/checkout_1.PNG'
import pizza7 from '../assets/pizza/payment_1.PNG'

// import myth1 from '../assets/myth/myth_1.PNG'

import portfolio1 from '../assets/portfolio/portfolio_1.PNG'
import portfolio2 from '../assets/portfolio/content_management_1.PNG'

import chat1 from '../assets/chata/register_1.PNG'
import chat2 from '../assets/chata/login_1.PNG'
import chat3 from '../assets/chata/main_1.PNG'
// import chat4 from '../assets/chata/convo_1.PNG'
import chat5 from '../assets/chata/convo_2.PNG'
import chat6 from '../assets/chata/convo_3.PNG'
import chat7 from '../assets/chata/logout.PNG'

import estimatica1 from '../assets/estimatica/before_01.PNG'
import estimatica2 from '../assets/estimatica/after_02.PNG'


const draftImages = [draft1, draft3, draft4, draft5, draft6, draft7]
const pizzaImages = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7]
const portfolioImages = [portfolio1, portfolio2]
const chatImages = [chat1, chat2, chat3, chat5, chat6, chat7]
const vapyrImages = []
const estimaticaImages = [estimatica2, estimatica1]
const epochImages = []
const borderImages = []

const getImages = () => {
    const object = {
        0: draftImages,
        1: pizzaImages,
        2: portfolioImages,
        3: chatImages,
        4: vapyrImages,
        5: estimaticaImages,
        6: epochImages,
        7: borderImages,
    }
    return object
}
// const getImages = () => {
//     let object = {
//         draft: draftImages,
//         pizza: pizzaImages,
//         portfolio: portfolioImages,
//         myth: mythImages
//     }
//     return object
// }

export default getImages