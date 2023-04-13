import React from 'react'

function Posts() {

    return (
        <>
            <h3 class="make-better__h2">Сделай свой сон лучше</h3>
            <div class="make-better__wrapper">

                <div class="post open-post-modal" data-post-id="fiveRules">
                    <div class="post__image">
                        <div class="post__bgc-element">5</div>
                        <h4>5 правил здорового сна</h4>
                    </div>
                </div>

                <div class="post open-post-modal" data-post-id="offlineStart">
                    <div class="post__image">
                        <div class="post__bgc-element">
                            <img src="./images/svg/cloud-download-svgrepo-com.svg" alt="cloud" height="190px" width="190px" />
                        </div>
                        <h4>Рассчитай свой сон оффлайн</h4>
                    </div>
                </div>

                <div class="post open-post-modal" data-post-id="whyImportant">
                    <div class="post__image">
                        <div class="post__bgc-element">?</div>
                        <h4>Как пользоваться приложением</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts