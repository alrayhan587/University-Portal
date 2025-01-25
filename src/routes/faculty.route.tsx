import FacultyDashBoard from "../pages/Faculty/FacultyDashBoard";
import OfferedCourse from "../pages/Faculty/OfferedCourse";

export const facultyPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <FacultyDashBoard />,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <OfferedCourse />,
  },
];