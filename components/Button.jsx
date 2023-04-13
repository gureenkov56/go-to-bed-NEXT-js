function Button({ children, click}) {

    return (
        <>
            <button
                onClick={click}
                class="big perfect-time__button open-setting-modal"
            >
                {children}
                </button>
        </>
    )
}

export default Button