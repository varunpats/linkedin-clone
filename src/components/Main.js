import styled from "styled-components";
import user from '../images/user.svg';
import media from '../images/media-svg.svg';
import events from '../images/events-svg.svg';
import article from '../images/article-svg.svg';

export default function Main() {
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src={user} />
                    <button>Start a post</button>
                </div>

                <div>
                    <button>
                        <img src={media} />
                        <span>Media</span>
                    </button>

                    <button>
                        <img src={events} />
                        <span>Event</span>
                    </button>

                    <button>
                        <img src={article} />
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>
        </Container>
    )
}

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%); 
`;

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: #fff;
    div {
        button {
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
        }
        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0 16px;
            img {
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button {
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                backgroun-color: #fff;
                text-align: left; 
            }
        }
        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button {
                img {
                    margin: 0 4px 0 -2px;
                    height: 28px;
                }
                span {
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }
`