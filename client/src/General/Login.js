import LoginForm from './LoginForm';
import './site.css';
import './template.css';

const Login = () => {
    return (
        <div>
            <section className="general-banner header-spacer">
                <div className="general-heading">
                    <h1 className="form-heading general-bannertext">Login</h1>
                    <p className="form-subheading general-lightsub">Home &gt; Login</p>
                </div>
            </section>
            <section className="form-card">
                    <div className="form-container">
                        <h2 className="form-heading">Login</h2>
                        <p className="form-subheading form-lightsub">Enter your account details to login.</p>
                        <LoginForm />
                    </div>
            </section>
        </div>
    )
}

export default Login;