import {useCallback, useState} from "react";
import {animated, useTransition} from "react-spring";

import s from './Menu.module.css'
import {MenuBtn} from "../MenuBtn/MenuBtn";

export const Menu = () => {
    const [isActive, setIsActive] = useState(false)
    const transitions = useTransition(isActive, {
        from: {left: -600},
        enter: {left: 0},
        leave: {left: -600},
    })

    const toggleActive = useCallback(() => setIsActive(!isActive), [isActive])

    return (
        <>
            <MenuBtn isActive={isActive} callback={toggleActive}/>

            {transitions((props, isActive) => {
                return isActive
                    && <animated.div style={props} className={s.menuBody}/>
            })}
        </>
    )
}