import './Header.css';

function Header(props){
    return(

        <div className='mainheader'>
            <h4>YourLogo</h4>
            <ul>
                <li>Home</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        
        <button>{props.text}</button>
        </div>
    );
}

export default Header;