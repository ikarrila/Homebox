import './Navbar.css';
export default function NavbarButton({ handleCheckboxChange, isChecked }) {
    return (
        <div>
            <input id="toggle" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}></input>
            <label style={{ padding: '1px' }} htmlFor="toggle" className="hamburger" >
                <div class="top-bun"></div>
                <div class="meat"></div>
                <div class="bottom-bun"></div>
            </label>
        </div>
    )
}