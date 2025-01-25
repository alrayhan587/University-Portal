
import OfferedCourse from "../pages/Student/OfferedCourse";
import StudentDashBoard from "../pages/Student/StudentDashBoard";

export const studentPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <StudentDashBoard/>,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <OfferedCourse />,
  },
];