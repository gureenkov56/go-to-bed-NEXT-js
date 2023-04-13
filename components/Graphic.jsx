import React from 'react'

function Graphic() {

    return (
        <>
            <h2>Цикл сна</h2>
            <div class="wrapper__current-cycle">
                <span class="current-cycle" id="currentCycle">Глубокий восстановительный сон</span>
            </div>

            <div class="cycle-graphic__container">
                <div class="cycle-graphic__wrapper">
                    <div class="dot dot-1"></div>
                    <div class="dot dot-2 active-dot"></div>
                    <div class="dot dot-3 active-dot"></div>
                    <div class="dot dot-4 active-dot"></div>
                    <div class="dot dot-5 active-dot"></div>
                    <div class="dot dot-6 active-dot"></div>

                    <div class="cycle-graphic__wrapper__deep-zone" id="deepZone"></div>
                    <div class="cycle-graphic__wrapper__short-wake-ups" id="shortWakeUpZone"></div>
                    <div class="cycle-graphic__wrapper__dream-show-zone" id="dreamShowZone"></div>


                    <div class="cycle-graphic__fall-block" id="fallBlock" data-color="rgba(138, 235, 219, .4)"></div>

                    <div class="cycle-graphic__svg">
                        <svg>
                            <line x1="0" y1="0" x2="0" y2="150" stroke-width="3" stroke="white" />
                            <line x1="0" y1="150" x2="20" y2="150" stroke-width="2" stroke="white" />
                            <line x1="20" y1="150" x2="20" y2="250" stroke-width="2" stroke="white" />
                            <line x1="20" y1="250" x2="50" y2="250" stroke-width="2" stroke="white" />
                            <line x1="50" y1="250" x2="50" y2="290" stroke-width="2" stroke="white" />
                            <line x1="50" y1="290" x2="160" y2="290" stroke-width="2" stroke="white" />
                            <line x1="160" y1="290" x2="160" y2="100" stroke-width="2" stroke="white" />
                            <line x1="160" y1="100" x2="180" y2="100" stroke-width="2" stroke="white" />

                            <line x1="180" y1="0" x2="180" y2="150" stroke-width="2" stroke="white" />
                            <line x1="180" y1="150" x2="200" y2="150" stroke-width="2" stroke="white" />
                            <line x1="200" y1="150" x2="200" y2="250" stroke-width="2" stroke="white" />
                            <line x1="200" y1="250" x2="250" y2="250" stroke-width="2" stroke="white" />
                            <line x1="250" y1="250" x2="250" y2="290" stroke-width="2" stroke="white" />
                            <line x1="250" y1="290" x2="330" y2="290" stroke-width="2" stroke="white" />
                            <line x1="330" y1="290" x2="330" y2="250" stroke-width="2" stroke="white" />
                            <line x1="330" y1="290" x2="330" y2="250" stroke-width="2" stroke="white" />
                            <line x1="330" y1="250" x2="340" y2="250" stroke-width="2" stroke="white" />
                            <line x1="340" y1="250" x2="340" y2="100" stroke-width="2" stroke="white" />
                            <line x1="340" y1="100" x2="360" y2="100" stroke-width="2" stroke="white" />
                            <text x="200" y="100" fill="#fff">scroll me</text>
                            {/* <text x="200" y="120" fill="#fff">>>></text> */}

                            <line x1="360" y1="0" x2="360" y2="150" stroke-width="2" stroke="white" />
                            <line x1="360" y1="150" x2="380" y2="150" stroke-width="2" stroke="white" />
                            <line x1="380" y1="150" x2="380" y2="250" stroke-width="2" stroke="white" />
                            <line x1="380" y1="250" x2="430" y2="250" stroke-width="2" stroke="white" />
                            <line x1="430" y1="250" x2="430" y2="290" stroke-width="2" stroke="white" />
                            <line x1="430" y1="290" x2="460" y2="290" stroke-width="2" stroke="white" />
                            <line x1="460" y1="290" x2="460" y2="250" stroke-width="2" stroke="white" />
                            <line x1="460" y1="250" x2="500" y2="250" stroke-width="2" stroke="white" />
                            <line x1="500" y1="250" x2="500" y2="100" stroke-width="2" stroke="white" />

                            <line x1="500" y1="100" x2="580" y2="100" stroke-width="2" stroke="white" />
                            <line x1="580" y1="100" x2="580" y2="250" stroke-width="2" stroke="white" />
                            <line x1="580" y1="250" x2="630" y2="250" stroke-width="2" stroke="white" />
                            <line x1="630" y1="250" x2="630" y2="150" stroke-width="2" stroke="white" />
                            <line x1="630" y1="150" x2="660" y2="150" stroke-width="2" stroke="white" />
                            <line x1="660" y1="150" x2="660" y2="100" stroke-width="2" stroke="white" />

                            <line x1="660" y1="100" x2="760" y2="100" stroke-width="2" stroke="white" />
                            <line x1="760" y1="100" x2="760" y2="250" stroke-width="2" stroke="white" />
                            <line x1="760" y1="250" x2="820" y2="250" stroke-width="2" stroke="white" />
                            <line x1="820" y1="250" x2="820" y2="100" stroke-width="2" stroke="white" />

                            <line x1="820" y1="100" x2="880" y2="100" stroke-width="2" stroke="white" />
                            <line x1="880" y1="100" x2="880" y2="10" stroke-width="2" stroke="white" />
                            <line x1="880" y1="10" x2="900" y2="10" stroke-width="2" stroke="white" />

                            <text x="950" y="150" fill="#fff">Утро доброе ;)</text>
                            <text x="950" y="180" fill="#fff">Улыбнись! Тебя ждет</text>
                            <text x="950" y="205" fill="#fff">невероятный день!</text>
                        </svg>

                    </div>

                    {/* <!--<div class="cycle-graphic__sixth">
                            <div class="good-morning-text">
                                <h3>Утро доброе!</h3>
                                <p></p>
                            </div>
                        </div>--> */}



                </div>

                <div class="time-list">
                    <div class="time" id="startSleepOnGraphic">23:00</div>
                    <div class="time timeOfCycleEnding1">2:00</div>
                    <div class="time timeOfCycleEnding2">3:30</div>
                    <div class="time timeOfCycleEnding3">2:00</div>
                    <div class="time timeOfCycleEnding4">3:30</div>
                    <div class="time timeOfCycleEnding5">2:00</div>
                </div>
            </div>

            <button class="big open-setting-modal">Настроить</button>
        </>
    )
}

export default Graphic