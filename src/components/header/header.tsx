import SearchIcon from "../icons/Search";

const Header = () => {
    return(
        <header className="flex">
            <h1>Caelum</h1>
            <form>
                <input type="text" placeholder="Enter location name" className="text-neutral-900 border-2 border-neutral-300" />
                <button>
                    <SearchIcon />
                </button>
            </form>
        </header>
    )
}
export default Header;