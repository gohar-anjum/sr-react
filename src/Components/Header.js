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
        </div>
    );
}

export default Header;