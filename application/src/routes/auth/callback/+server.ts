import { prisma } from '$lib/server/prisma.js'
import { redirect } from '@sveltejs/kit'

type GoogleMetaData = {
    avatar_url: string
    email: string,
    full_name: string
}
export const GET = async ({ url, locals: { supabase, getSession } }) => {
  const code = url.searchParams.get('code')

  if (code) {
    const {data , error}= await supabase.auth.exchangeCodeForSession(code)
    console.log(data)
    return redirect(303, '/')
  }
 


}