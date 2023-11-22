import styled from "styled-components";
import { useState } from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import firebase from 'firebase/compat/app'
import close from '../images/close.svg';
import user from '../images/user.svg';
import media from '../images/media-img.svg';
import comment from '../images/comments.svg';
import video from '../images/video.svg';
import { postArticleAPI } from '../actions/index';

function PostModal(props) {
    const [editorText, setEditorText] = useState("");
    const [shareImg, setShareImg] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === "" | image === undefined) {
            alert(`Not an image, image file is a ${typeof (image)}`)
            return;
        }

        setShareImg(image);
    }

    const switchAsset = (area) => {
        setAssetArea('');
        setVideoLink('');
        setAssetArea(area);
    }

    const postArticle = (e) => {
        e.preventDefault();

        const payload = {
            image: shareImg,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now()
        }

        props.postArticle(payload);
        reset(e);
    }

    const reset = (e) => {
        setEditorText("");
        setShareImg('');
        setVideoLink('');
        props.handleClick(e);
    }

    return (
        <>
            {props.showModal === "open" &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a post</h2>
                            <button onClick={(e) => reset(e)}>
                                <img alt='' src={close} />
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                {
                                    props.user.photoURL ?
                                        <img alt='' src={props.user.photoURL} /> :
                                        <img alt='' src={user} />}
                                <span>{props.user.displayName}</span>
                            </UserInfo>
                            <Editor>
                                <textarea
                                    value={editorText}
                                    onChange={(e) => setEditorText(e.target.value)}
                                    placeholder="What do you want to talk about?"
                                    autoFocus={true}
                                />
                                {assetArea === 'image' ? (
                                    <UploadImage>
                                        <input
                                            type="file"
                                            accept="image/gif, image/jpeg, image/png"
                                            id='file'
                                            style={{ display: 'none' }}
                                            onChange={handleChange}
                                        />
                                        <p>
                                            <label htmlFor="file">
                                                Select an image to share
                                            </label>
                                        </p>
                                        {shareImg && <img alt='' src={URL.createObjectURL(shareImg)} />}
                                    </UploadImage>) : (
                                    assetArea === "media" &&
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Video link"
                                            value={videoLink}
                                            onChange={(e) => setVideoLink(e.target.value)} />
                                        {videoLink && <ReactPlayer width={'100%'} url={videoLink} />}
                                    </>)
                                }
                            </Editor>
                        </SharedContent>
                        <SharedCreation>
                            <AttachAssets>
                                <AssetButton onClick={() => switchAsset("image")}>
                                    <img alt='' src={media} style={{ width: '26px' }} />
                                </AssetButton>
                                <AssetButton onClick={() => switchAsset("media")}>
                                    <img alt='' src={video} style={{ width: '26px' }} />
                                </AssetButton>
                            </AttachAssets>
                            <ShareComment>
                                <AssetButton>
                                    <img alt='' src={comment} style={{ width: '26px', marginRight: '5px' }} />
                                    Anyone
                                </AssetButton>
                            </ShareComment>
                            <PostButton disabled={!editorText ? true : false} onClick={(e) => postArticle(e)}>
                                Post
                            </PostButton>
                        </SharedCreation>
                    </Content>
                </Container >
            }
        </>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    color: black;
    background-color: rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.3s;
`

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: #fff;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`

const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0, 0, 0, 0.15);
        svg, img {
            pointer-events: none;
        }
    }
`

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg, img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }
    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`

const SharedCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`

const AssetButton = styled.button`
display: flex;
align-items: center;
height: 40px;
min-width: auto;
color: rgba(0, 0, 0, 0.5);
`

const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;
    ${AssetButton} {
        width: 40px;
    }    
`
const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    ${AssetButton} {
        svg {
            margin-right: 5px;
        }
    }
`
const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    border: none;
    padding: 0 18px;
    background: ${props => props.disabled ? 'rgba(0, 0, 0, 0.15)' : '#0a66c2'};
    color: #fff;
    &:hover {
        background: ${props => props.disabled ? 'rgba(0, 0, 0, 0.15)' : '#004182'};
    }
`

const Editor = styled.div`
    padding: 12px 24px;
    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
    }
    input {
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`

const UploadImage = styled.div`
    text-align: center;
    img {
        width: 100%;
    }
`

const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)