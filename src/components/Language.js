import React from "react"; 

const Language = ({setIngles}) => {

    const handleChange = () => {

        var checkbox = document.getElementById('myCheck');

        if (checkbox.checked === true) {
            setIngles(true);
        } else {
            setIngles(false);
        }
    }


    return (
        <div className="container_language" data-aos="fade-down" data-aos-delay="2800" data-aos-duration="2000">
            <p>ESP</p>
            <label class="switch">
                <input type="checkbox" id="myCheck" onClick={handleChange}/>
                <span class="slider round"></span>
            </label>
            <p>ENG</p>
        </div>
    )
};

export default Language;