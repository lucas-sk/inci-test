import { Link } from 'react-router-dom'

import inciLogo from '@/assets/inci.svg'
import inciLogoShort from '@/assets/inci-logo.png'
import { Button } from '@/components/ui/button'

export function Login() {
  return (
    <div className="w-screen max-h-screen space-y-[87px]">
      <header className="flex justify-center py-6">
        <img src={inciLogo} alt="" />
      </header>
      <main className="flex flex-col justify-center px-10 py-8 max-w-lg mx-auto space-y-8">
        <div className="w-full flex justify-between ">
          <div>
            <h2>Fazer login</h2>
            <p>Use sua conta INCI</p>
          </div>
          <img src={inciLogoShort} alt="" />
        </div>
        <form action="">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email ou telefone</label>
            <input type="text" id="email" placeholder="thiago@zamply.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">senha</label>
            <input type="password" id="password" />
          </div>
          <span>Esqueci a senha</span>
        </form>

        <div>
          <div>
            <p>
              Não está no seu computador? Use o modo visitante para fazer login
              com privacidade.
            </p>
            <br />
            <Button variant={'link'}>
              <Link className="underline text-blue-400" to={'/'}>
                Saiba mais
              </Link>
            </Button>
          </div>
          <div className="flex flex-col text-center">
            <Button className="bg-blue-300 hover:bg-blue-600">
              <Link to={'/hub'}>Entrar</Link>
            </Button>
            <Button variant={'link'}>
              <Link to={'/sign-up'}>Criar Conta</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
