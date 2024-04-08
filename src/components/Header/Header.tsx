import "./Header.scss";
export default function Header() {
    return (
        <header>
            <div className="container mx-auto flex flex-wrap p-5 flex-col items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4">
                    {/* <img src={locofy} /> */}
                    <div className="logo_text">BackLinkStudio.com</div>
                </a>
                <div className="flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5">First Link</a>
                    <a className="mr-5">Second Link</a>
                    <a className="mr-5">Third Link</a>
                    <a className="mr-5">Fourth Link</a>
                </div>
                <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4">Click Me</button>
            </div>
        </header>
    );
}
