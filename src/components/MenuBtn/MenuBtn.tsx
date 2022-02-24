import s from './MenuBtn.module.css'
import {animated, useSpring} from "react-spring";

type MenuBtnPropsType = {
    isActive: boolean
    callback: () => void
}

export const MenuBtn = ({
                            isActive,
                            callback
                        }: MenuBtnPropsType) => {

    const wrapperProps = useSpring({
        transform: `rotateY(${isActive ? 180 : 0}deg)`,
        config: {
            tension: 180,
            clamp: true,
        },
        left: 32,
        top: 32
    })

    const buttonWrapperClassname = `${s.buttonWrapper}`
    const buttonIconClassname = `${s.buttonIcon} ${isActive ? s.active : ''}`

    return (
        <animated.div className={buttonWrapperClassname}
                      onClick={callback}
                      style={wrapperProps}
        >

            <div className={buttonIconClassname}>
                <span/>
            </div>

        </animated.div>
    )
}