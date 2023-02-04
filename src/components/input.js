import React from "react"




const InputText=(props)=>{

    return(
        <div>
            <form>
                <div>
                    <label for="email" className="label">Enter your Email</label>
                    <input className="input" type="email" id="email"></input>
                </div>
                <div>
                    <label for="password" className="label">Enter your Password</label>
                    <input className="input" type="password" id="password"></input>
                </div>
                <div>
                    <p className="forget-password">Forget Password</p>
                </div>
                <div className="remember">
                <input type="checkbox" name="" id=""></input>
                   <label for="remember" className="remember_label">Remember password</label>
                   <button type="" className="login-btn">Login</button>
                </div>
            </form>
        </div>
        
    )
}

export default InputText