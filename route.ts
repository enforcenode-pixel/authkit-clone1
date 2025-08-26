import { NextResponse } from 'next/server';
import { WorkOS } from '@workos-inc/node';
import { cookies } from 'next/headers';

const workos = new WorkOS(process.env.WORKOS_API_KEY!);

export async function GET(req: Request) {
  const code = new URL(req.url).searchParams.get('code');
  if (!code) return NextResponse.redirect(new URL('/auth/sign-in?e=no_code', req.url));

  const { user, organization } = await workos.userManagement.authenticateWithCode({
    code,
    clientId: process.env.NEXT_PUBLIC_WORKOS_CLIENT_ID!,
  });

  cookies().set('session', JSON.stringify({ uid: user.id, orgId: organization?.id ?? null }), {
    httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 7,
  });
  return NextResponse.redirect(new URL('/auth/signed-in', req.url));
}