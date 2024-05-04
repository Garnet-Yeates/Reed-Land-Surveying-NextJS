export const fadeUpHidden = {
    opacity: 0,
    y: "100px",

}

export const fadeUpShown = ({delay = 0, duration = 0}) => ({
    opacity: 1,
    y: "0px",
    transition: {
        duration,
        delay,
    }
})

export const fadeDownHidden = {
    opacity: 0,
    y: "-100px",

}

export const fadeDownShown = ({delay = 0, duration = 0}) => ({
    opacity: 1,
    y: "0px",
    transition: {
        duration,
        delay,
    }
})

export const fadeLeftHidden = {
    opacity: 0,
    x: "100px",
}

export const fadeLeftShown = ({delay = 0, duration = 0}) => ({
    opacity: 1,
    x: "0px",
    transition: {
        duration,
        delay,
    }
})

export const fadeRightHidden = {
    opacity: 0,
    x: "-100px",
}

export const fadeRightShown = ({delay = 0, duration = 0}) => ({
    opacity: 1,
    x: "0px",
    transition: {
        duration,
        delay,
    }
})

export const fadeInHidden = {
    opacity: 0,
}

export const fadeInShown = ({delay = 0, duration = 0}) => ({
    opacity: 1,
    transition: {
        duration,
        delay,
    }
})

