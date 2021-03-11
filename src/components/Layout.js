import s from './Layout.module.css'

const Layout = ({title, descr, colorBg, urlBg}) => {
    const LayoutImgBgStyle = {backgroundImage: `url(${urlBg})`}
    const LayoutColorBgStyle = {background: `${colorBg}`}

    return (
        <>
            {!colorBg ? <section className={s.root} style={LayoutImgBgStyle}>
                <div className={s.wrapper}>
                    <article>
                        <div className={s.title}>
                            <h3>{title}</h3>
                            <span className={s.separator}/>
                        </div>
                        <div className={s.desc & s.full}>
                            <p>{descr}</p>
                        </div>
                    </article>
                </div>
            </section> : <section className={s.root} style={LayoutColorBgStyle}>
                    <div className={s.wrapper}>
                        <article>
                            <div className={s.title}>
                                <h3>{title}</h3>
                                <span className={s.separator}/>
                            </div>
                            <div className={s.desc & s.full}>
                                <p>{descr}</p>
                            </div>
                        </article>
                    </div>
                </section>
            }
        </>
    )
}

export default Layout;
