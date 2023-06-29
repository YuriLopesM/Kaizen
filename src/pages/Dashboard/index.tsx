import { Header, Layout } from "../../components"

export const Dashboard = () => {
    return (
        <Layout
            headerComponent={<Header title="Dashboard" />}
            menuComponent={<nav style={{ backgroundColor: 'blue', height: '100%' }}>menu</nav>}
        >
            Dashboard
        </Layout>
    )
}