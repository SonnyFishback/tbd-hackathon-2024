import { redirect } from '@sveltejs/kit'

export const GET = async ({ url, locals: { supabase, getSession } }) => {
  const code = url.searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }
  
  const session = await getSession()

  if(!session) 
  {
    return redirect(303, '/')
  }

}