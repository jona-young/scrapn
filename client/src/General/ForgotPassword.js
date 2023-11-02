import ForgotPasswordForm from './ForgotPasswordForm';
import '../index.css';

const ForgotPassword = () => {
    return (
        <div>
            <section className="general-banner header-spacer">
                <div className="general-heading">
                    <h1 className="form-heading general-bannertext">Forgot Password</h1>
                    <p className="form-subheading general-lightsub">Home &gt; Forgot Password</p>
                </div>
            </section>
            <section className="form-card">
                    <div className="form-container">
                        <h2 className="form-heading">Forgot Password</h2>
                        <p className="form-subheading form-lightsub">Enter the email associated with your account for a link to reset your password.</p>
                        <ForgotPasswordForm />
                    </div>
            </section>
        </div>
    )
}

export default ForgotPassword;