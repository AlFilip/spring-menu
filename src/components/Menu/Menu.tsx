import {useState} from "react";
import {animated, AnimatedProps, useTransition} from "react-spring";
import styled from "styled-components";

import {MenuBtn} from "../MenuBtn/MenuBtn";
import {ChoseBg} from "../ChoseBg/ChoseBg";

const MenuWrapper = styled.div`{
  position: fixed;
  height: 100vh;
  width: 600px;
  background-color: rgb(0, 42, 46);
}`

type MenuPropsType = {
    setBgColor: (value: string) => void
    currentBg: string
    isBgOn: boolean
    setIsBgOn: (value: boolean) => void
}

export const Menu = ({
                         setBgColor,
                         currentBg,
                         setIsBgOn,
                         isBgOn,
                     }: MenuPropsType) => {
    const [isActive, setIsActive] = useState(false)
    const transitions = useTransition(isActive, {
        from: {left: -600},
        enter: {left: 0},
        leave: {left: -600},
    })

    const toggleActive = () => setIsActive(!isActive)

    const renderMenu = (isActive: boolean, props: AnimatedProps<{ left: number | string }>) => {
        if (!isActive) {
            return null
        }
        return (
            <MenuWrapper as={animated.div} style={props}>
                <ChoseBg
                    setBgColor={setBgColor}
                    currentBg={currentBg}
                    isBgOn={isBgOn}
                    setIsBgOn={setIsBgOn}
                />
            </MenuWrapper>
        )
    }

    const TransitionMenu = transitions((props, isActive) => {
        return renderMenu(isActive, props)
    })

    return (
        <>
            <MenuBtn isActive={isActive} callback={toggleActive}/>
            {TransitionMenu}
        </>
    )
}
