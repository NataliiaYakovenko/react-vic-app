import React from "react";
import photo from './userDefault.png';
import styles from'./UsersSlider.module.css'

class UsersSlider extends React.Component{
    constructor(props){
        super(props);

        this.state={
            imgSrc : photo,
            caption: 'This is some human'
        }
        this.id = null;
    }
    load=()=>{
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => this.state({imgSrc:data.picture.large}))
        .catch(err => console.log('Error'))
    }

    componentDidMount(){
       this.load()
    }
    componentDidUpdate(){
        this.id = setInterval(this.load,2000) 
    }

    render(){
       const {imgSrc,caption}= this.state
        return(
            <figure className={styles.wrapper}>
                <img src={imgSrc} alt='human'/>
                <figcaption>{caption}</figcaption>
            </figure>
        )
    }
}

export default UsersSlider