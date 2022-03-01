import {useState} from "react";
import styled from "styled-components";

import bgImage from './assets/images/bg.jpg';
import {Menu} from "./components/Menu/Menu";
import {restoreState, saveState} from "./helpers/llocalStorage";

type ImageAppWrapperPropsType = {
    bgImage: string
}

const ImageAppWrapper = styled.div<ImageAppWrapperPropsType>`{
  text-align: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
}`

const BgAppWrapper = styled.div<{ bgColor: string | null }>`{
  height: 100%;
  width: 100%;
  background: ${props => {
    return props.bgColor
            ? `linear-gradient(rgba(255, 255, 255, 0), ${props.bgColor})`
            : 'none'
  }
  }`


export const appBgColors = [
    '#c26767',
    '#c7c16d',
    '#8cc480',
    '#65cba7',
    '#7384c2',
    '#cc77bb',
    '#e3e3e3',
    '#a2a2a2',
    '#676767',
]
const getBg = () => restoreState('bgColor', appBgColors[0])
const getIsBgOn = () => restoreState('isBgOn', false)

function App() {
    const [isBgOn, setBgOn] = useState(getIsBgOn)
    const [bgColor, setBgColor] = useState(getBg)

    const setBgColorCb = (value: string) => {
        setBgColor(value)
        saveState('bgColor', value)
    }

    const setIsBgOnCb = (value: boolean) => {
        setBgOn(value)
        saveState('isBgOn', value)
    }

    return (
        <ImageAppWrapper bgImage={bgImage}>
            <BgAppWrapper bgColor={isBgOn ? bgColor : null}>
                <Menu
                    setBgColor={setBgColorCb}
                    currentBg={bgColor}
                    isBgOn={isBgOn}
                    setIsBgOn={setIsBgOnCb}
                />
            </BgAppWrapper>
        </ImageAppWrapper>
    );
}

export default App;
