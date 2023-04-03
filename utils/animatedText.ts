export const textAnimation = (speed: number, delay: number) => {

    return ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: speed, delayChildren: delay },
        }
    }
    )
}

export const child = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { type: "spring" }
    }
}