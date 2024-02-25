function Modal({ children }) {
    return (
        <>
            <div>
                <dialog>
                    {children}
                </dialog>
            </div>
        </>
    );
}

export default Modal;