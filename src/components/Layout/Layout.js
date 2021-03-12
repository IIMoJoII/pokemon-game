import s from './Layout.module.css'

const Layout = ({title, colorBg, urlBg, children}) => {
    const style = {
        background: urlBg ? `url(${urlBg})` : colorBg,
        backgroundSize: "100vw 100vh"
    }

    return (
        <>
            <section className={s.root} style={style}>
                <div className={s.wrapper}>
                    <article>
                        <div className={s.title}>
                            <h3>{title}</h3>
                            <span className={s.separator}/>
                        </div>
                        <div className={s.desc & s.full}>
                            {children}
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Layout;
