import styled from "styled-components";
import {BgStore} from "./BgStore/BgStore";

const Wrapper = styled.div`{
  position: absolute;
  left: 300px;
  top: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}`

const BgStoreWrapper = styled.div`{
  margin-top: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}`

const Button = styled.button`{
  padding: 6px;
  background-color: #348a6d;
  color: #ddd;
  border-radius: 4px;
  margin-right: 10px;
  transition: 0.3s;

  &:hover {
    background-color: #347a6d;
  }
}`

type ChooseBgPropsType = {
    setBgColor: (value: string) => void
    currentBg: string
    isBgOn: boolean
    setIsBgOn: (value: boolean) => void
}

export const ChoseBg = ({
                            setBgColor,
                            currentBg,
                            setIsBgOn,
                            isBgOn,
                        }: ChooseBgPropsType) => {

    const toggleIsBgOn = () => {
        setIsBgOn(!isBgOn)
    }

    const renderBgStore = (isBgOn: boolean) => {
        if (!isBgOn) {
            return null
        }
        return <BgStore
            setBgColor={setBgColor}
            currentBg={currentBg}
        />
    }

    const buttonValue = `Цветовой фон ${isBgOn ? 'включен' : 'выключен'}`

    return (
        <Wrapper>

            <Button onClick={toggleIsBgOn}>
                {buttonValue}
            </Button>

            <BgStoreWrapper>
                {renderBgStore(isBgOn)}
            </BgStoreWrapper>

        </Wrapper>
    )
}

