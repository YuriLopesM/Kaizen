import { useNavigate } from "react-router-dom"
import { Logo, Button, Input } from "../../components"
import { BlueVerticalPattern, Container, Form, Hero, OrangePattern, Text } from "./styles"

export function Login() {
    const navigate = useNavigate();

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
                        <Input 
                            id="user"
                            type="text"
                            hasLabel={true}
                            labelText="Nome de usuário"
                        />
                        <Input 
                            id="password"
                            type="password"
                            hasLabel={true}
                            labelText="Senha"
                        />
                    </section>
                    <Button
                        styleType="primary"
                        size="medium"
                        onClick={() => navigate('/dashboard')}
                    >
                        Entrar
                    </Button>
                </Form>
            </Hero>
        </Container>
    )
}