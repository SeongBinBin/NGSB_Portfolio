import React, {useState} from "react";
import '../Style/AOBO.css'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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
        <div className="AOBO_container">
            <div>
                <div className="AOBO_main">
                    <span>프로젝트 1</span>
                    <span>AOBO ( All Of the BoxOffice )</span>
                    {/* <span>박스오피스 프로젝트</span>
                    <a href="https://github.com/SeongBinBin/AOBO" target="_blank" rel="noopener noreferrer">GitHub</a> */}
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
                </div>
            </div>
        </div>
    )
}
export default AOBO