import './Header.css';

function Header(props){
    const clicked = ()=>{
        
    }
    return(
        <div className='mainheader'>
            <h4>YourLogo</h4>
            <ul>
                <li>Home</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        
        <button >Click me</button>
        </div>
    );
}

export default Header;