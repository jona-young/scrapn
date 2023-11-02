import PasswordResetForm from './PasswordResetForm';
import '../index.css';

const PasswordReset = () => {
    return (
        <div>
            <section className="general-banner header-spacer">
                <div className="general-heading">
                    <h1 className="form-heading general-bannertext">Password Reset</h1>
                    <p className="form-subheading general-lightsub">Home &gt; Password Reset</p>
                </div>
            </section>
            <section className="form-card">
                    <div className="form-container">
                        <h2 className="form-heading">Password Reset</h2>
                        <p className="form-subheading form-lightsub">Enter your new password!</p>
                        <PasswordResetForm />
                    </div>
            </section>
        </div>
    )
}

export default PasswordReset;