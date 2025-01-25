
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";



/* A single array we have. i want to use it make everything from it. 
1. We have an array name admin path.
2. adminpath have everything but in adminRoute and AdminSideBarItem need some of the value from adminPath
3. to create adminRoute we have used a code using reduce and forEach
4. to create adminSideBarItem we have used reduce and map*/



export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />
            }
        ]
    }
]










//@Programmming way of handling the sidebar of the navigation
/*
export const adminSideBarItems = adminPaths.reduce((acc: TsideBarItems[], item) => {
    if (item.path && item.name) {
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        });
    }

    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map((child) => ({
                key: child.name,
                label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
            }))
        })
    }

    return acc;
}, [])

*/

//@ Programming way of handling routes.
/*
//Now we are doing it dynamically and implementing it at routeGenerator
export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element,
        })
    }

    if (item.children) {
        item.children.forEach(child => {
            acc.push({
                path: child.path,
                element: child.element,
            });
        });
    }

    return acc;
}, [])
*/






//! Hard coded way 
/*
const adminPath = [
    {
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    {
        path: 'create-student',
        element: <CreateStudent />,
    },
    {
        path: 'create-admin',
        element: <CreateAdmin />,
    },
    {
        path: 'create-faculty',
        element: <CreateFaculty />,
    },
]

export default adminPath;

*/