import React, {useState} from "react";
import {createTuitPostThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const currentUser = {
        "userIcon": "cow.webp",
        "userName": "Jiazhe",
        "handle": "@jiazhe"
    };
    const templateTuitPost = {
        ...currentUser,
        "topic": "",
        "time": "1h",
        "image": "google.jpg",
        "title": "Google",
        "content": "Google it!",
        "href": "https://www.google.com/",
        "replies": 0,
        "retuits": 0,
        "likes": 0,
        "liked": false,
        "dislikes": 0,
        "disliked": false
    }
    const tuitPostClickHandler = () => {
        const newTuitPost = {
            ...templateTuitPost,
            tuit: whatsHappening
        }
        dispatch(createTuitPostThunk(newTuitPost));
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="/images/cow.webp" className="img-fluid rounded-circle float-start" width="48" height="48"/>
            </div>
            <div className="col-10">
                <textarea value={whatsHappening} placeholder="What's happening?"
                         className="form-control border-0"
                         onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3"
                            onClick={tuitPostClickHandler}>Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;