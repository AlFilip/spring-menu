import styled from "styled-components";
import {animated, useSpring} from "react-spring";
import {MouseEventHandler} from "react";

type BgItemPropsType = {
    bgColor?: string
}
export const BgItem = styled.div<BgItemPropsType>`{
  opacity: 1;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: ${props => props.bgColor ? props.bgColor : 'none'};
}`

type AnimatedBgItemPropsType = {
    bgColor: string
    callback: MouseEventHandler<HTMLDivElement>
}

export const BgItemWrapper = styled.div`{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
}`

export const AnimatedBgItem = ({
                                   bgColor,
                                   callback,
                               }: AnimatedBgItemPropsType) => {
    const props = useSpring({
        from: {
            opacity: 0,
            height: 0,
            width: 0,
        },
        to: {
            opacity: 1,
            height: 20,
            width: 20,
        },
    })

    return (
        <BgItemWrapper>
            <BgItem
                as={animated.div}
                style={{...props, backgroundColor: bgColor}}
                onClick={callback}
            />
        </BgItemWrapper>
    )
}