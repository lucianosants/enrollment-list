import { NavLinks } from '../NavLinks';

export function AsideBar() {
    return (
        <aside className="hidden min-h-screen border-r md:block">
            <NavLinks />
        </aside>
    );
}
