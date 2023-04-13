import React from 'react'

function Footer() {

    return (
        <>
            <div class="say-thanks">
                <div class="say-thanks__bg"></div>
                <div class="say-thanks__content">
                    <h4>Находите проект полезным для себя?</h4>
                    <button class="big open-post-modal" data-post-id="sayThanksPost">Сказать спасибо</button>
                </div>
            </div>

            <footer class="footer">
                <div class="footer__text">

                    <span>go-to-bed.ru</span><br />
                    <span>Автор проекта <a href="https://gureenkov56.ru/">gureenkov56</a></span>
                </div>
            </footer>
        </>
    )
}

export default Footer