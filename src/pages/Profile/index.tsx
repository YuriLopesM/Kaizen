import { useEffect, useMemo, useReducer } from "react"
import { useAuth, useHeaderTitle } from "../../hooks"
import { ButtonWrapper, Container, ProfileForm, Row } from "./styles";
import { Button, Input, Select } from "../../components";
import { BRAZILIAN_STATES } from "../../utils/states";


interface Profile {
    name: string;
    surname: string;
    email: string;
    telephoneNumber: string;
    phoneNumber: string;
    cpf: string;
    cep: string;
    address: string;
    number: string;
    district: string;
    city: string;
    state: string;
}

interface ProfileState {
    profile: Profile;
}

interface ProfileAction {
    type: 'CHANGE_NAME' | 'CHANGE_SURNAME' | 'CHANGE_EMAIL' | 'CHANGE_TELEPHONE_NUMBER' | 'CHANGE_PHONE_NUMBER' | 'CHANGE_CPF' | 'CHANGE_CEP' | 'CHANGE_ADDRESS' | 'CHANGE_NUMBER' | 'CHANGE_DISTRICT' | 'CHANGE_CITY' | 'CHANGE_STATE' | 'DELETE_PROFILE';
    payload: string;
}

const userProfileReducer = (state: ProfileState, action: ProfileAction) => {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    name: payload
                }
            }
        case 'CHANGE_SURNAME':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    surname: payload
                }
            }
        case 'CHANGE_EMAIL':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    email: payload
                }
            }
        case 'CHANGE_TELEPHONE_NUMBER':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    telephoneNumber: payload
                }
            }
        case 'CHANGE_PHONE_NUMBER':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    phoneNumber: payload
                }
            }
        case 'CHANGE_CPF':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    cpf: payload
                }
            }
        case 'CHANGE_CEP':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    cep: payload
                }
            }
        case 'CHANGE_ADDRESS':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    address: payload
                }
            }
        case 'CHANGE_NUMBER':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    number: payload
                }
            }
        case 'CHANGE_DISTRICT':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    district: payload
                }
            }
        case 'CHANGE_CITY':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    city: payload
                }
            }
        case 'CHANGE_STATE':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    state: payload
                }
            }
        case 'DELETE_PROFILE':
            return {
                profile: {
                    name: '',
                    surname: '',
                    email: '',
                    telephoneNumber: '',
                    phoneNumber: '',
                    cpf: '',
                    cep: '',
                    address: '',
                    number: '',
                    district: '',
                    city: '',
                    state: ''
                }
            }
        default:
            return state
    }
}

const userProfileInitializer = () =>
    JSON.parse(localStorage.getItem("user-profile:kaizen") as string) || {
        profile: {
            name: 'Yuri',
            surname: 'Lopes Machado',
            email: 'yurilopesmachado@email.com',
            telephoneNumber: '(99) 9999-9999',
            phoneNumber: '(99) 99999-9999',
            cpf: '111.111.111-11',
            cep: '88888-888',
            address: 'Rua das Flores',
            number: '120',
            district: 'Rio Maina',
            city: 'Criciúma',
            state: 'SC'
        }
    };

