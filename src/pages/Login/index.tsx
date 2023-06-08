import { Logo } from "../../components"
import { BlueVerticalPattern, Container, Form, Hero, OrangePattern, Text } from "./style"

export function Login() {
    return (
        <Container>
            <OrangePattern />
            <BlueVerticalPattern />
            <Hero>
                <Text>
                    <Logo size={3.5} />
                    <p className='main-text'>A solução que você procura para organizar sua vida acadêmica de maneira simples e <span>eficiente.</span></p>
                    <p className='sub-text'>Com o Kaizen, você tem acesso a uma aplicação completa e intuitiva que conecta sua grade horária à localização no campus, tornando mais fácil visualizar suas aulas e deslocamentos.</p>
                </Text>
                <Form>
                    <h2>Login</h2>
                    <section>
                        <div>
                            <label htmlFor="user">Nome de usuário</label>
                            <input type="text" id="user" />
                        </div>
                        <div>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" />
                        </div>
                    </section>
                    <button>
                        Entrar
                    </button>
                </Form>
            </Hero>
        </Container>
    )
}