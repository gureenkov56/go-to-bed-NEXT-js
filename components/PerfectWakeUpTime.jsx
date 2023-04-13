import { useContext } from 'react'
import { MyContext } from '../pages/index'
import Button from './Button'

function PerfectWakeUpTime() {

    const [counter, setCounter] = useContext(MyContext)

    return (
        <>
            <h1 class="perfect-time__h2">Идеальное время пробуждения {counter}</h1>
            <p class="perfect-time__if d-none" id="perfectTimeIf">если лечь спать в <span id="perfectTimeIfSpan"></span></p>
            <div class="perfect-time__number" id="perfectTime">
                <span id="perfectHours"></span>
                <span id="blinkedColon">:</span>
                <span id="perfectMinutes"></span>
            </div>
            <Button click={() => console.log('click')}>Настроить</Button>

            <h4>Также легко проснуться в...</h4>
            <div class="easy-wake-up__wrapper">
                <span class="timeOfCycleEnding1">1:30</span>
                <span class="timeOfCycleEnding2">1:30</span>
                <span class="timeOfCycleEnding3">1:30</span>
                <span class="timeOfCycleEnding4">1:30</span>
                <span class="timeOfCycleEnding6">1:30</span>
            </div>
        </>
    )
}

export default PerfectWakeUpTime