export const Profile = () => {
    const [user, dispatchUserChange] = useReducer(userProfileReducer, [], userProfileInitializer)

    const hasEmptyFields = useMemo(() => {
        return Object.values(user.profile).some(value => value === '')
    }, [user.profile])

    const { handleLogout } = useAuth()
    const { handleChangeTitle } = useHeaderTitle()

    useEffect(() => {
        handleChangeTitle('Perfil')
    }, [])

    const handleSendProfile = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if (hasEmptyFields) return alert('Preencha todos os campos!')

        localStorage.setItem('user-profile:kaizen', JSON.stringify(user))
        alert('Salvo com sucesso!')
    }

    const handleDeleteProfile = (id: string) => {
        if (confirm('Deseja deletar o perfil? Essa ação não tem volta!')) {
            // fetch delete http com o id do usuário
            console.log(id)
            dispatchUserChange({ type: 'DELETE_PROFILE', payload: '' })
            handleLogout()
        } else return

        alert('Perfil deletado com sucesso!')
    }

    return (
        <Container>
            <ProfileForm>
                <Row>
                    <Input
                        id="name"
                        type="text"
                        required
                        labelText="Nome"
                        styleSize="small"
                        value={user.profile.name}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_NAME', payload: e.target.value })}
                        style={{ width: '150px' }}
                    />
                    <Input
                        id="surname"
                        type="text"
                        required
                        labelText="Sobrenome"
                        styleSize="small"
                        value={user.profile.surname}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_SURNAME', payload: e.target.value })}
                        style={{ width: '250px' }}

                    />
                    <Input
                        id="telephoneNumber"
                        type="tel"
                        required
                        labelText="Telefone"
                        styleSize="small"
                        value={user.profile.telephoneNumber}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_TELEPHONE_NUMBER', payload: e.target.value })}
                        style={{ width: '200px' }}
                    />
                    <Input
                        id="phoneNumber"
                        type="tel"
                        required
                        labelText="Celular"
                        styleSize="small"
                        value={user.profile.phoneNumber}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_PHONE_NUMBER', payload: e.target.value })}
                        style={{ width: '200px' }}
                    />
                </Row>
                <Row>
                    <Input
                        id="email"
                        type="email"
                        required
                        labelText="E-mail"
                        styleSize="small"
                        value={user.profile.email}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_EMAIL', payload: e.target.value })}
                        style={{ width: '420px' }}
                    />
                    <Input
                        id="cpf"
                        type="text"
                        required
                        labelText="CPF"
                        styleSize="small"
                        value={user.profile.cpf}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_CPF', payload: e.target.value })}
                        style={{ width: '150px' }}
                    />
                    <Input
                        id="cep"
                        type="text"
                        required
                        labelText="CEP"
                        styleSize="small"
                        value={user.profile.cep}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_CEP', payload: e.target.value })}
                        style={{ width: '100px' }}
                    />
                </Row>
                <Row>
                    <Input
                        id="address"
                        type="text"
                        required
                        labelText="Endereço"
                        styleSize="small"
                        value={user.profile.address}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_ADDRESS', payload: e.target.value })}
                        style={{ width: '300px' }}
                    />
                    <Input
                        id="number"
                        type="text"
                        required
                        labelText="Número"
                        styleSize="small"
                        value={user.profile.number}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_NUMBER', payload: e.target.value })}
                        style={{ width: '75px' }}
                    />
                    <Input
                        id="district"
                        type="text"
                        required
                        labelText="Bairro"
                        styleSize="small"
                        value={user.profile.district}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_DISTRICT', payload: e.target.value })}
                    />
                    <Input
                        id="city"
                        type="text"
                        required
                        labelText="Cidade"
                        styleSize="small"
                        value={user.profile.city}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_CITY', payload: e.target.value })}
                        style={{ width: '200px' }}
                    />
                    <Select
                        id="state"
                        required
                        labelText="Estado"
                        styleSize="small"
                        value={user.profile.state}
                        options={BRAZILIAN_STATES}
                        onChange={(e) => dispatchUserChange({ type: 'CHANGE_STATE', payload: e.target.value })}
                    />
                </Row>
            </ProfileForm>
            <ButtonWrapper>
                <Button 
                    styleType="default" 
                    size="small"
                    type="button"
                    onClick={() => handleDeleteProfile('id_do_usuario')}
                >
                    Deletar Conta
                </Button>
                <Button 
                    styleType="primary" 
                    size="small"
                    type="submit"
                    onClick={(e) => handleSendProfile(e)}
                    disabled={hasEmptyFields}
                >
                    Salvar
                </Button>
            </ButtonWrapper>
        </Container>
    )
}