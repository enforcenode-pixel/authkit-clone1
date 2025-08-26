import Link from "next/link";

export default function Home() {
  return (
    <main style={{display:'grid',placeItems:'center',minHeight:'100vh',background:'#07080c',color:'#e8ecf1'}}>
      <div style={{textAlign:'center'}}>
        <h1 style={{marginBottom:12}}>AuthKit UI</h1>
        <Link href="/auth/sign-in" style={{padding:'10px 14px',border:'1px solid #333',borderRadius:12,background:'rgba(255,255,255,.04)'}}>
          Go to Sign in
        </Link>
      </div>
    </main>
  );
}
