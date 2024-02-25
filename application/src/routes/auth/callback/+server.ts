import { prisma } from '$lib/server/prisma.js'
import { redirect } from '@sveltejs/kit'
import { error } from '@sveltejs/kit'
type GoogleMetaData = {
    avatar_url: string
    email: string,
    full_name: string
}

type LinkedInMetaData = {
    given_name: string,
    family_name: string,
    picture: string,
    email: string
}
export const GET = async ({ url, locals: { supabase, getSession } }) => {
    const code = url.searchParams.get('code')
    if (!code) {
        return error(400, 'callback URL was called without a code');

    }

    const response = await supabase.auth.exchangeCodeForSession(code)

    if (response.error) {
        console.log(response.error)
        return error(500, "What happen")
    }


    const user = response.data.user;

    const provider = user.app_metadata.provider;

    if(provider === 'google') {
        const data  = user.user_metadata as GoogleMetaData;

        await prisma.user.upsert({
            where: {
                id: user.id
            },
            update: {
                username: data.email,
                name: data.full_name,
                email: data.email,
                avatar: data.avatar_url
            },
            create: {
                id: user.id,
                username: data.email,
                name: data.full_name,
                email: data.email,
                avatar: data.avatar_url,
                password: ''
            }
        })
    }
    if(provider === 'linkedin_oidc') {
        const data  = user.user_metadata as LinkedInMetaData

        await prisma.user.upsert({
            where: {
                id: user.id
            },
            update: {
                username: data.email,
                name: `${data.given_name} ${data.family_name}`,
                email: data.email,
                avatar: data.picture
            },
            create: {
                id: user.id,
                username: data.email,
                name: `${data.given_name} ${data.family_name}`,
                email: data.email,
                avatar: data.picture,
                password: ''
            }
        })
    }
    return redirect(303, '/')
}


