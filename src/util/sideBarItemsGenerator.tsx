import { NavLink } from "react-router-dom";
import { TsideBarItems, TuserPath } from "../types";


export const sideBarItemsGenerator = (items: TuserPath[], role: string) => {

    const sideBarItems = items.reduce((acc: TsideBarItems[], item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}> {item.name} </NavLink>
            });
        }

        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map((child) => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`} > {child.name} </NavLink>
                }))
            })
        }

        return acc;
    }, []);
    return sideBarItems

}

export default sideBarItemsGenerator