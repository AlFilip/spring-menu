import {animated, useSpring} from "react-spring";
import styled from "styled-components";

type MenuBtnPropsType = {
    isActive: boolean
    callback: () => void
}

const Wrapper = styled.div`{
  position: fixed;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgb(0, 42, 46);
  color: #fff;
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:hover {
    background-color: rgb(1, 80, 87);
  }
}`

type IconPropsType = {
    time: number
    isActive?: boolean
}

const Icon = styled.div<IconPropsType>`{
  height: 24px;
  width: 32px;
  position: relative;

  &::before {
    transform: ${props => props.isActive ? 'rotate(-45deg)' : 'none'};
    top: ${props => props.isActive ? ' calc(50% - 1px)' : '0'};
  }

  &::after {
    bottom: ${props => props.isActive ? ' calc(50% - 1px)' : '0'};
    transform: ${props => props.isActive ? 'rotate(45deg)' : 'none'};
  }

  &::before,
  &::after {
    position: absolute;
    display: block;
    height: 10%;
    width: 100%;
    transition: all ${props => props.time ? props.time : '1s'} ease;
    transition: ${({time}) => {
      return `${time + 's'} ease`
    }
    };
    background-color: #fff;
    content: '';
  }
}`

const Span = styled.span<IconPropsType>`{
  position: absolute;
  display: block;
  height: 10%;
  width: 100%;
  background-color: #fff;
  content: '';
  top: 50%;
  transform: scale(-1) translate(0, 50%);
  opacity: ${props => props.isActive ? 0 : 1};
  transition: ${({time, isActive}) => {
    if (isActive) {
      return `${time / 2 + 's'}`
    }
    return `${time + 's'} ease-in`
  }
  };
}`


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


    return (
        <Wrapper as={animated.div}
                 onClick={callback}
                 style={wrapperProps}
        >

            <Icon time={1} isActive={isActive}>
                <Span time={1} isActive={isActive}/>
            </Icon>

        </Wrapper>
    )
}






