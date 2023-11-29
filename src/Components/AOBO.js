import React, {useState} from "react";
import '../Style/AOBO.css'
import { AiOutlineLeft, AiOutlineRight, AiFillGithub, AiOutlineIe } from "react-icons/ai";

function AOBO(){
    const imageFiles = [
        "AOBO_Main.png",
        "AOBO_MovieInfo1.png",
        "AOBO_MovieInfo2.png",
        "AOBO_MovieInfo3.png",
        "AOBO_MovieInfo4.png",
    ]
    const explain = [
        "메인 페이지",
        "영화 선택",
        "영화 세부내용 확인",
        "날짜 선택",
        "선택 날짜의 박스오피스 정보",
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const PreviousSlide = () => {
        const newIndex = currentIndex === 0? imageFiles.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const NextSlide = () => {
        const newIndex = currentIndex === imageFiles.length - 1? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return(
        <div className="AOBO">
            <div className="AOBO_container">
                <div className="project_title">
                    <div style={{display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center'}}>
                        <span>프로젝트 1</span>
                        <span style={{fontSize: '1rem'}}>( 개인 프로젝트 )</span>
                    </div>
                    <div style={{display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center'}}>
                        <span>AOBO</span>
                        <span style={{fontSize: '1rem'}}>( All Of the BoxOffice )</span>
                    </div>
                </div>
                <div className="AOBO_main">
                    <div className="AOBO_img_container">
                        <div className="AOBO_img_box">
                            {imageFiles.map((imageName, index) => (
                                <img 
                                    key={index}
                                    style={{
                                        width: '100%', height: '100%',
                                        display: index === currentIndex? 'block': 'none'
                                    }}
                                    src={process.env.PUBLIC_URL + `/Imgs/AOBO/${imageName}`}
                                    alt={`AOBO ${index + 1}`}
                                />
                            ))}
                            {explain.map((explainText, index) => (
                                <span
                                    className="explain"
                                    style={{
                                        display: index === currentIndex? 'block': 'none'
                                    }}
                                >
                                    {explainText}
                                </span>
                            ))}
                        </div>
                        <div className="slider_controller">
                            <AiOutlineLeft className="left_icon" onClick={PreviousSlide}/>
                            <span>{`${currentIndex + 1} / ${imageFiles.length}`}</span>
                            <AiOutlineRight className="right_icon" onClick={NextSlide}/>
                        </div>
                    </div>
                    <div className="AOBO_text_container">
                        <span>AOBO는 All Of the BoxOffice의 줄임말입니다.</span>
                        <br/>
                        <span>저와 같이, 요즘 영화를 취미로 삼고 즐기시는 분들이 많습니다.</span>
                        <span>자연스레 영화의 정보를 쉽게 찾을 수 있습니다.</span>
                        <span>하지만 매일매일 쌓여가는 박스오피스에 관한 정보를 확인하는 것은 쉽지 않았고,</span>
                        <span>원하는 날짜의 박스오피스 순위는 어땠는지 쉽게 확인이 가능한 곳을 만들고 싶었습니다.</span>
                        <br/>
                        <span>AOBO는 자바스크립트를 활용한 웹 프로젝트입니다.</span>
                        <span>
                            <a href="https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do" target="_blank" rel="noopener noreferrer"  style={{textDecoration: 'underline'}}>영화 진흥 위원회</a>
                            의 일별 박스오피스와 영화 상세정보 API를 사용하고,
                        </span>
                        <span>
                        <a href="https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>TMDB</a>
                            의 영화 API 중에서 포스터 정보를 사용하였습니다.
                        </span>
                        <br/>
                        <span>회원관리에 사용한 DB는 MongoDB를 사용했고,</span>
                        <span>백엔드 배포는 cloudtype을 사용했습니다.</span>
                        <br/>
                        <div style={{display: 'flex', gap: 10}}>
                            <a href="https://seongbinbin.github.io/AOBO/" target="_blank" rel="noopener noreferrer"><AiOutlineIe size={30}/></a>
                            <a href="https://github.com/SeongBinBin/AOBO" target="_blank" rel="noopener noreferrer"><AiFillGithub size={30}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AOBO