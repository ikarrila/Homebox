import './Navbar.css';
export default function NavbarButton({ handleCheckboxChange, isChecked }) {
    return (
        <div>
            <input id="toggle" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}></input>
            <label style={{ padding: '1px' }} htmlFor="toggle" className="hamburger" >
                <div className="top-bun"></div>
                <div className="meat"></div>
                <div className="bottom-bun"></div>
            </label>
        </div>
    )
}