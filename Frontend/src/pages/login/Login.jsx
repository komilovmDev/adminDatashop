import datashopLogo from './datalogo 1.png'
import { BsCheckSquareFill } from 'react-icons/bs'
import { ImCheckboxUnchecked } from 'react-icons/im'
import { AiFillEyeInvisible} from 'react-icons/ai'
import { useState } from 'react'

function Login() {

    const [check, setCheck] = useState(<ImCheckboxUnchecked color='#919EAB' size={'24px'} />)
    const [a, setA] = useState(true)
    function CheskOnOff() {
        if (a == true) {
            setCheck(<BsCheckSquareFill color='#00AB55' size={'24px'} />)
            setA(false)
        }
        if (a == false) {
            setCheck(<ImCheckboxUnchecked color='#919EAB' size={'24px'} />)
            setA(true)
        }
    }

    return (
        <>
            <div className="login">
                <div className="loginCon">
                    <div className="loginHader">
                        <h1>DataShop Admin</h1>
                        <img src={datashopLogo} alt="" />
                    </div>
                    <div className="LoginInputs">
                        <div className="email">
                            <label htmlFor="" className='emailTitle'>Email</label>
                            <input type="email" />
                        </div>
                        <div className="password">
                            <label htmlFor="Password">Password</label>
                            <input type="password" />
                            <span className='aye'><AiFillEyeInvisible size='28px'/></span>
                        </div>
                    </div>
                    <div className="loginFooter">
                        <div className="restPassword">
                            <div className="saveLogin">
                                <div className="saveCheck">
                                    <span onClick={CheskOnOff}>{check}</span>
                                    <h3>Eslab qolish</h3>
                                </div>
                                <a href="">Parolni unutdingizmi?</a>
                            </div>
                        </div>
                        <div class="btn btn-three">
                            <span>HOVER ME</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login