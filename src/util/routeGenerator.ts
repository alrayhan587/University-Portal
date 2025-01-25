

import { TRoute, TuserPath } from "../types";



export const routeGenerator = (items: TuserPath[]) => {

    //@ Programming way of handling routes.

    const routes = items.reduce((acc: TRoute[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element,
            })
        }

        if (item.children) {
            item.children.forEach(child => {
                acc.push({
                    path: child.path!, //Using not null assertion,
                    element: child.element,
                });
            });
        }

        return acc;
    }, [])

    return routes;

}