import { NavLinks } from '../NavLinks';

export function AsideBar() {
    return (
        <aside className="hidden h-screen border-r md:block">
            <NavLinks />
        </aside>
    );
}
