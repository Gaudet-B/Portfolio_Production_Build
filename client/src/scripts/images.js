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

import myth1 from '../assets/myth/myth_1.PNG'

import portfolio1 from '../assets/portfolio/portfolio_1.PNG'
import portfolio2 from '../assets/portfolio/content_management_1.PNG'


const draftImages = [draft1, draft3, draft4, draft5, draft6, draft7]
const pizzaImages = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7]
const portfolioImages = [portfolio1, portfolio2]
const mythImages = [myth1]

const getImages = () => {
    let object = {
        draft: draftImages,
        pizza: pizzaImages,
        portfolio: portfolioImages,
        myth: mythImages
    }
    return object
}

export default getImages