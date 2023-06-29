import styled from 'styled-components';

export const Container = styled.div`
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ProfileForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.275rem;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 1rem;

    label {
        color: ${({ theme }) => theme.colors.blue_70};
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    button:first-child {
        width: 150px;
    }

    button:last-child {
        width: 200px;
    }
`