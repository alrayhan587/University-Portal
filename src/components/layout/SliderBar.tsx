
import { Layout, Menu } from 'antd';
import sideBarItemsGenerator from '../../util/sideBarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.route';
import { studentPaths } from '../../routes/student.route';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/feature/auth/authSlice';
const { Sider } = Layout;

const userRole = {
    ADMIN: 'superAdmin',
    FACULTY: 'faculty',
    STUDENT: 'student',
};


const SliderBar = () => {
    const user = useAppSelector(selectCurrentUser);

    
    let sidebarItems;

    switch (user!.role) {
        case userRole.ADMIN:
            sidebarItems = sideBarItemsGenerator(adminPaths, userRole.ADMIN);
            break;
        case userRole.FACULTY:
            sidebarItems = sideBarItemsGenerator(facultyPaths, userRole.FACULTY);
            break;
        case userRole.STUDENT:
            sidebarItems = sideBarItemsGenerator(studentPaths, userRole.STUDENT);
            break;

        default:
            break;
    }

    return (
        <Sider>
            <div style={{
                color: 'white',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1>PH<sub style={{ fontWeight: 'lighter' }}>University</sub></h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />

        </Sider>
    )
}

export default SliderBar