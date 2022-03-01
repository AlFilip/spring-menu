import {MouseEventHandler, useState} from "react";
import {animated, useTrail} from "react-spring";
import {AnimatedBgItem, BgItem, BgItemWrapper} from "./BgItem";
import {appBgColors} from "../../../App";

type BgStorePropsType = {
    setBgColor: (value: string) => void
    currentBg: string
}
export const BgStore = ({
                            setBgColor,
                            currentBg,
                        }: BgStorePropsType) => {
    const [isOpen, setOpen] = useState(false)

    const trail = useTrail(appBgColors.length, {
        opacity: isOpen ? 1 : 0,
        height: isOpen ? 20 : 5,
        width: isOpen ? 20 : 5,
        borderRadius: '50%',
        config: {
            clamp: true,
            tension: 170,
            friction: 12,
        }
    })

    const storeClickHandle: MouseEventHandler<HTMLDivElement> = e => {
        if (!isOpen) {
            setOpen(true)
            return
        }
        const color = e.currentTarget.style.backgroundColor
        if (color) {
            setBgColor(color)
            setOpen(false)
        }
    }

    const OpenedStore = trail.map((props, index) => (
            <BgItemWrapper key={index}>
                <BgItem as={animated.div}
                        style={{...props, backgroundColor: appBgColors[index]}}
                        onClick={storeClickHandle}
                />
            </BgItemWrapper>
        ))


    const renderBgStore = () => {
        if (!isOpen) {
            return <AnimatedBgItem
                bgColor={currentBg}
                callback={storeClickHandle}
            />
        }
        return OpenedStore
    }

    return (
        <>
            {renderBgStore()}
        </>
    )
}