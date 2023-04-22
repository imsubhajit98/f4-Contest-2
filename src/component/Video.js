import './Video.css'

function Video({title,bgColor}){
    
    let bg="dark";
    return(
        <>
            <div className={bg} style={{backgroundColor:bgColor}}> {title} Development</div>
            <img src="https://via.placeholder.com/640x360" alt="demo photo" />
        </>
    );
}
export default Video;