import datashopLogo from './datalogo 1.png'
import { BsCheckSquareFill } from 'react-icons/bs'
import { ImCheckboxUnchecked } from 'react-icons/im'
import { AiFillEyeInvisible , AiFillEye} from 'react-icons/ai'
import { useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Admine from '../admin/Admine'

function Login({setapp }) {
    // Input Ref connnect
    const emailRef = useRef()
    const passwordRef = useRef()

    // Save User Info On-Off function
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


    // Password eye On-Off function
    const [aye , setAye] = useState(<AiFillEyeInvisible size='28px'/>)
    const [b , setB] = useState(false)
    const [inType , setInType] = useState('password')
    function AyeOnOff() {
        if (b == true) {
            setAye(<AiFillEyeInvisible size='28px'/>)
            setInType('password')
            setB(false)
        }
        if (b == false) {
            setAye(<AiFillEye size={'28px'}/>)
            setInType('text')
            setB(true)
        }
    }

    // Label Animation
    const [labelClassPASSWORD , setlabelClassPASSWORD] = useState('defalutLabel')
    const [labelClassEMAIL , setlabelClassEMAIL] = useState('defalutLabel')

    // User Info
    // const userInfo = [
    //     {
    //         email: 'demo@gmail.com' ,
    //         password: 'demo1212'
    //     }
    // ]
    const navigate = useNavigate()
    const email = 'demo@gmail.com'
    const password = 'demo1234'


    function OnAdmin() {
        if (email == emailRef.current.value && password == passwordRef.current.value) {
            navigate('/app')
            setapp(<Admine />)   
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
                            <label htmlFor="" className={labelClassEMAIL} >Email</label>
                            <input ref={emailRef} type="email" onClick={() => setlabelClassEMAIL('defalutLabel topLabelEmail')}/>
                        </div>
                        <div className="password">
                            <label htmlFor="" className={labelClassPASSWORD } >Password</label>
                            <input ref={passwordRef} type={inType}  onClick={() => setlabelClassPASSWORD('defalutLabel topLabelPassword')}/>
                            <span className='aye' onClick={AyeOnOff}>{aye}</span>
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
                        <div class="btn btn-three" onClick={OnAdmin}>
                            <span>HOVER ME</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login