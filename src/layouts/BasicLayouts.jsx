import { Outlet } from "react-router";

function BasicLayouts() {
    return (
        <>
            <header className="bg-black text-white py-4 shadow-md flex flex-col sm:flex-row items-center justify-between px-6">
                <div className="text-2xl font-semibold flex items-center gap-2">
                    <span role="img" aria-label="notes">📝</span> notes
                </div>
                <div className="mt-3 sm:mt-0 flex gap-3">
                    <div className="bg-black border-2 text-white px-4 py-2 rounded ">sign-in</div>
                    <div className="bg-white text-black px-4 py-2 rounded">sign-up</div>
                </div>
            </header>
            <main className="">
                <Outlet />
            </main>
        </>
    );
}

export default BasicLayouts;