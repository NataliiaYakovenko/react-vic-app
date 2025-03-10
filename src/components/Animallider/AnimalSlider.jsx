import { Component } from "react";
import dog from './dog.avif';
import styles from './AnimalSlider.module.css'

class AnimalSlider extends Component{
    constructor(props){
        super(props);

        this.state ={
           imgSrc: dog,
           caption: 'This is some dog'
        }  
        this.id = null 
    }


    loadImg=()=>{
        console.log('load');
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(data=>this.setState({imgSrc:data.message}))
        .catch(err=>console.log('Error'))
    }

    componentDidMount(){
      //this.id = setInterval( this.loadImg,2000)
     this.loadImg()
    }

    componentDidUpdate(){
       this.id = setTimeout(this.loadImg,2000)
    }

    componentWillUnmount(){
        //clearInterval(this.id)
        clearTimeout(this.id)
    }


    render(){
        const {imgSrc,caption}= this.state

        return(
            <figure className={styles.sliderContainer}>
                <img  src={imgSrc} alt='dog'/>
                <figcaption>{caption}</figcaption>
            </figure>
        )
    }
}

export default AnimalSlider