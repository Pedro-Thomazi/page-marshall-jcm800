import styles from './Main.module.css'

import photo1 from '../../Images/photo-1.webp'
import photo2 from '../../Images/photo-2.jpg'
import photo3 from '../../Images/photo-3.jpg'

import { useState } from 'react'

const Main = () => {
    const [photo, setPhoto] = useState(photo1)

    const changePhoto = (e) => {
        setPhoto(e.target.src)
        // console.log(photo)
    }
    return (
        <main className={styles.containerMain}>
            <section>
                <div className={styles.principal}>
                    <span className={styles.photos}>
                        <div>
                            <img onClick={changePhoto} src={photo1} alt="Foto 1" />
                            <img onClick={changePhoto} src={photo2} alt="Foto 2"  />
                            <img onClick={changePhoto} src={photo3} alt="Foto 3"  />
                        </div>
                        <img className={styles.principalPhoto} src={photo} alt="Foto 1"  />
                    </span>
                    <hr />
                    <span className={styles.characteristics}>
                        <h2>Características do produto</h2>
                        <ul className={styles.characList}>
                            <li>
                                <i className="bi bi-check-circle-fill"></i>
                                <p>Tipo de amplificador: <span>Cabeça</span></p>
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill"></i>
                                <p>Tipos de alimentação: <span>CaboAC</span></p>
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill"></i>
                                <p>Com reverb: <span>Não</span></p>
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill"></i>
                                <p>Potência de saída (RMS): <span>100 W</span></p>
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill"></i>
                                <p>Tecnologia do amplificador: <span>Valvular</span></p>
                            </li>
                        </ul>
                    </span>
                    <hr />
                    <span className={styles.descriptions}>
                        <h2>Descrição</h2>
                        <p>A arte do JCM800 é sua simplicidade. Usado por artistas de todo o mundo, este amplificador continua a ser um dos nossos maiores. Você pode detectar sem esforço seu rugido característico de 100W. O primeiro de nossos amplificadores a apresentar um volume principal para você controlar seu som. Nós adicionamos um loop FX em série, simples e eficaz.</p>
                            <p>
                                General
                                Model: JCM800 2203
                                Range: Vintage reissue
                                Technology: Valve
                                Channels: 1
                            </p>

                            <p>
                                Electronics
                                Output wattage: 100W
                                Outputs: 2 x 1/4" jack speaker outputs, selectable 16ohms/ 8ohms / 4ohms load
                                Inputs: 2 (1 x high, 1 x low)
                                Controls: Presence, bass, middle, treble, master volume, preamp volume
                                Effects: None
                                Effects loop: Yes, 1 x serial switchable
                            </p>

                            <p> 
                                Valves
                                Preamp valves: 2 x ECC83, 1 x ECC83 (phase splitter)
                                Power amp valves: 4 x EL34
                                Accessories
                                Cable: Detachable power cable included, speaker cable included
                                Footswitch: None
                            </p>
                    </span>
                    <hr />
                    <form className={styles.formQuestion}>
                        <h2>Perguntas e respostas</h2>
                        <p>Qual informação você precisa?</p>
                        <label>
                            <input type="text" placeholder='Escreva sua pergunta...' />
                            <button className={styles.btnQuestion}>Perguntar</button>
                        </label>
                    </form>
                </div>

                <div className={styles.details}>
                    <h2>Cabeçote Head Marshall Jcm800 2203 110v Original C/ Nf</h2>
                    <span className={styles.photosSecondary}>
                        <img className={styles.secondaryPhoto} src={photo1} alt="Foto 1" />
                    </span>
                    <span className={styles.prices}>
                        <p className={styles.price}>R$17.990,00</p>
                        <p>em <span>10x R$1.799</span> sem juros</p>
                    </span>
                    <span className={styles.local}>
                        <p><i className="bi bi-person-fill"></i>Entrega a combinar com o vendedor</p>
                        <p className={styles.city}>São Paulo, São Paulo</p>
                        <p className={styles.color}>Cor: <span>Preto</span></p>
                    </span>
                    <h3>Último disponível!</h3>

                    <span className={styles.containerBtn}>
                        <button className={styles.btnBuy}>Comprar agora</button>
                    </span>

                    <span className={styles.containerSecurry}>
                        <i className="bi bi-shield-fill-check"></i>
                        <p><span>Compra Garantida</span>. Abrirá em uma nova janela, receba o produto que está esperando ou devolvemos o dinheiro.</p>
                    </span>
                    <span className={styles.containerPoints}>
                        <i className="bi bi-trophy-fill"></i>
                        <p><span>Mercado Pontos.</span> Você acumula 4497 pontos.</p>
                    </span>
                </div>
            </section>
        </main>
    )
}

export default Main