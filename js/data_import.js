import products from "./data.js";
const goodsOuter = document.querySelector(".goods_area .goods_outer");
products.forEach((product) => {
    let element = document.createElement('div')
    element.setAttribute('class', 'goods')

    element.innerHTML = `
            <div class="goods">
                <div class="goods_img">
                <img src="${product.image}">
                <img src="${product.hoverImage}">
                    <div class="goods_cart">
                        <i class="ri-shopping-cart-2-line"></i>
                    </div>
                </div>

                <div class="goods_info info_best">
                    <p>BEST</p>
                </div>
                <div class="goods_name">
                    <span>${product.name}</span>
                </div>
                <div class="goods_season">
                    <p>${product.engName}</p>
                </div>
                <div class="goods_price">
                    <span>₩${product.price}</span>
                </div>
        </div><!-- //goods -->
    `
    goodsOuter.appendChild(element);
});//TOP 상품목록
