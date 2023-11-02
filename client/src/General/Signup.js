import SignupForm from './SignupForm';
import './site.css';
import './template.css';

const Signup = () => {
    return (
        <>
            <section className="general-banner header-spacer">
                <div className="general-heading">
                    <h1 className="form-heading general-bannertext">Signup</h1>
                    <p className="form-subheading general-lightsub">Home &gt; Signup</p>
                </div>
            </section>
            <section className="form-card">
                    <div className="form-container">
                        <h2 className="form-heading">Sign up now!</h2>
                        <p className="form-subheading form-lightsub">Registration takes less than a minute</p>
                        <SignupForm />
                    </div>
            </section>
        </>
    )
}

export default Signup;