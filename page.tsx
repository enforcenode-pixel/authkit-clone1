import Link from 'next/link';
import './styles.css';

const base = 'https://api.workos.com/user_management/authorize';
const build = (provider?: string) =>
  `${base}?client_id=${process.env.NEXT_PUBLIC_WORKOS_CLIENT_ID}` +
  `&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback` +
  `&response_type=code${provider ? `&provider=${encodeURIComponent(provider)}` : ''}`;

export default function SignIn() {
  return (
    <main className="auth-wrap">
      <header className="auth-top">
        <div className="logo-mini">WorkOS</div>
        <Link href="#" className="docs-btn">View docs</Link>
      </header>

      <section className="hero-title">
        <div className="badge">Introducing</div>
        <h1 className="authkit">AuthKit</h1>
        <p className="tagline">The world’s best login box, powered by WorkOS + Radix.</p>
      </section>

      <section className="panels">
        <article className="panel panel-left blur" aria-hidden />
        <article className="panel panel-center">
          <h2 className="panel-head">Sign in to SuperApp</h2>
          <form className="form" action={build()} method="GET">
            <label className="label">Email address</label>
            <input className="input" name="email" type="email" placeholder="Your email address" />
            <button className="btn primary" type="submit">Continue</button>
          </form>

          <div className="or"><span>OR</span></div>

          <div className="providers">
            <a className="btn provider" href={build('MicrosoftOAuth')}>🟦 Continue with Microsoft</a>
            <a className="btn provider" href={build('GoogleOAuth')}>🟩 Continue with Google</a>
          </div>

          <p className="meta">Don’t have an account? <a className="link" href="#">Sign up</a></p>
        </article>
        <article className="panel panel-right blur" aria-hidden />
      </section>

      <footer className="footer">
        <button className="toggle" onClick={() => document.documentElement.classList.toggle('light')}>
          <span>◐</span> Customize to match your app
        </button>
        <div className="features">
          <div className="feat">🔐 Single Sign-On</div>
          <div className="feat">🔑 Password</div>
          <div className="feat">🛡️ Multi-Factor</div>
          <div className="feat">🧑‍🤝‍🧑 Social Login</div>
          <div className="feat">🖐️ Biometric</div>
          <div className="feat">✉️ Magic Link</div>
        </div>
      </footer>
    </main>
  );
}