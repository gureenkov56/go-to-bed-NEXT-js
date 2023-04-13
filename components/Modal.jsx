import React, { useState } from 'react'
import cn from 'classnames';

// TODO: Сделать появление модалки

function Modal() {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <div class="modal ">
            <div class="modal__container">
                <div class="modal__close close-modal-btn">×</div>
                <div class="modal__settings">
                    <h3>Ложусь спать в...</h3>
                    <input type="time" value="23:00" id="inputStartSleeping" />
                    <button class="big close-modal-btn" id="calcWithStartSleeping">Рассчитать от <span
                        id="btnSpanStartSleeping">23:00</span></button>
                    <p>или</p>
                    <button class="big close-modal-btn" id="iGoToBedNow">Я ложусь сейчас</button>

                    <div class="d-none">
                        <h3>Нужно проснуться в...</h3>
                        <input type="time" value="07:00" id="inputNeedWakeUp" />
                        <button class="big close-modal-btn" id="calcWithNeedWakeUp">Рассчитать к <span
                            id="btnSpanNeedWakeUp">07:00</span></button>
                    </div>

                    <p class="time-for-falling">Чтобы уснуть мне нужно
                        <select id="selectTimeForFallingSleep">
                            <option value="0">0</option>
                            <option value="15" selected="selected">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                            <option value="60">60</option>
                        </select>
                        минут
                    </p>
                    <p class="note">В среднем требуется 15 минут</p>
                </div>
            </div>
        </div >
        </>
    )
}

export default Modal