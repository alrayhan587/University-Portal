import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import SliderBar from './SliderBar';

const { Header, Content, Footer } = Layout;


export const Mainlayout = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <SliderBar />
            <Layout>
                <Header style={{ padding: 0, }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,

                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout >
    )
}






/*
//Hard coded database, logically we have used called in admin.routes.tsx
const items: MenuProps['items'] = [
    {
        key: 'lfljslkflsjfljsl',
        label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
    },

    {
        key: 'lfljslkflsjfljsw',
        label: 'User Management',
        children: [
            {
                key: '12',
                label: <NavLink to="/admin/create-student">Create Student</NavLink>,
            },
            {
                key: '13',
                label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,

            },
            {
                key: '14',
                label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
            }
        ]
    }
]
*/