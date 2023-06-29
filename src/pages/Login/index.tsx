import { useState } from "react"; 
import { useAuth } from "../../hooks";
import { Logo, Button, Input } from "../../components"
import { BlueVerticalPattern, Container, Form, Hero, OrangePattern, Text } from "./styles"

export function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const { handleLogin } = useAuth();

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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input 
                            id="password"
                            type="password"
                            hasLabel={true}
                            labelText="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </section>
                    <Button
                        styleType="primary"
                        size="medium"
                        onClick={() => handleLogin({ name, password })}
                    >
                        Entrar
                    </Button>
                </Form>
            </Hero>
        </Container>
    )
}